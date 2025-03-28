import React, { useState } from "react";
import { X, Home, User, Briefcase, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", icon: <Home className="w-6 h-6" /> },
  { name: "About", href: "/about", icon: <User className="w-6 h-6" /> },
  {
    name: "Work",
    href: "/#work",
    icon: <Briefcase className="w-6 h-6" />,
  },
  { name: "Contact", href: "#contact", icon: <Mail className="w-6 h-6" /> },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/wumzee97",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adewumi-damilola-alabi-489338104/",
    icon: <Linkedin className="w-6 h-6" />,
  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 w-12 h-12 flex flex-col justify-center items-end lg:hidden"
      >
        <div className="relative w-full h-6">
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? "w-6 rotate-45 translate-y-3" : "w-8 translate-y-1"
            }`}
          />
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? "w-6 -rotate-45 translate-y-3" : "w-6 translate-y-4"
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10%] pointer-events-none"
        }`}
      >
        <nav className="h-full flex flex-col justify-center items-center">
          <div className="space-y-8 transform transition-all duration-500 delay-100">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-4 text-white/80 hover:text-[#D4FF50] transition-colors duration-200 transform"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                  transition: `all 0.3s ease-in-out ${index * 0.1}s`,
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="text-2xl font-light">{link.name}</span>
              </Link>
            ))}
          </div>

          <div
            className="absolute bottom-12 flex space-x-6 transform transition-all duration-500 delay-300"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {socialLinks.map((link) => (
              <a
                target="_blank"
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-[#D4FF50] transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
