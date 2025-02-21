
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "איך להתחיל עם ChatGPT",
    excerpt: "מדריך מקיף לשימוש יעיל ב-ChatGPT בסביבת העבודה",
    date: "2024-02-15",
    readTime: "5 דקות קריאה"
  },
  {
    id: 2,
    title: "בינה מלאכותית בארגונים",
    excerpt: "טיפים להטמעת כלי AI בארגון שלכם",
    date: "2024-02-10",
    readTime: "7 דקות קריאה"
  },
  {
    id: 3,
    title: "עתיד ההדרכה בעידן ה-AI",
    excerpt: "כיצד בינה מלאכותית משנה את עולם ההדרכה והלמידה",
    date: "2024-02-05",
    readTime: "6 דקות קריאה"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 font-heebo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">בלוג</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-primary hover:underline"
              >
                קרא עוד →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
