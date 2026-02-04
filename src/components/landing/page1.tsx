
// import galaxy from "@/assets/galaxxy.jpeg";
import {
  IconBrandFacebook,
  IconBrandInstagram, 
  IconBrandLinkedin,
} from "@tabler/icons-react";
function TechAbyss() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <nav className="absolute scroll-pb-1.5 top-0 left-0 right-0 z-50 px-8 py-8 ">
        <div className="max-w-[1400px] mx-auto flex items-center">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider">TECH ABYSS</div>

          {/* Links slightly further to the right */}
          <div className="flex gap-12 text-sm ml-16">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Overview
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Expertise
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Works
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Process
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Profile
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Insights
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-screen flex items-center">

        {/* Left Accent Line */}
     
        <div className="absolute left-32 top-1/2 -translate-y-1/2 w-0.5 h-64 bg-white z-10">
          {/* Social icons below the line */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col gap-6 z-20">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <IconBrandFacebook size={20} stroke={1.5} />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <IconBrandInstagram size={20} stroke={1.5} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <IconBrandLinkedin size={20} stroke={1.5} />
            </a>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-[1400px] mx-auto px-32 relative z-10">
          <h1 className="text-[120px] leading-[1.1] font-bold">
            Design.
            <br />
            Development.
            <br />
            Consultant.
          </h1>
        </div>

        {/* Background Visual Element */}
        <div className="absolute right-0 top-0 w-[55%] h-full">
          {/* Animated Fiber Optic Effect */}
          <div className="absolute inset-0 opacity-80">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 800"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#8b5cf6", stopOpacity: 0.8 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 0.6 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#06b6d4", stopOpacity: 0.4 }}
                  />
                </radialGradient>
                <radialGradient id="grad2" cx="50%" cy="50%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ec4899", stopOpacity: 0.7 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#8b5cf6", stopOpacity: 0.5 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }}
                  />
                </radialGradient>
              </defs>

              {/* Fiber optic lines - creating swirling effect */}
              {[...Array(80)].map((_, i) => {
                const angle = (i / 80) * Math.PI * 2;
                const radius = 150 + (i % 5) * 60;
                const cx = 600 + Math.cos(angle) * radius;
                const cy = 400 + Math.sin(angle) * radius;
                const r = 1 + (i % 3);

                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={i % 2 === 0 ? "url(#grad1)" : "url(#grad2)"}
                    opacity={0.4 + (i % 10) / 20}
                  >
                    <animate
                      attributeName="r"
                      values={`${r};${r + 2};${r}`}
                      dur={`${3 + (i % 5)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur={`${2 + (i % 4)}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}

              {/* Curved lines for fiber effect */}
              {[...Array(40)].map((_, i) => {
                const startAngle = (i / 40) * Math.PI * 2;
                const endAngle = startAngle + Math.PI / 4;
                const radius = 100 + (i % 6) * 50;
                const x1 = 600 + Math.cos(startAngle) * radius;
                const y1 = 400 + Math.sin(startAngle) * radius;
                const x2 = 600 + Math.cos(endAngle) * (radius + 40);
                const y2 = 400 + Math.sin(endAngle) * (radius + 40);

                return (
                  <path
                    key={`line-${i}`}
                    d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + 30} ${(y1 + y2) / 2 - 30} ${x2} ${y2}`}
                    stroke={i % 2 === 0 ? "url(#grad1)" : "url(#grad2)"}
                    strokeWidth="1"
                    fill="none"
                    opacity={0.3 + (i % 5) / 10}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur={`${4 + (i % 6)}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                );
              })}

              {/* <img src={galaxy} alt="" /> */}
            </svg>
          </div>

          {/* Dark overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80"></div>
        </div>

        {/* Right Accent Line */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-0.5 h-96 bg-white/30 z-10"></div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>
    </div>
  );
}
export default TechAbyss;
