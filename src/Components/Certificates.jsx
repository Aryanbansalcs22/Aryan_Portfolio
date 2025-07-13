import { Award, Calendar, ExternalLink } from 'lucide-react';
import img1 from "../assets/image.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

const Certificates = () => {
  const certificates = [
    {
      title: "Artificial Intelligence",
      issuer: "Placify Technologies",
      date: "1st June 2024",
      description: "Comprehensive certification covering core AI concepts, machine learning fundamentals, and advanced techniques in intelligent systems and data-driven decision making",
      image: `${img1}`,
      verifyLink: "https://drive.google.com/file/d/1AjF4qBwyBhXfiYrmNYXN0aPD_tvu04W-/view?usp=sharing",
    },
    {
      title: "CyberSecurity",
      issuer: "Linked in",
      date: "2024",
      description: "Certification covering foundational cybersecurity concepts including network security, threat detection, encryption, secure browsing practices, and safe data handling.",
      image: `${img3}`,
      verifyLink: "https://drive.google.com/file/d/1_Ym3IHifw9odrUZhrVWl_VswPm_y2CZN/view?usp=sharing",
    },
    {
      title: "Generative AI",
      issuer: "Euron",
      date: "2024",
      description: "Certification covering the fundamentals of Generative AI, including concepts of machine learning, large language models (LLMs), image and text generation, and practical applications using tools like ChatGPT.",
      image: `${img2}`,
      verifyLink: "https://drive.google.com/file/d/13KJJImo3I1R3EM3Hrwfk83dvLJLwsUU4/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20"
      style={{
        backgroundColor: "#fffaf0",
        borderTop: "2px solid #b87b71",
        borderBottom: "2px solid #b87b71",
        boxShadow: "0 0 15px rgba(184, 123, 113, 0.4)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span style={{ color: '#b87b71' }}>My Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 group"
              style={{
                boxShadow: '0 4px 20px rgba(184, 123, 113, 0.4)',
              }}
            >
              {/* Certificate Preview */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1" style={{ color: '#b87b71' }}>
                      {cert.title}
                    </h3>
                    <p className="font-medium" style={{ color: '#b87b71' }}>{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-md transition-colors duration-300 group"
                    style={{
                      border: '1px solid #b87b71',
                      color: '#b87b71',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#b87b71';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#b87b71';
                    }}
                  >
                    Verify
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
