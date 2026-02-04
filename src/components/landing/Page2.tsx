import React from "react";
import { IconPlayerPlay } from "@tabler/icons-react";

export default function FullStackSection() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Text */}

        <div className="mb-16 flex justify-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-5xl text-left ml-70">
            Build complete web applications through full-stack development, from
            frontend interfaces to backend APIs and infrastructure.
          </h2>
        </div>

        {/* Content Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ml-70">
          {/* Left Side - Video/Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-black">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient
                    id="line-grad-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ec4899", stopOpacity: 0.8 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "#a855f7", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#6366f1", stopOpacity: 0.7 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="line-grad-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "#8b5cf6", stopOpacity: 0.9 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ec4899", stopOpacity: 0.7 }}
                    />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Diagonal light streaks */}
                {[...Array(25)].map((_, i) => {
                  const y = i * 30 - 100;
                  const height = 2 + (i % 3);
                  const opacity = 0.3 + (i % 5) / 10;
                  const delay = i * 0.1;

                  return (
                    <g key={`streak-${i}`}>
                      <line
                        x1="-100"
                        y1={y}
                        x2="900"
                        y2={y + 400}
                        stroke={
                          i % 2 === 0
                            ? "url(#line-grad-1)"
                            : "url(#line-grad-2)"
                        }
                        strokeWidth={height}
                        opacity={opacity}
                        filter="url(#glow)"
                      >
                        <animate
                          attributeName="opacity"
                          values={`${opacity};${opacity + 0.3};${opacity}`}
                          dur={`${3 + (i % 4)}s`}
                          begin={`${delay}s`}
                          repeatCount="indefinite"
                        />
                      </line>
                      {/* Glowing orbs on some lines */}
                      {i % 4 === 0 && (
                        <circle
                          cx="200"
                          cy={y + 100}
                          r="8"
                          fill="white"
                          opacity="0.9"
                          filter="url(#glow)"
                        >
                          <animateMotion
                            path={`M 0 0 L 700 400`}
                            dur={`${4 + (i % 3)}s`}
                            begin={`${delay}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.5;1;0.5"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}

                {/* Additional horizontal accent lines */}
                {[...Array(15)].map((_, i) => {
                  const y = i * 45;
                  return (
                    <line
                      key={`h-line-${i}`}
                      x1="0"
                      y1={y}
                      x2="800"
                      y2={y}
                      stroke={i % 2 === 0 ? "#1e1b4b" : "#3b0764"}
                      strokeWidth="1"
                      opacity="0.4"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></div>
                {/* Main button */}
                <div className="relative w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10">
                  <IconPlayerPlay
                    size={32}
                    fill="white"
                    stroke="white"
                    strokeWidth={1.5}
                    className="ml-1"
                  />
                </div>
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="border-b border-gray-800 pb-8">
              <div className="text-7xl font-bold mb-4">98%</div>
              <div className="text-gray-400 text-lg">
                Customer Satisfaction Rate
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-b border-gray-800 pb-8">
              <div className="text-7xl font-bold mb-4">98%</div>
              <div className="text-gray-400 text-lg">
                Customer Satisfaction Rate
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4">
              <div className="text-7xl font-bold mb-4">98%</div>
              <div className="text-gray-400 text-lg">
                Customer Satisfaction Rate
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4">
              <div className="text-7xl font-bold mb-4">98%</div>
              <div className="text-gray-400 text-lg">
                Customer Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
