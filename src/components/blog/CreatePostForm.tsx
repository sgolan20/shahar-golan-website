
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/services/blog.service";

interface CreatePostFormProps {
  onSubmit: (post: Omit<BlogPost, 'id' | 'created_at'>) => Promise<void>;
  isLoading: boolean;
}

export const CreatePostForm = ({ onSubmit, isLoading }: CreatePostFormProps) => {
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    image_url: "",
    youtube_url: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(newPost);
    setNewPost({
      title: "",
      description: "",
      image_url: "",
      youtube_url: ""
    });
  };

  return (
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "הוסף פוסט"}
        </Button>
      </form>
    </motion.div>
  );
};
