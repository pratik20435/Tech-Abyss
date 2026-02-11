import galaxy from "../../assets/universe.png";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function TechAbyss() {
  return (
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider">TECH ABYSS</div>

          {/* Links slightly further to the right */}
          <div className="flex gap-12 text-sm ml-16">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-inter size-16px"
            >
              Overview
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-inter"
            >
              Expertise
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors font-inter">
              Works
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-inter"
            >
              Process
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-inter"
            >
              Profile
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors font-inter"
            >
              Insights
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-screen flex items-center pt-24">
        {/* Left Accent Line */}

        <div className="absolute left-24 top-1/2 -translate-y-1/2 w-0.5 h-44 bg-white z-10">
          {/* Social icons below the line */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col gap-4 z-20">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <IconBrandFacebook size={24} stroke={1.5} />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <IconBrandInstagram size={24} stroke={1.5} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <IconBrandLinkedin size={24} stroke={1.5} />
            </a>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-[1400px] mx-auto px-32 relative z-10 ml-25">
          <h1 className="text-[120px] leading-[1.1] font-bold">
            Design.
            <br />
            Development.
            <br />
            Consultant.
          </h1>
        </div>

        {/* Background Visual Element - Universe Image */}
        <div className="relative translate-y-24">
          <div className="w-[616px] h-[459px] rounded-[2px] ml-[-800px]">
            <img
              src={galaxy}
              alt="Universe"
              className="w-full h-full object-cover"
            />
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