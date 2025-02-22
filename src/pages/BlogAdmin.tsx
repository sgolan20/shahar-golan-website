
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const BlogAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    image_url: "",
    youtube_url: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log("Current user:", user);
      if (user?.email === 'sgolan20@gmail.com') {
        setIsAuthenticated(true);
        fetchPosts();
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking user:", error);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Attempting login with:", email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      console.log("Login response:", { data, error });
      
      if (error) throw error;
      
      if (data.user?.email === 'sgolan20@gmail.com') {
        setIsAuthenticated(true);
        toast({
          title: "התחברת בהצלחה",
          description: "ברוך הבא למערכת ניהול"
        });
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

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: "שגיאה בטעינת הפוסטים",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase
        .from("blog_posts")
        .insert([newPost]);
      
      if (error) throw error;
      
      toast({
        title: "הפוסט נוסף בהצלחה",
        description: "הפוסט החדש נוסף לבלוג"
      });
      
      setNewPost({
        title: "",
        description: "",
        image_url: "",
        youtube_url: ""
      });
      
      fetchPosts();
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

  const handleDelete = async (id: string) => {
    if (!window.confirm("האם אתה בטוח שברצונך למחוק פוסט זה?")) return;
    
    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
      
      toast({
        title: "הפוסט נמחק בהצלחה"
      });
      
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "שגיאה במחיקת הפוסט",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h1 className="text-2xl font-bold mb-6">התחברות למערכת ניהול</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="אימייל"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "התחבר"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-sm mb-8"
        >
          <h1 className="text-2xl font-bold mb-6">הוספת פוסט חדש</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="כותרת"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="תיאור"
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="קישור לתמונה"
                value={newPost.image_url}
                onChange={(e) => setNewPost({ ...newPost, image_url: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                placeholder="קישור ליוטיוב"
                value={newPost.youtube_url}
                onChange={(e) => setNewPost({ ...newPost, youtube_url: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "הוסף פוסט"}
            </Button>
          </form>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">פוסטים קיימים</h2>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(post.id)}
                >
                  מחק
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
