import React, { useState, useRef, useEffect } from 'react';

const MeetTheTeamSectionCopy = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [activeMember, setActiveMember] = useState(0);
  const deptScrollRef = useRef(null);

  // Team data
  const departments = [
    { id: 0, name: 'Office', icon: '👑' },
    { id: 1, name: 'Social Media Team', icon: '📷' },
    { id: 2, name: 'Content Team', icon: '📱' },
    { id: 3, name: 'Techinal Team', icon: '💻' },
    { id: 4, name: 'Design Team', icon: '🎨' },
    { id: 5, name: 'Managment Team', icon: '⚙️' },
    { id: 6, name: 'PR Team', icon: '🏛️' },
    { id: 7, name: 'Multimedia Team', icon: '🧠' },
    { id: 8, name: 'Research Team', icon: '📋' },
  ];

  const teamMembers = [
    // Leadership Team
    {
      id: 0,
      name: 'Aman Gangwar',
      role: 'President',
      departmentId: 0,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      bio: 'Senior Team Lead with 8+ years of experience in software development and team management.',
      additionalInfo: ['Led multiple successful project deployments', 'Expert in agile methodologies'],
    },
    {
      id: 1,
      name: 'Khushgra Gupta',
      role: 'General Secretary',
      departmentId: 0,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // You can replace the image URL with the actual one later
      bio: 'Dynamic and results-driven General Secretary with a passion for organizing and leadership.',
      additionalInfo: ['Organized 50+ successful events', 'Leader in community engagement'],
    },
    // Photography Team
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'LEAD PHOTOGRAPHER',
      departmentId: 1,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      bio: 'Award-winning photographer with 10+ years of professional experience.',
      additionalInfo: ['Published in National Geographic', 'Expert in wildlife photography'],
    },
    {
      id: 3,
      name: 'Mike Ross',
      role: 'EVENT PHOTOGRAPHER',
      departmentId: 1,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
      bio: 'Specialized in capturing memorable moments at corporate and social events.',
      additionalInfo: ['Shot 100+ major events', 'Expert in low-light photography'],
    },
    // Development Team
    {
      id: 4,
      name: 'Shubh Gupta',
      role: 'Techinal Head',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/138377735?v=4',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      additionalInfo: ['Created high-performance web apps', 'Open source contributor'],
    },
    {
      id: 5,
      name: 'Vaibhav Kothari',
      role: 'Techinal Co-Head',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/129139486?s=400&u=2ba574b1b840c3083f52c3bc166952fdb4f38e89&v=4',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      additionalInfo: ['Created high-performance web apps', 'Open source contributor'],
    },
    {
      id: 6,
      name: 'Kartik Gupta',
      role: 'Techinal Co-Head',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/138377735?v=4',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      additionalInfo: ['Created high-performance web apps', 'Open source contributor'],
    },
    {
      id: 7,
      name: 'Shantanu Kumar',
      role: 'BACKEND DEVELOPER',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/141389221?v=4',
      bio: 'Backend specialist with focus on scalable architecture and performance.',
      additionalInfo: ['Microservices architecture expert', 'Database optimization specialist'],
    },
    {
      id: 8,
      name: 'Vishu Pratap',
      role: 'BACKEND DEVELOPER',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/144529111?v=4',
      bio: 'Backend specialist with focus on scalable architecture and performance.',
      additionalInfo: ['Microservices architecture expert', 'Database optimization specialist'],
    },
    {
      id: 9,
      name: 'Avi Srivastava',
      role: 'BACKEND DEVELOPER',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/141389221?v=4',
      bio: 'Backend specialist with focus on scalable architecture and performance.',
      additionalInfo: ['Microservices architecture expert', 'Database optimization specialist'],
    },

    {
      id: 9,
      name: 'Grisha',
      role: 'Multimedia Head',
      departmentId: 7,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', // Replace with actual image
      bio: 'Creative leader with extensive experience in multimedia production.',
      additionalInfo: ['Led multiple multimedia campaigns', 'Expert in video and audio editing'],
    },
    {
      id: 10,
      name: 'Shrijan',
      role: 'Multimedia Co-Head',
      departmentId: 7,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'Collaborative team player in charge of executing multimedia projects.',
      additionalInfo: ['Skilled in motion graphics', 'Expert in video direction and production'],
    },
    {
      id: 11,
      name: 'Ayush',
      role: 'Multimedia Member',
      departmentId: 7,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'Detail-oriented multimedia artist passionate about storytelling.',
      additionalInfo: ['Specializes in animation', 'Experience with editing software like Adobe Premiere'],
    },
    // Content Team
    {
      id: 12,
      name: 'Manasvi',
      role: 'Content Co-Head',
      departmentId: 2,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400', // Replace with actual image
      bio: 'Content strategist and editor with a flair for compelling storytelling.',
      additionalInfo: ['Led content for multiple high-traffic websites', 'Expert in SEO and content marketing'],
    },
    {
      id: 13,
      name: 'Tarun',
      role: 'Content Head',
      departmentId: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'Skilled content manager with experience in creating engaging and effective content strategies.',
      additionalInfo: ['Produced content that increased engagement by 40%', 'Specialized in long-form content'],
    },
    // Management Team
    {
      id: 14,
      name: 'Sarthak Jain',
      role: 'Management Head',
      departmentId: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'Strategic thinker with a strong background in project management and leadership.',
      additionalInfo: ['Led organizational restructuring', 'Expert in team management and resource allocation'],
    },
    {
      id: 15,
      name: 'Harshit',
      role: 'Management Member',
      departmentId: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    // PR Team
    {
      id: 16,
      name: 'Aeishni Yadhav',
      role: 'PR Head',
      departmentId: 6,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
  ];

  // Filter team members based on the active department
  const filteredMembers = teamMembers.filter((member) => member.departmentId === activeDepartment);

  // Ensure activeMember is within bounds whenever filteredMembers changes
  useEffect(() => {
    if (filteredMembers.length > 0 && activeMember >= filteredMembers.length) {
      setActiveMember(filteredMembers.length - 1);
    }
  }, [filteredMembers, activeMember]);

  // Handle department change and reset activeMember
  const handleDepartmentChange = (deptId) => {
    setActiveDepartment(deptId);
    setActiveMember(0); // Reset to the first member of the new department
  };

  // Navigate through team members
  const navigateTeam = (direction) => {
    if (filteredMembers.length <= 1) return;
    setActiveMember((prev) =>
      direction === 'next'
        ? (prev + 1) % filteredMembers.length
        : (prev - 1 + filteredMembers.length) % filteredMembers.length
    );
  };

  // Scroll department into view
  useEffect(() => {
    if (deptScrollRef.current) {
      const activeButton = deptScrollRef.current.children[activeDepartment];
      activeButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeDepartment]);

  // Safely select the current member
  const currentMember = filteredMembers[activeMember] || teamMembers[0];

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-8 px-4 flex items-center justify-center overflow-hidden">
      {/* Shining Effect Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Stars Effect */}
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `twinkle ${Math.random() * 4 + 3}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
  
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 text-center tracking-wide font-sans">
          Meet Our Team
        </h1>
  
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-6 border border-gray-700/50">
          {/* Mobile Department Scroll */}
          <div
            ref={deptScrollRef}
            className="mb-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-2 lg:hidden touch-pan-x"
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleDepartmentChange(dept.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 mx-1 rounded-xl transition-all snap-center ${
                  activeDepartment === dept.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800/70 text-cyan-300 hover:bg-gray-700/80'
                }`}
              >
                <span className="text-xl">{dept.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap font-mono">{dept.name}</span>
              </button>
            ))}
          </div>
  
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] gap-4 lg:gap-3">
            {/* Desktop Department Sidebar */}
            <div className="hidden lg:block lg:w-64 shrink-0">
              <div className="flex flex-col gap-2 p-4 bg-gray-800/70 backdrop-blur-sm rounded-[30px] h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 border border-gray-700/50">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => handleDepartmentChange(dept.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full ${
                      activeDepartment === dept.id
                        ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white shadow-lg border border-cyan-500/50'
                        : 'text-cyan-300 hover:bg-gray-700/70 border border-gray-700/50'
                    }`}
                  >
                    <span className="text-2xl">{dept.icon}</span>
                    <span className="text-sm font-medium font-mono">{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>
  
            {/* Team Member Card */}
            <div className="rounded-[30px] relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm overflow-hidden border border-gray-700/50 shadow-xl">
              <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="p-4 sm:p-6">
                  <img
                    src={currentMember?.image}
                    alt={currentMember?.name}
                    className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl border-4 border-gray-700/50 shadow-lg"
                    loading="lazy"
                  />
                </div>
  
                {/* Info */}
                <div className="p-4 sm:p-6 text-gray-100 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">{currentMember?.name}</h2>
                    <span className="inline-block bg-gradient-to-r from-cyan-700 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-mono mb-4">
                      {currentMember?.role}
                    </span>
                    <p className="text-base sm:text-lg mb-4 font-sans text-gray-300 leading-relaxed">{currentMember?.bio}</p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {currentMember?.additionalInfo?.map((info, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-cyan-400">◆</span>
                          <span className="text-gray-300 font-light">{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
  
                  {/* Mobile Navigation */}
                  {filteredMembers.length > 1 && (
                    <div className="flex items-center justify-between mt-4 sm:mt-6">
                      <button
                        onClick={() => navigateTeam('prev')}
                        className="w-10 h-10 flex items-center justify-center bg-gray-700/70 rounded-full hover:bg-gray-600/80 text-cyan-300"
                        aria-label="Previous team member"
                      >
                        ←
                      </button>
                      <div className="flex gap-1 sm:gap-2">
                        {filteredMembers.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveMember(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                              index === activeMember ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125' : 'bg-gray-600/70'
                            }`}
                            aria-label={`Go to team member ${index + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => navigateTeam('next')}
                        className="w-10 h-10 flex items-center justify-center bg-gray-700/70 rounded-full hover:bg-gray-600/80 text-cyan-300"
                        aria-label="Next team member"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
  
            {/* Desktop Right Sidebar */}
            <div className="hidden lg:block lg:w-48 shrink-0">
              <div className="h-full flex flex-col gap-2">
                {/* Top Section (Code Create Conquer) */}
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl rounded-t-[100px] rounded-b-[50px] p-1 text-white text-center flex-1 border border-gray-700/50 overflow-hidden shadow-lg">
                  <img
                    src="./ccc.png"
                    alt="Code Create Conquer"
                    className="w-full h-full object-cover rounded-t-[45px] rounded-b-[45px]"
                    draggable="false"
                  />
                </div>
                {/* Bottom Section (FS Logo) */}
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-[30px] p-1 text-white text-center h-48 border border-gray-700/50 overflow-hidden shadow-lg">
                  <img
                    src="./fs.png"
                    alt="FS Logo"
                    className="w-full h-full object-cover rounded-[25px]"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
  export default MeetTheTeamSectionCopy;