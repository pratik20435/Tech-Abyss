import { IconArrowRight } from "@tabler/icons-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications from frontend interfaces to backend APIs using TypeScript, React, Vue.js, Angular, Node.js, and Golang",
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications from frontend interfaces to backend APIs using TypeScript, React, Vue.js, Angular, Node.js, and Golang",
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications from frontend interfaces to backend APIs using TypeScript, React, Vue.js, Angular, Node.js, and Golang",
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications from frontend interfaces to backend APIs using TypeScript, React, Vue.js, Angular, Node.js, and Golang",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 max-w-4xl ml-70">
            Full-stack software development and consulting services
          </h1>
          <p className="text-2xl text-white-400 max-w-4xl leading-relaxed ml-70">
            Building complete web applications from frontend to backend.
            Building complete web applications from frontend to backend.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-[1400px] mx-auto flex justify-end">
          <div className="grid grid-cols-2 grid-rows-2 max-w-[900px]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
          relative p-12 group
          border-gray-700
          ${index < 2 ? "border-b" : ""}
          ${index % 2 === 0 ? "border-r" : ""}
        `}
              >
                <h3 className="text-2xl font-normal mb-4">{service.title}</h3>

                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8">
                  <IconArrowRight
                    size={22}
                    strokeWidth={1.5}
                    className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
