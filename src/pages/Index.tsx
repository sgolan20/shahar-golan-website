
import { Brain, Users, Presentation, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "התאמה אישית",
      description: "הדרכות מותאמות לצרכים הספציפיים שלך"
    },
    {
      icon: Users,
      title: "למידה אינטראקטיבית",
      description: "שיטות הוראה חווייתיות ומעשיות"
    },
    {
      icon: Presentation,
      title: "מומחיות מוכחת",
      description: "ניסיון עשיר בהוראה באקדמיה ובתעשייה"
    },
    {
      icon: Youtube,
      title: "תוכן איכותי",
      description: "גישה לתכנים מקצועיים ועדכניים"
    }
  ];

  return (
    <div className="min-h-screen font-heebo">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                בינה מלאכותית בגובה העיניים
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                הדרכות וסדנאות AI מותאמות אישית לארגונים וחברות, המאפשרות יישום מיידי בסביבת העבודה
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                <a
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  צור קשר
                </a>
                <a
                  href="/services"
                  className="bg-white text-primary border border-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-all"
                >
                  לשירותים שלנו
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/animating-future.png"
                alt="AI Teaching Concept"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              בואו נעבוד יחד להטמעת AI בארגון שלכם
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              דברו איתי
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
