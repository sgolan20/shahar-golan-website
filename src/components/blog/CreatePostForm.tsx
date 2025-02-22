import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { BlogPost } from "@/services/blog.service";

interface CreatePostFormProps {
  onSubmit: (post: Omit<BlogPost, 'id' | 'created_at'>) => Promise<void>;
  isLoading: boolean;
}

export const CreatePostForm = ({ onSubmit, isLoading }: CreatePostFormProps) => {
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    youtube_url: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      ...newPost,
      image_url: getYouTubeThumbnail(newPost.youtube_url)
    });
    setNewPost({
      title: "",
      description: "",
      youtube_url: ""
    });
  };

  const getYouTubeThumbnail = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`
      : "";
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
          <Label className="block text-sm mb-2">כותרת</Label>
          <Input
            placeholder="הכנס כותרת לפוסט"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div>
          <Label className="block text-sm mb-2">תיאור</Label>
          <Textarea
            placeholder="הכנס תיאור לפוסט"
            value={newPost.description}
            onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
            className="min-h-[100px]"
          />
        </div>
        <div>
          <Label className="block text-sm mb-2">קישור ליוטיוב</Label>
          <Input
            placeholder="https://www.youtube.com/watch?v=..."
            value={newPost.youtube_url}
            onChange={(e) => setNewPost({ ...newPost, youtube_url: e.target.value })}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              שומר...
            </>
          ) : (
            'הוסף פוסט'
          )}
        </Button>
      </form>
    </motion.div>
  );
};
