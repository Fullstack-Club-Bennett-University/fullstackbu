import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  SlackIcon,
  MailIcon,
  ArrowRightIcon,
  CalendarIcon,
  BookOpenIcon,
  UserIcon,
  CodeIcon,
  HeartIcon,
} from "lucide-react";
import shantanu from "../../assets/shantanu.jpg";
import amangangwar from "../../assets/AmanGangwar.png";
import aarushi from "../../assets/aarushi.png";
import shubhGupta from "../../assets/shubhGupta.png";
import KartikGupta from "../../assets/KartikGupta.png";
import vishuPratap from "../../assets/vishuPratap.png";
import avi from "../../assets/Avi.png";

const Footer = () => {
  // Expanded team members data (15 contributors)
  const teamMembers = [
    {
      id: 1,
      name: "Vaibhav Kothari",
      role: "Developer",
      contribution: "Architecture & Backend",
      image:
        "https://avatars.githubusercontent.com/u/129139486?s=400&u=2ba574b1b840c3083f52c3bc166952fdb4f38e89&v=4",
    },
    {
      id: 2,
      name: "Shubh Gupta",
      role: "UX Designer",
      contribution: "User Interface & Branding",
      image: shubhGupta,
    },
    {
      id: 3,
      name: "Kartik Gupta",
      role: "Frontend Developer",
      contribution: "React Components & Animations",
      image: KartikGupta,
    },
    {
      id: 4,
      name: "Shantanu Kumar",
      role: "Content Strategist",
      contribution: "Copywriting & SEO",
      image: shantanu,
    },
    {
      id: 5,
      name: "Vishu prapt",
      role: "Backend Developer",
      contribution: "API Integration & Database",
      image: vishuPratap,
    },
    {
      id: 6,
      name: "Avi Srivastava",
      role: "Frontend Developer",
      contribution: "Responsive Design & Accessibility",
      image: avi,
    },
    {
      id: 7,
      name: "Aman ",
      role: "DevOps Engineer",
      contribution: "Deployment & Performance",
      image: amangangwar,
    },
    {
      id: 7,
      name: "Aarushi  ",
      role: "DevOps Engineer",
      contribution: "Deployment & Performance",
      image: aarushi,
    },
  ];

  // FullStack Club social media links with icons
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/fullstackbu/",
      icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fullstackbu",
      icon: <InstagramIcon className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "http://github.com/Fullstack-Club-Bennett-University/",
      icon: <GithubIcon className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@fullstackbu",
      icon: <YoutubeIcon className="w-5 h-5" />,
    },
    // { name: 'Twitter', url: 'https://twitter.com/fullstackbu', icon: <TwitterIcon className="w-5 h-5" /> },
    {
      name: "Mail",
      url: "mailto:fullstackbu@bennett.edu.in",
      icon: <MailIcon className="w-5 h-5" />,
    },
  ];

  // Extended quick links for footer navigation
  const quickLinks = [
    { name: "About Us", url: "/about", icon: <UserIcon className="w-4 h-4" /> },
    {
      name: "Events",
      url: "/events",
      icon: <CalendarIcon className="w-4 h-4" />,
    },
    {
      name: "Membership",
      url: "/join",
      icon: <UserIcon className="w-4 h-4" />,
    },
    {
      name: "Resources",
      url: "/resources",
      icon: <BookOpenIcon className="w-4 h-4" />,
    },
    { name: "Blog", url: "/blog", icon: <CodeIcon className="w-4 h-4" /> },
    {
      name: "Contact",
      url: "/contact",
      icon: <MailIcon className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <CodeIcon className="w-8 h-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-white">FullStack Club</h2>
            </div>
            <p className="text-blue-100 max-w-md">
              Empowering developers through community, education, and innovation
              since 2020.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label={`Visit our ${link.name} page`}
              >
                <div className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300 flex items-center gap-2">
                  {link.icon}
                  <span className="hidden md:inline">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-blue-400 bg-opacity-30 mb-12"></div>

        {/* Team Members Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HeartIcon className="w-6 h-6 text-red-300" />
            <h3 className="text-2xl font-semibold text-center">
              Our Amazing Contributors
            </h3>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "
            role="list"
            aria-label="Website Contributors"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center group"
                role="listitem"
              >
                <div className="relative mb-3">
                  <img
                    src={member.image}
                    alt={`Profile of ${member.name}`}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white border-opacity-50 group-hover:border-opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border border-white">
                    <CodeIcon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h4 className="text-md font-semibold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-200 text-sm mb-1">{member.role}</p>
                <p className="text-blue-100 text-xs text-center">
                  {member.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Quick Links */}
          <div className="bg-white bg-opacity-5 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-10">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ArrowRightIcon className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-blue-100 hover:text-white transition-colors hover:underline flex items-center gap-2 group"
                  >
                    <span className="bg-blue-600 bg-opacity-30 p-1 rounded group-hover:bg-opacity-50 transition-all">
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <p className="text-sm text-blue-100">
                © {new Date().getFullYear()} FullStack Club. All rights
                reserved.
              </p>
            </div>
            {/*             
            <div className="flex gap-4 text-sm text-blue-100">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
            </div> */}
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-blue-100 flex items-center justify-center gap-1">
              Made with ❤️ by the{" "}
              <span
                className="font-bold text-white"
                aria-label="FullStack Club Credit"
              >
                FullStack Club
              </span>{" "}
              community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;