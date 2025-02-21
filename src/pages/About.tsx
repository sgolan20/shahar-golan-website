import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "רקע אקדמי",
      description: "מומחה בתחום הבינה המלאכותית עם ניסיון בהוראה באקדמיה"
    },
    {
      icon: Briefcase,
      title: "ניסיון מעשי",
      description: "יועץ ומדריך בכיר לחברות וארגונים בתחום ה-AI"
    },
    {
      icon: Award,
      title: "מומחיות",
      description: "התמחות בהנגשת טכנולוגיות AI מתקדמות לצוותים ומנהלים"
    },
    {
      icon: BookOpen,
      title: "שיטת הלימוד",
      description: "גישה מעשית המשלבת תיאוריה עם התנסות מעשית"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 font-heebo">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
            }}
          />
          <div className="relative z-10 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              אודות שחר גולן
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מומחה בינה מלאכותית, מרצה ויועץ המתמחה בהדרכות AI מותאמות אישית לארגונים וחברות
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">הסיפור שלי</h2>
            <p className="text-gray-600 leading-relaxed">
              כמומחה בתחום הבינה המלאכותית, אני מביא ניסיון עשיר בהוראה והדרכה באקדמיה ובתעשייה. 
              המטרה שלי היא להנגיש את עולם ה-AI בצורה ברורה ומעשית, תוך התאמה לצרכים הספציפיים של כל ארגון.
            </p>
            <p className="text-gray-600 leading-relaxed">
              הגישה שלי מתמקדת בשילוב בין הבנה תיאורטית לבין יישום מעשי, 
              מה שמאפשר למשתתפים להתחיל ליישם את הכלים והידע כבר במהלך ההדרכה.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">הגישה המקצועית</h2>
            <p className="text-gray-600 leading-relaxed">
              אני מאמין שהמפתח להצלחה בעידן ה-AI הוא היכולת להבין ולנצל את הטכנולוגיה בצורה חכמה ואפקטיבית. 
              ההדרכות שלי מתמקדות בהקניית כלים מעשיים ותובנות שימושיות שניתן ליישם מיד בסביבת העבודה.
            </p>
            <p className="text-gray-600 leading-relaxed">
              כל הדרכה מותאמת לצרכים הספציפיים של הארגון, תוך שימת דגש על האתגרים והמטרות הייחודיות שלו.
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <achievement.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
