import { motion } from "motion/react";
import { Trophy, Plane, Book, Camera } from "lucide-react";

export default function SkillsAndInterests() {
  const software = ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Apple Software", "Advanced Creative Suite"];
  const languages = ["Arabic - Native", "English - Fluent"];
  const interests = [
    { name: "Sports", icon: Trophy },
    { name: "Traveling", icon: Plane },
    { name: "Reading", icon: Book },
    { name: "Photography", icon: Camera },
  ];

  return (
    <section className="px-20 py-10 bg-gray-200/50">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-xl uppercase tracking-[0.2em] mb-10 block">Software Skills</span>
          <div className="flex flex-wrap gap-3">
            {software.map((skill) => (
              <motion.div 
                key={skill} 
                className="border border-off-white/20 py-2 px-4 text-sm font-sans cursor-pointer transition-all duration-300"
                whileHover={{ backgroundColor: "#000000", color: "#FFFFFF", fontWeight: "bold", borderColor: "#000000" }}
              >{skill}</motion.div>
            ))}
          </div>
        </div>

        <div>
           <span className="text-xl uppercase tracking-[0.2em] mb-10 block">Languages</span>
           <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <motion.div 
                key={lang} 
                className="border border-off-white/20 py-2 px-4 text-sm font-sans cursor-pointer transition-all duration-300"
                whileHover={{ backgroundColor: "#000000", color: "#FFFFFF", fontWeight: "bold", borderColor: "#000000" }}
              >{lang}</motion.div>
            ))}
           </div>
        </div>

        <div className="md:col-span-2">
            <span className="text-xl uppercase tracking-[0.2em] mb-10 block">My Interest</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {interests.map((interest) => (
                <motion.div 
                    key={interest.name} 
                    className="flex flex-col items-center gap-4 cursor-pointer"
                    whileHover={{ scale: 1.1, color: "#C4815A" }}
                >
                  <interest.icon size={32} />
                  <span className="text-sm uppercase tracking-wider">{interest.name}</span>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
