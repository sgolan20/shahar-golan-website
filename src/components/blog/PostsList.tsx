
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/services/blog.service";

interface PostsListProps {
  posts: BlogPost[];
  onDelete: (id: string) => void;
}

export const PostsList = ({ posts, onDelete }: PostsListProps) => {
  return (
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
              onClick={() => onDelete(post.id)}
            >
              מחק
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
