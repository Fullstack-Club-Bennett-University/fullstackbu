import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon, SlackIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  // Team members data with real roles for website creation
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Lead Developer', contribution: 'Architecture & Backend', image: '/api/placeholder/400/400' },
    { id: 2, name: 'Jane Smith', role: 'UX Designer', contribution: 'User Interface & Branding', image: '/api/placeholder/400/400' },
    { id: 3, name: 'Sarah Chen', role: 'Frontend Developer', contribution: 'React Components & Animations', image: '/api/placeholder/400/400' },
    { id: 4, name: 'Mike Ross', role: 'Content Strategist', contribution: 'Copywriting & SEO', image: '/api/placeholder/400/400' },
    { id: 5, name: 'Vaibhav Kothari', role: 'Backend Developer', contribution: 'API Integration & Database', image: '/api/placeholder/400/400' },
    { id: 6, name: 'Emily Zhang', role: 'Frontend Developer', contribution: 'Responsive Design & Accessibility', image: '/api/placeholder/400/400' },
    { id: 7, name: 'Alex Johnson', role: 'DevOps Engineer', contribution: 'Deployment & Performance', image: '/api/placeholder/400/400' },
    { id: 8, name: 'Maya Patel', role: 'QA Specialist', contribution: 'Testing & Quality Assurance', image: '/api/placeholder/400/400' },
  ];

  // FullStack Club social media links with icons
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/fullstackbu/', icon: <LinkedinIcon className="w-5 h-5" /> },
    // { name: 'Twitter', url: 'https://twitter.com/fullstackclub', icon: <TwitterIcon className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com/fullstackbu', icon: <InstagramIcon className="w-5 h-5" /> },
    { name: 'GitHub', url: 'http://github.com/Fullstack-Club-Bennett-University/', icon: <GithubIcon className="w-5 h-5" /> },
    { name: 'YouTube', url: 'https://www.youtube.com/@fullstackbu', icon: <YoutubeIcon className="w-5 h-5" /> },
    // { name: 'Discord', url: 'https://discord.gg/fullstackclub', icon: <DiscordIcon className="w-5 h-5" /> },
  ];

  // Quick links for footer navigation
  const quickLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Events', url: '/events' },
    { name: 'Membership', url: '/join' },
    { name: 'Resources', url: '/resources' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">FullStack Club</h2>
            <p className="text-blue-100 max-w-md">
              Empowering developers through community, education, and innovation since 2020.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
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
          <h3 className="text-2xl font-semibold mb-8 text-center">Website Contributors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Website Contributors">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center"
                role="listitem"
              >
                <img
                  src={member.image}
                  alt={`Profile of ${member.name}`}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white border-opacity-50"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-200 mb-2">
                  {member.role}
                </p>
                <p className="text-blue-100 text-sm text-center">
                  {member.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-blue-100 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-blue-100 mb-4">Stay updated with the latest resources, events, and opportunities.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <p className="text-sm text-blue-100">
                © {new Date().getFullYear()} FullStack Club. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4 text-sm text-blue-100">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-blue-100">
              Made with <span className="text-white">❤️</span> by the{' '}
              <span className="font-bold text-white" aria-label="FullStack Club Credit">
                FullStack Club
              </span>
              {' '}community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;