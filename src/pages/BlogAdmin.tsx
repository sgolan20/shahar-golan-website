
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { LoginForm } from "@/components/auth/LoginForm";
import { CreatePostForm } from "@/components/blog/CreatePostForm";
import { PostsList } from "@/components/blog/PostsList";
import { checkAuthUser, loginWithEmail } from "@/services/auth.service";
import { fetchBlogPosts, createBlogPost, deleteBlogPost, type BlogPost } from "@/services/blog.service";

const ADMIN_EMAIL = 'sgolan20@gmail.com';

const BlogAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const user = await checkAuthUser();
      console.log("Current user:", user);
      if (user?.email === ADMIN_EMAIL) {
        setIsAuthenticated(true);
        loadPosts();
      } else {
        setIsAuthenticated(false);
      }
    } catch (error: any) {
      console.error("Error checking user:", error);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("Attempting login with:", email);
      const { user } = await loginWithEmail(email, password);
      console.log("Login response:", { user });
      
      if (user?.email === ADMIN_EMAIL) {
        setIsAuthenticated(true);
        toast({
          title: "התחברת בהצלחה",
          description: "ברוך הבא למערכת ניהול"
        });
        loadPosts();
      } else {
        throw new Error("אין לך הרשאות מנהל");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "שגיאה בהתחברות",
        description: error.message,
        variant: "destructive"
      });
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async () => {
    try {
      const data = await fetchBlogPosts();
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: "שגיאה בטעינת הפוסטים",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleCreatePost = async (post: Omit<BlogPost, 'id' | 'created_at'>) => {
    setLoading(true);
    try {
      await createBlogPost(post);
      toast({
        title: "הפוסט נוסף בהצלחה",
        description: "הפוסט החדש נוסף לבלוג"
      });
      loadPosts();
    } catch (error: any) {
      toast({
        title: "שגיאה בהוספת הפוסט",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!window.confirm("האם אתה בטוח שברצונך למחוק פוסט זה?")) return;
    
    try {
      await deleteBlogPost(id);
      toast({
        title: "הפוסט נמחק בהצלחה"
      });
      loadPosts();
    } catch (error: any) {
      toast({
        title: "שגיאה במחיקת הפוסט",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (!isAuthenticated) {
    return <LoginForm onSubmit={handleLogin} isLoading={loading} />;
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <CreatePostForm onSubmit={handleCreatePost} isLoading={loading} />
        <PostsList posts={posts} onDelete={handleDeletePost} />
      </div>
    </div>
  );
};

export default BlogAdmin;
