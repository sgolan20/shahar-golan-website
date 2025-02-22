import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image_url: string;
  youtube_url: string;
  created_at?: string;
}

export const fetchBlogPosts = async () => {
  const { data, error } = await supabase
    .from("public_blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from("public_blog_posts")
    .insert([post])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteBlogPost = async (id: string) => {
  const { error } = await supabase
    .from("public_blog_posts")
    .delete()
    .eq("id", id);
  
  if (error) throw error;
};
