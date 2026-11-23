export default function Skills() {
  const specializations = ["Event Management", "Conference Production", "Visual Identity", "Digital Strategy"];
  
  return (
    <section id="skills" className="px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <span className="text-xl uppercase tracking-[0.2em] mb-10 block">Specializations</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specializations.map((skill) => (
            <div 
              key={skill} 
              className="border border-off-white/20 p-6 text-center text-sm transition-colors duration-300 hover:bg-[#C4815A] hover:text-white cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
