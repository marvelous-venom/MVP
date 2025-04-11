// // components/layouts/Navigation.tsx
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "../ui/Button";
// import { SearchBar } from "../ui/SearchBar";

// interface NavigationItem {
//   name: string;
//   href: string;
//   icon?: React.ReactNode;
// }

// // Main navigation items
// const mainNavItems: NavigationItem[] = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "Services", href: "/services" },
//   { name: "Guides", href: "/guides" },
//   { name: "Community", href: "/community" },
//   { name: "About", href: "/about" },
// ];

// // Service navigation items
// const serviceNavItems: NavigationItem[] = [
//   {
//     name: "Banking",
//     href: "/services/banking",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Insurance",
//     href: "/services/insurance",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "SIM Cards",
//     href: "/services/sim-cards",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Food",
//     href: "/services/food",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Jobs",
//     href: "/services/jobs",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Visas",
//     href: "/services/visas",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Travel",
//     href: "/services/travel",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Housing",
//     href: "/services/housing",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Taxes",
//     href: "/services/taxes",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Loans",
//     href: "/services/loans",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
//         />
//       </svg>
//     ),
//   },
// ];

// export const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close mobile menu when pathname changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//     setIsServiceMenuOpen(false);
//   }, [pathname]);

//   const isActive = (href: string) =>
//     pathname === href || pathname?.startsWith(`${href}/`);

//   return (
//     <header
//       className={`sticky top-0 z-40 w-full transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md" : "bg-white bg-opacity-90 backdrop-blur"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="flex items-center">
//                 <Image
//                   src="/images/logo.svg"
//                   alt="International Student Services Platform"
//                   width={40}
//                   height={40}
//                 />
//                 <span className="ml-2 text-xl font-semibold text-gray-900">
//                   ISSP
//                 </span>
//               </Link>
//             </div>

//             {/* Desktop navigation */}
//             <nav className="hidden md:ml-6 md:flex md:space-x-8">
//               {mainNavItems.map((item) => {
//                 // Special handling for Services to show dropdown
//                 if (item.name === "Services") {
//                   return (
//                     <div key={item.name} className="relative group">
//                       <Link
//                         href={item.href}
//                         className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16 ${
//                           isActive(item.href)
//                             ? "border-blue-500 text-gray-900"
//                             : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                         }`}
//                       >
//                         {item.name}
//                         <svg
//                           className="ml-1 w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </Link>

//                       {/* Services dropdown */}
//                       <div className="absolute left-0 w-56 mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
//                         <div className="py-1 rounded-md bg-white shadow-xs">
//                           {serviceNavItems.map((serviceItem) => (
//                             <Link
//                               key={serviceItem.name}
//                               href={serviceItem.href}
//                               className={`flex items-center px-4 py-2 text-sm ${
//                                 isActive(serviceItem.href)
//                                   ? "bg-gray-100 text-gray-900"
//                                   : "text-gray-700 hover:bg-gray-100"
//                               }`}
//                             >
//                               {serviceItem.icon}
//                               <span className="ml-3">{serviceItem.name}</span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }

//                 // Regular nav items
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16 ${
//                       isActive(item.href)
//                         ? "border-blue-500 text-gray-900"
//                         : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>

//           {/* Desktop search and user navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             <div className="w-64">
//               <SearchBar
//                 placeholder="Search..."
//                 onSearch={(term) => console.log(term)}
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Button variant="ghost" size="sm">
//                 Sign In
//               </Button>
//               <Button variant="primary" size="sm">
//                 Sign Up
//               </Button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <div className="pt-2 pb-3 space-y-1">
//           {mainNavItems.map((item) => {
//             // Special handling for Services in mobile menu
//             if (item.name === "Services") {
//               return (
//                 <div key={item.name}>
//                   <button
//                     className={`flex items-center justify-between w-full px-4 py-2 text-base font-medium ${
//                       isActive(item.href)
//                         ? "bg-blue-50 border-l-4 border-blue-500 text-blue-700"
//                         : "border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
//                     }`}
//                     onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}
//                   >
//                     <span>{item.name}</span>
//                     <svg
//                       className={`ml-1 w-4 h-4 transition-transform ${
//                         isServiceMenuOpen ? "rotate-180" : ""
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>

//                   {/* Services submenu for mobile */}
//                   <div
//                     className={`pl-4 ${isServiceMenuOpen ? "block" : "hidden"}`}
//                   >
//                     {serviceNavItems.map((serviceItem) => (
//                       <Link
//                         key={serviceItem.name}
//                         href={serviceItem.href}
//                         className={`flex items-center px-4 py-2 text-base font-medium border-l-4 ${
//                           isActive(serviceItem.href)
//                             ? "border-blue-500 text-blue-700 bg-blue-50"
//                             : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
//                         }`}
//                       >
//                         {serviceItem.icon}
//                         <span className="ml-3">{serviceItem.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               );
//             }

//             // Regular mobile nav items
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
//                   isActive(item.href)
//                     ? "bg-blue-50 border-blue-500 text-blue-700"
//                     : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Mobile search */}
//         <div className="pt-2 pb-3 px-4">
//           <SearchBar
//             placeholder="Search..."
//             onSearch={(term) => console.log(term)}
//           />
//         </div>

//         {/* Mobile sign in/sign up */}
//         <div className="pt-4 pb-3 border-t border-gray-200">
//           <div className="flex items-center px-4 space-x-2">
//             <Button variant="ghost" size="sm" className="w-full">
//               Sign In
//             </Button>
//             <Button variant="primary" size="sm" className="w-full">
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
