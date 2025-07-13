import { ArrowRight } from 'lucide-react';
import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
      style={{ backgroundColor: '#fffaf0' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-black">
            {/* Testimonial Quote */}
            <div className="text-left max-w-sm">
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                "As a fresher full-stack developer, I bring enthusiasm, a quick learning mindset, and hands-on skills in both frontend and backend technologies."
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span style={{ color: '#b87b71' }}>Aryan Bansal</span>,
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Full Stack Developer
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Portfolio Button */}
              <button
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-full px-8 py-3 text-white hover:opacity-90 transition-all text-lg font-semibold"
                style={{
                  backgroundColor: '#b87b71',
                  boxShadow: '0 0 10px rgba(184, 123, 113, 0.6)',
                }}
              >
                Portfolio
              </button>

              {/* Hire Me Button */}
              <button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-full px-8 py-3 bg-[#b87b71] hover:bg-[#a3665d] text-white group transition-all text-lg font-semibold flex items-center justify-center"
              >
                Hire me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile & Stats */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, #fffaf0, #b87b71)',
                }}
              ></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center animate-glow">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
