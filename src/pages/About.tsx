
import { motion } from "framer-motion";
import { Check, Users, Brain, Wrench, HeartHandshake, MessageSquare } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "התאמה אישית",
      description: "התאמה אישית של ההדרכות לפי הצרכים של כל לקוח"
    },
    {
      icon: Brain,
      title: "התנסות מעשית",
      description: "שילוב דוגמאות מעשיות והתנסויות חיות בזמן אמת"
    },
    {
      icon: Wrench, // החלפנו את Tool ב-Wrench
      title: "כלים מתקדמים",
      description: "שימוש בכלים מתקדמים המאפשרים למידה אפקטיבית"
    },
    {
      icon: HeartHandshake,
      title: "תמיכה מקצועית",
      description: "מתן תמיכה וליווי מקצועי גם לאחר ההדרכה"
    },
    {
      icon: MessageSquare,
      title: "למידה בדו-שיח",
      description: "הדרכה חווייתית ואינטראקטיבית, עם שיח פתוח ושיתוף מלא של המשתתפים"
    }
  ];

  const achievements = [
    "אני מרצה מוביל לבינה מלאכותית במוסדות אקדמיים מוכרים בישראל (אוניברסיטת חיפה, הטכניון, האוניברסיטה הפתוחה) עם תשוקה ללמידה מתמדת.",
    "הרקע המקצועי שלי התחיל כעסק מצליח לאנימציה וסרטוני תדמית במשך שנים רבות. היצירתיות שפיתחתי בעולם האנימציה מסייעת לי כיום לעצב סדנאות והדרכות חווייתיות, שמנגישות את תחום ה-AI בצורה אינטואיטיבית ומעשית.",
    "לפני כשנתיים גיליתי את הפוטנציאל העצום של AI והסבתי את פעילותי להדרכות וסדנאות AI לארגונים, חברות וסטודנטים.",
    "המהפכה הטכנולוגית של AI משנה כל תחום בחיינו. איתי אתם לא רק רוכשים ידע טכני, אלא גם יתרון תחרותי משמעותי בשוק העבודה. אצלי תלמדו לייעל תהליכים, לחסוך זמן יקר ולהתמקד ביצירת ערך ייחודי."
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 font-heebo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">אודות</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-right"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
