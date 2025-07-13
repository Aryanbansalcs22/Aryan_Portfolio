import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "React.js", level: 70 },
    { name: "Node.js", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Mongodb", level: 75 },
    { name: "Git", level: 90 },
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#b87b71" }}
          >
            My Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume or view my technical skills and competencies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resume Download */}
            <div className="space-y-8">
              <div
                className="bg-card rounded-2xl p-8 border"
                style={{ boxShadow: "0 4px 20px rgba(184, 123, 113, 0.4)" }}
              >
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: "#b87b71" }}
                    >
                      Resume
                    </h3>
                    <p className="text-muted-foreground">
                      View or download my complete resume with detailed
                      experience and education
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {/* Download PDF with underline on hover */}
                    <a
                      href="https://drive.google.com/file/d/1Tx7e_kUYDAEfkl-oPSF3_wrJHf9QE8xp/view?usp=sharing"
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition group text-center"
                      style={{
                        borderBottom: "2px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderBottom =
                          "2px solid #b87b71";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderBottom =
                          "2px solid transparent";
                      }}
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Download PDF
                    </a>

                    {/* View Online styled like Verify buttons */}
                    <a
                      href="https://drive.google.com/file/d/1Tx7e_kUYDAEfkl-oPSF3_wrJHf9QE8xp/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition text-center"
                      style={{
                        border: "1px solid #b87b71",
                        color: "#b87b71",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#b87b71";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#b87b71";
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      View Online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills Grid */}
           <div>
  <h3 className="text-2xl font-bold mb-6" style={{ color: '#b87b71' }}>
    Technical Skills
  </h3>
  <div
    className="grid grid-cols-2 border border-[#b87b71] rounded-md"
    style={{
      boxShadow: '0 4px 20px rgba(184, 123, 113, 0.4)',
      overflow: 'hidden',
    }}
  >
    {skills.map((skill, index) => (
      <>
        <div
          key={`name-${index}`}
          className="p-4 border-r border-b text-left font-medium"
          style={{
            borderColor: '#b87b71',
            color: '#b87b71',
            backgroundColor: '#ffffff',
          }}
        >
          {skill.name}
        </div>
        <div
          key={`level-${index}`}
          className="p-4 border-b text-right font-semibold"
          style={{
            borderColor: '#b87b71',
            color: '#b87b71',
            backgroundColor: '#ffffff',
          }}
        >
          {skill.level}%
        </div>
      </>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
