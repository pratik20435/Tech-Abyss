// import { useState } from "react";

// const navItems = [
//   "Overview",
//   "Expertise",
//   "Works",
//   "Process",
//   "Profile",
//   "Insights",
// ];

// const Navbar = () => {
//   const [active, setActive] = useState("Overview");

//   return (
//     <nav className="sticky top-0 z-50 bg-black">
//       <ul className="flex justify-center items-center gap-10 py-4 text-white text-sm font-medium">
//         {navItems.map((item) => (
//           <li
//             key={item}
//             onClick={() => setActive(item)}
//             className="relative cursor-pointer"
//           >
//             <span
//               className={`pb-1 transition-all duration-300
//                 ${
//                   active === item
//                     ? "after:w-full"
//                     : "after:w-0 hover:after:w-full"
//                 }
//                 after:content-['']
//                 after:absolute
//                 after:left-0
//                 after:-bottom-1
//                 after:h-[2px]
//                 after:bg-white
//                 after:transition-all
//                 after:duration-300
//               `}
//             >
//               {item}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";

const navItems = [
  "Overview",
  "Expertise",
  "Works",
  "Process",
  "Profile",
  "Insights",
];

const VerticalNavbar = () => {
  const [active, setActive] = useState("Overview");

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-black z-50">
      <ul className="flex flex-col gap-8 px-8 py-10 text-white text-sm font-medium">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className="relative cursor-pointer w-fit"
          >
            <span
              className={`pb-1 transition-all duration-300
                ${
                  active === item
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:bg-white
                after:transition-all
                after:duration-300
              `}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNavbar;
