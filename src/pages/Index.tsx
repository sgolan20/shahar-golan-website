import { Brain, Users, Presentation, Youtube, Target, Lightbulb, Workflow, HandshakeIcon } from "lucide-react";
import { motion } from "framer-motion";
const Index = () => {
  const features = [{
    icon: Brain,
    title: "התאמה אישית",
    description: "הדרכות מותאמות לצרכים הספציפיים שלך"
  }, {
    icon: Users,
    title: "למידה אינטראקטיבית",
    description: "שיטות הוראה חווייתיות ומעשיות"
  }, {
    icon: Presentation,
    title: "מומחיות מוכחת",
    description: "ניסיון עשיר בהוראה באקדמיה ובתעשייה"
  }, {
    icon: Youtube,
    title: "תוכן איכותי",
    description: "גישה לתכנים מקצועיים ועדכניים"
  }];

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

  return <div className="min-h-screen font-heebo">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-32 pb-16 px-4 overflow-hidden">
        {/* Background Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/animating-future.png" 
            alt="AI Teaching Concept" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </motion.div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 px-0 md:text-6xl">
              בינה מלאכותית בגובה העיניים
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              הדרכות וסדנאות AI מותאמות אישית לארגונים וחברות, המאפשרות יישום מיידי בסביבת העבודה
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                צור קשר
              </a>
              <a href="/services" className="bg-white text-primary border border-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-all">
                מה אני מציע?
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl font-bold mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              בואו נעבוד יחד להטמעת AI בארגון שלכם
            </p>
            <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
              דברו איתי
            </a>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Index;
