import React, { useState, useRef, useEffect } from 'react';

const MeetTheTeamSection = () => {
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
      image: 'https://drive.google.com/drive-viewer/AKGpihbC3Y7k4hTBpMc5G_6lCpGyG1xIRbofpGsUvPmwRzKgDlAu3S1F0lDHpPNGLwrOvbxhGY0Mnajdd8eCekGo6laWy_Ov81ZGv-c=w1920-h877-rw-v1', // You can replace the image URL with the actual one later
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
      image: 'https://i.ibb.co/Y7Q5JYRs/Screenshot-2025-03-20-003817.png',
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
      image: 'https://i.ibb.co/GfdWW3Zs/20250317-203108-Shrijan-Katiyar.jpg', // Replace with actual image
      bio: 'Collaborative team player in charge of executing multimedia projects.',
      additionalInfo: ['Skilled in motion graphics', 'Expert in video direction and production'],
    },
    {
      id: 11,
      name: 'Ayush',
      role: 'Multimedia Member',
      departmentId: 7,
      image: '', // Replace with actual image
      bio: 'Detail-oriented multimedia artist passionate about storytelling.',
      additionalInfo: ['Specializes in animation', 'Experience with editing software like Adobe Premiere'],
    },
    // Content Team
    {
      id: 12,
      name: 'Manasvi Khanna',
      role: 'Content Head',
      departmentId: 2,
      image: 'https://i.ibb.co/k62KyjyH/Screenshot-2025-03-19-235432.png', // Replace with actual image
      bio: 'Content strategist and editor with a flair for compelling storytelling.',
      additionalInfo: ['Led content for multiple high-traffic websites', 'Expert in SEO and content marketing'],
    },
    {
      id: 13,
      name: 'Tarun Dagar',
      role: 'Content Co-Head',
      departmentId: 2,
      image: 'https://i.ibb.co/zhdrX7j8/Tarun-Dagar.jpg', // Replace with actual image
      bio: 'Skilled content manager with experience in creating engaging and effective content strategies.',
      additionalInfo: ['Produced content that increased engagement by 40%', 'Specialized in long-form content'],
    },
    {
      id: 13,
      name: 'Sohil',
      role: 'Core Member',
      departmentId: 2,
      image: 'https://i.ibb.co/r8FJWn1/IMG-20250317-WA0008-sohil-pathania.jpg', // Replace with actual image
      bio: 'Skilled content manager with experience in creating engaging and effective content strategies.',
      additionalInfo: ['Produced content that increased engagement by 40%', 'Specialized in long-form content'],
    },
    {
      id: 13,
      name: 'Khushi aftab',
      role: 'Core Member',
      departmentId: 2,
      image: 'https://i.ibb.co/fGK05DFQ/Khushi-Aftab.jpg', // Replace with actual image
      bio: 'Skilled content manager with experience in creating engaging and effective content strategies.',
      additionalInfo: ['Produced content that increased engagement by 40%', 'Specialized in long-form content'],
    },
    {
      id: 13,
      name: 'Pranshita',
      role: 'Core Member',
      departmentId: 2,
      image: 'https://i.ibb.co/gZRG2sH7/IMG-20250102-WA0437-Pranshita.jpg', // Replace with actual image
      bio: 'Skilled content manager with experience in creating engaging and effective content strategies.',
      additionalInfo: ['Produced content that increased engagement by 40%', 'Specialized in long-form content'],
    },
    // Management Team
    {
      id: 14,
      name: 'Sarthak Jain',
      role: 'Management Head',
      departmentId: 5,
      image: 'https://i.ibb.co/HppN17zr/Screenshot-2025-03-20-001757.png', // Replace with actual image
      bio: 'Strategic thinker with a strong background in project management and leadership.',
      additionalInfo: ['Led organizational restructuring', 'Expert in team management and resource allocation'],
    },
    {
      id: 15,
      name: 'Parth gupta',
      role: 'Managment Co-head',
      departmentId: 5,
      image: 'https://i.ibb.co/0pwnZGZF/IMG-20241012-WA0468-Parth-Gupta.jpg', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'Harshit',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/21wXY0Hp/IMG-20250218-060514-480-Harshit-Khatri.webp', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'MARSHAL WALESKI ',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/qMH92w9m/Marshal.jpg', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'Pari Sharma ',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/jP3dLRfr/IMG-20250312-WA0081-Palak-Aitwani.jpg', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'Palak Aitwani',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/6cJV1dgj/IMG-2634-pari-Sharma.jpg', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'Sanskar',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/gQTksvM/Screenshot-2025-03-20-001733.png', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    {
      id: 15,
      name: 'Hemang Tripathi',
      role: 'Core Member',
      departmentId: 5,
      image: 'https://i.ibb.co/DPJvvj9G/Screenshot-2025-03-20-002929.png', // Replace with actual image
      bio: 'Detail-oriented professional with a focus on operations and organizational growth.',
      additionalInfo: ['Improved team productivity by 30%', 'Skilled in operational analysis'],
    },
    // PR Team
    {
      id: 16,
      name: 'Aeishni Yadhav',
      role: 'PR Head',
      departmentId: 6,
      image: '', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
    {
      id: 16,
      name: 'Atisha Mehta',
      role: 'Design Head',
      departmentId: 4,
      image: 'https://i.ibb.co/4wN05JHm/Whats-App-Image-2025-03-18-at-18-24-51-Atisha-Mehta.jpg', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
    {
      id: 16,
      name: 'Aarushi',
      role: 'Design Co-Head',
      departmentId: 4,
      image: 'https://i.ibb.co/KcPP52GK/IMG-20241130-011550-738-Aarushi.webp', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
    {
      id: 16,
      name: 'Shubh Jadiya ',
      role: 'Core Member',
      departmentId: 4,
      image: 'https://i.ibb.co/rRNGB5w1/Screenshot-20250317-190501-Gallery-Shubh-Jadiya.png', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
    {
      id: 16,
      name: 'Abhishek Ranjan',
      role: 'Core Member',
      departmentId: 4,
      image: 'https://i.ibb.co/HLSmX8W2/Screenshot-2025-03-20-000655.png', // Replace with actual image
      bio: 'PR professional with expertise in crafting communication strategies and managing public relations.',
      additionalInfo: ['Built strong media relationships', 'Led successful PR campaigns'],
    },
    {
      id: 16,
      name: 'Gaurish Rana',
      role: 'Core Member',
      departmentId: 4,
      image: 'https://i.ibb.co/tTbQJJHJ/Gaurish-Rana.jpg', // Replace with actual image
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-blue-300 py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center tracking-wide">
          Meet Our Team
        </h1>

        <div className="bg-black/90 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6">
          {/* Mobile Department Scroll */}
          <div
            ref={deptScrollRef}
            className="mb-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-2 lg:hidden touch-pan-x"
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleDepartmentChange(dept.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 mx-1 rounded-xl transition-all snap-center ${activeDepartment === dept.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
              >
                <span className="text-xl">{dept.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{dept.name}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] gap-4 lg:gap-3">
            {/* Desktop Department Sidebar */}
            <div className="hidden lg:block lg:w-64 shrink-0">
              <div className="flex flex-col gap-2 p-4 bg-blue-600 rounded-[30px] h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => handleDepartmentChange(dept.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full ${activeDepartment === dept.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-white hover:bg-blue-700'
                      }`}
                  >
                    <span className="text-2xl">{dept.icon}</span>
                    <span className="text-sm font-medium">{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Team Member Card */}
            <div className="rounded-[50px] relative bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
              <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="p-4 sm:p-6">
                  <img
                    src={currentMember?.image}
                    alt={currentMember?.name}
                    draggable="false"
                    className="w-full h-64 sm:h-80 md:h-full object-cover rounded-3xl border-4 border-white shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">{currentMember?.name}</h2>
                    <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {currentMember?.role}
                    </span>
                    <p className="text-base sm:text-lg mb-4">{currentMember?.bio}</p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {currentMember?.additionalInfo?.map((info, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-blue-200">•</span>
                          <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Navigation */}
                  {filteredMembers.length > 1 && (
                    <div className="flex items-center justify-between mt-4 sm:mt-6">
                      <button
                        onClick={() => navigateTeam('prev')}
                        className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30"
                        aria-label="Previous team member"
                      >
                        ←
                      </button>
                      <div className="flex gap-1 sm:gap-2">
                        {filteredMembers.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveMember(index)}
                            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all ${index === activeMember ? 'bg-white scale-125' : 'bg-blue-300'
                              }`}
                            aria-label={`Go to team member ${index + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => navigateTeam('next')}
                        className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30"
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
                <div className="bg-blue-600 rounded-2xl rounded-t-[250px] rounded-b-[150px] p-0 text-white text-center flex-1">
                  <img
                    src="./ccc.png"
                    alt="Code Create Conquer"
                    className="w-full h-full object-cover rounded-t-[250px] rounded-b-[150px]"
                    draggable="false"
                  />
                </div>
                {/* Bottom Section (FS Logo) */}
                <div className="bg-black rounded-[50px] p-0 text-white text-center h-48">
                  <img
                    src="./fs.png"
                    alt="FS Logo"
                    className="w-full h-full object-cover rounded-[50px]"
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Hiding */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeamSection;