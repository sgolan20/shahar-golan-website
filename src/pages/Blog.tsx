import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { fetchBlogPosts, type BlogPost } from "@/services/blog.service";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts || []);
    } catch (error: any) {
      toast({
        title: "שגיאה בטעינת הפוסטים",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : url;
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 font-heebo">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">הבלוג שלי</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative pb-[56.25%]">
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                {post.description && (
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{post.description}</p>
                )}
                {post.youtube_url && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        צפה בסרטון
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] h-[500px]">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getYouTubeEmbedUrl(post.youtube_url)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
