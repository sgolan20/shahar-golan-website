
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 font-heebo">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">אודות</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg mx-auto text-right"
        >
          <p className="mb-6">
            שלום, אני שחר גולן, מומחה בתחום הבינה המלאכותית עם ניסיון רב בהדרכה והוראה. 
            אני מאמין שהמפתח להצלחה בעידן ה-AI הוא היכולת להבין ולהטמיע טכנולוגיות חדשות 
            בצורה פרקטית ויעילה.
          </p>

          <p className="mb-6">
            במהלך השנים צברתי ניסיון רב בהדרכת צוותים וארגונים, תוך התמקדות בהקניית 
            כלים מעשיים ופיתוח יכולות יישומיות. אני מתמחה בהתאמת תכני הלמידה לצרכים 
            הספציפיים של כל ארגון.
          </p>

          <p className="mb-6">
            הגישה שלי משלבת למידה תיאורטית עם התנסות מעשית, מה שמאפשר למשתתפים 
            להתחיל ליישם את הידע שרכשו כבר במהלך ההדרכה.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
