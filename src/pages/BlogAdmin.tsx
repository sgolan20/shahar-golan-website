
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { CreatePostForm } from "@/components/blog/CreatePostForm";
import { PostsList } from "@/components/blog/PostsList";
import { fetchBlogPosts, createBlogPost, deleteBlogPost, type BlogPost } from "@/services/blog.service";
import { Button } from "@/components/ui/button";

const BlogAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast({
        title: "שגיאה בטעינת הפוסטים",
        description: "אירעה שגיאה בטעינת הפוסטים. נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
    }
  };

  const handleCreatePost = async (postData: Omit<BlogPost, "id" | "date">) => {
    setLoading(true);
    try {
      await createBlogPost(postData);
      toast({
        title: "הפוסט נוצר בהצלחה",
        description: "הפוסט החדש נוצר ונוסף לרשימת הפוסטים.",
      });
      loadPosts();
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        title: "שגיאה ביצירת הפוסט",
        description: "אירעה שגיאה ביצירת הפוסט. נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deleteBlogPost(postId);
      toast({
        title: "הפוסט נמחק בהצלחה",
        description: "הפוסט הוסר מרשימת הפוסטים.",
      });
      loadPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "שגיאה במחיקת הפוסט",
        description: "אירעה שגיאה במחיקת הפוסט. נסה שוב מאוחר יותר.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">ניהול בלוג</h1>
        <Button onClick={() => navigate("/blog")} variant="outline">
          חזרה לבלוג
        </Button>
      </div>
      
      <CreatePostForm onSubmit={handleCreatePost} isLoading={loading} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">רשימת פוסטים</h2>
        <PostsList posts={posts} onDelete={handleDeletePost} />
      </div>
    </div>
  );
};

export default BlogAdmin;
