import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CreatePostForm } from "@/components/blog/CreatePostForm";
import { PostsList } from "@/components/blog/PostsList";
import { fetchBlogPosts, createBlogPost, deleteBlogPost, type BlogPost } from "@/services/blog.service";

const BlogAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
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
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    }
  };

  const handleCreatePost = async (post: Omit<BlogPost, 'id' | 'created_at'>) => {
    setLoading(true);
    try {
      const newPost = await createBlogPost(post);
      setPosts((prevPosts) => [...prevPosts, newPost]);
      toast({
        title: "הפוסט נוצר בהצלחה",
      });
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        title: "שגיאה ביצירת הפוסט",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deleteBlogPost(postId);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      toast({
        title: "הפוסט נמחק בהצלחה",
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "שגיאה במחיקת הפוסט",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    }
  };

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
