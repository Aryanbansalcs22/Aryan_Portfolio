import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "GLA University",
      location: "Mathura",
      position: "Computer Science Student",
      duration: "2022 - 2026",
      description:
        "Pursuing Bachelor's in Computer Science with focus on full-stack development, data structures, and modern web technologies.",
      isActive: true,
    },
    {
      company: "Frontend Development",
      location: "Projects",
      position: "React & Modern JS",
      duration: "2023",
      description:
        "Specialized in React.js, TypeScript, Tailwind CSS, and modern frontend frameworks. Built responsive and interactive user interfaces.",
      isActive: true,
    },
    {
      company: "Backend Development",
      location: "Full Stack",
      position: "Java & Node.js",
      duration: "2024",
      description:
        "Developed robust backend systems using Java Spring Boot, Node.js, Express, and database management with SQL and NoSQL.",
      isActive: false,
    },
    {
      company: "Java Programming",
      location: "Core Skills",
      position: "OOP & Frameworks",
      duration: "2023",
      description:
        "Strong foundation in Java programming, object-oriented design patterns, Spring Framework, and enterprise application development.",
      isActive: false,
    },
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{
        borderTop: "2px solid #b87b71",
        boxShadow: "0 0 15px rgba(184, 123, 113, 0.3)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span style={{ color: '#b87b71' }}>My Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through my educational background and technical expertise in full-stack development
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-timeline-line hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute left-6 hidden md:flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        exp.isActive
                          ? 'bg-primary border-primary shadow-glow'
                          : 'bg-dark-section border-muted'
                      }`}
                    ></div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className="md:ml-16 rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
                    style={{
                      boxShadow: '0 4px 20px rgba(184, 123, 113, 0.1)',
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Side */}
                      <div>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#b87b71' }}>
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="bg-[#b87b71] text-white rounded-xl p-4">
                        <h4 className="text-xl font-semibold mb-3">
                          {exp.position}
                        </h4>
                        <p className="leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
