import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

const Footer = () => {
  // Team members data
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Lead Developer', image: '/api/placeholder/400/400' },
    { id: 2, name: 'Jane Smith', role: 'Designer', image: '/api/placeholder/400/400' },
    { id: 3, name: 'Sarah Chen', role: 'Photographer', image: '/api/placeholder/400/400' },
    { id: 4, name: 'Mike Ross', role: 'Content Creator', image: '/api/placeholder/400/400' },
    { id: 5, name: 'Vaibhav Kothari', role: 'Backend Developer', image: '/api/placeholder/400/400' },
    { id: 6, name: 'Emily Zhang', role: 'Frontend Developer', image: '/api/placeholder/400/400' },
  ];

  // Social media links with icons
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedinIcon className="w-5 h-5" /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <TwitterIcon className="w-5 h-5" /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <InstagramIcon className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com', icon: <GithubIcon className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2" aria-label="Credits Section">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Meet the talented professionals behind our success
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" role="list" aria-label="Team Members">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              role="listitem"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={`Profile of ${member.name}`}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white border-opacity-50"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-blue-200">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mb-12" aria-label="Social Media Links">
          <h3 className="text-xl font-semibold mb-6">Connect with Us</h3>
          <div className="flex justify-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label={`Visit our ${link.name} page`}
              >
                <div className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-blue-100">
                © {new Date().getFullYear()} FullStack. All rights reserved.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-blue-100">
                Made with <span className="text-white">❤️</span> by{' '}
                <span className="font-bold text-white" aria-label="FillStack Credit">
                  FullStack
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;