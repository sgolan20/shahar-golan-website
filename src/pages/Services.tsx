
import { Presentation, Users, BookOpen, Target, Lightbulb, Workflow, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Presentation,
      title: "הרצאות",
      description: "הרצאות מרתקות המותאמות לקהל היעד, עם דגש על יישומים מעשיים של AI בעולם העסקי"
    },
    {
      icon: Users,
      title: "סדנאות",
      description: "סדנאות אינטראקטיביות עם התנסות מעשית בכלי AI מתקדמים"
    },
    {
      icon: BookOpen,
      title: "קורסים ממוקדים",
      description: "תכניות למידה מקיפות המותאמות לצרכים הספציפיים של הארגון שלכם"
    }
  ];

  const reasons = [
    {
      title: "הדרכה מבוססת צרכי הלקוח",
      description: "התאמה מדויקת של התכנים לעולם התוכן והצרכים הספציפיים שלכם"
    },
    {
      title: "רזולוציה פרטנית",
      description: "התאמה אישית של קצב ורמת הלימוד לכל משתתף"
    },
    {
      title: "פישוט מושגים מורכבים",
      description: "הפיכת תהליכים מסובכים לשלבים ברורים וישימים"
    },
    {
      title: "גישה מעשית",
      description: "התמקדות ביישומים מעשיים עם דוגמאות מעולם העסקים"
    },
    {
      title: "חיבור אישי",
      description: "יצירת קשר אישי עם כל משתתף להבטחת הצלחה מקסימלית"
    },
    {
      title: "הדגמות חיות",
      description: "עבודה בזמן אמת עם הכלים העדכניים ביותר"
    },
    {
      title: "קהילה תומכת",
      description: "גישה לקהילת לומדים פעילה ותכנים מקצועיים ביוטיוב"
    },
    {
      title: "התעדכנות מתמדת",
      description: "תכנים עדכניים המבוססים על המחקר והכלים החדשים ביותר"
    },
    {
      title: "מומחיות בשילוב AI",
      description: "ידע מעשי בהטמעת AI בתהליכי עבודה קיימים"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 font-heebo">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            השירותים שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הדרכות AI מותאמות אישית שיעזרו לכם ולארגון שלכם להתקדם בעולם המשתנה של הבינה המלאכותית
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">למה ללמוד AI איתי?</h2>
          <p className="text-xl text-gray-600">
            10 סיבות שהופכות את ההדרכות שלי לייחודיות ואפקטיביות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            מוכנים להתחיל את המסע שלכם בעולם ה-AI?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            בואו נדבר על איך אני יכול לעזור לכם ולארגון שלכם
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            צרו קשר עכשיו
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
