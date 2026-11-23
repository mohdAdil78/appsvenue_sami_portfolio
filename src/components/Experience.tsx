import { motion } from "motion/react";

const experiences = [
  { 
    year: "2016 – Present", 
    company: "Appsvenue Company, Kuwait", 
    role: "Founder & Director", 
    logo: "/appsvenue.png",
    website: "https://appsvenuekw.com"
  },
  { year: "2008 – 2016", company: "Badra International", role: "Events & Conference Manager" },
  { year: "March 2008", company: "Layalina Magazine", role: "Graphic Designer" },
  { year: "2004 – 2008", company: "Al-Khat Presses", role: "Electronic Montage Technician" },
];

export default function Experience() {
  return (
    <section id="experience" className="px-20 py-20 bg-black/[0.03] border-y border-off-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
        {/* Image on left */}
        <motion.div 
          className="md:col-span-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/sami_body.png" 
            alt="Sami Majdi Aboulabbada" 
            className="w-full h-full object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Timeline */}
        <div className="md:col-span-8 flex flex-col justify-between">
          <span className="text-xl uppercase tracking-[0.2em] mb-10 block">Selected Experience</span>
          <div className="relative border-l border-accent/60 pl-8 space-y-12 flex-grow">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i} 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-accent" />
                <div className="font-serif text-lg font-bold text-accent mb-2">{exp.year}</div>
                <div className="text-2xl font-bold mb-2">{exp.role}</div>
                <div className="text-lg text-off-white/60 mb-2">{exp.company}</div>
                {exp.logo && exp.website && (
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <img src={exp.logo} alt="Appsvenue logo" className="w-[144px] h-auto object-contain" />
                    <div className="flex flex-wrap items-center gap-2">
                      <motion.a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white text-sm px-4 py-2 rounded-full whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Website
                      </motion.a>
                      <motion.a 
                        href="https://wa.me/96560055564"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Contact on WhatsApp"
                      >
                        <img 
                          src="/whatsapp.png" 
                          alt="WhatsApp Contact" 
                          className="w-10 h-10 object-contain"
                        />
                      </motion.a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Education */}
      <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-off-white/10">
        <span className="text-xl uppercase tracking-[0.2em] mb-8 block">Education</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="font-semibold text-lg mb-1">B.Com in Accounting</div>
            <div className="text-sm text-off-white/60">University of India in Kuwait</div>
          </div>
          <div>
            <div className="font-semibold text-lg mb-1">High School</div>
            <div className="text-sm text-off-white/60">Al Ikhlas National School</div>
          </div>
        </div>
      </div>
    </section>
  );
}
