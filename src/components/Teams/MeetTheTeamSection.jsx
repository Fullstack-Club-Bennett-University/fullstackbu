import React, { useState, useRef, useEffect } from 'react';

const MeetTheTeamSection = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [activeMember, setActiveMember] = useState(0);
  const deptScrollRef = useRef(null);

  // Team data (keeping your original data structure)
  const departments = [
    { id: 0, name: 'Leadership', icon: '👑' },
    { id: 1, name: 'Photography', icon: '📷' },
    { id: 2, name: 'Content', icon: '📱' },
    { id: 3, name: 'Development', icon: '💻' },
    { id: 4, name: 'Design', icon: '🎨' },
    { id: 5, name: 'Engineering', icon: '⚙️' },
    { id: 6, name: 'Architecture', icon: '🏛️' },
    { id: 7, name: 'AI', icon: '🧠' },
    { id: 8, name: 'Planning', icon: '📋' }
  ];

 
  const teamMembers = [
    // Leadership Team
    {
      id: 0,
      name: 'John Doe',
      role: 'TEAM LEAD',
      departmentId: 0,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      bio: 'Senior Team Lead with 8+ years of experience in software development and team management.',
      additionalInfo: [
        'Led multiple successful project deployments',
        'Expert in agile methodologies'
      ]
    },
    {
      id: 1,
      name: 'Jane Smith',
      role: 'PROJECT DIRECTOR',
      departmentId: 0,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
      bio: 'Experienced Project Director driving innovation across multiple teams.',
      additionalInfo: [
        'Managed 20+ successful projects',
        'Strategic planning expert'
      ]
    },
    // Photography Team
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'LEAD PHOTOGRAPHER',
      departmentId: 1,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      bio: 'Award-winning photographer with 10+ years of professional experience.',
      additionalInfo: [
        'Published in National Geographic',
        'Expert in wildlife photography'
      ]
    },
    {
      id: 3,
      name: 'Mike Ross',
      role: 'EVENT PHOTOGRAPHER',
      departmentId: 1,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
      bio: 'Specialized in capturing memorable moments at corporate and social events.',
      additionalInfo: [
        'Shot 100+ major events',
        'Expert in low-light photography'
      ]
    },
    // Development Team
    {
      id: 4,
      name: 'Alex Johnson',
      role: 'LEAD DEVELOPER',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/129139486?s=400&u=2ba574b1b840c3083f52c3bc166952fdb4f38e89&v=4',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      additionalInfo: [
        'Created high-performance web apps',
        'Open source contributor'
      ]
    },
    {
      id: 5,
      name: 'Alex Johnson',
      role: 'LEAD DEVELOPER',
      departmentId: 3,
      image: 'https://avatars.githubusercontent.com/u/129139486?s=400&u=2ba574b1b840c3083f52c3bc166952fdb4f38e89&v=4',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      additionalInfo: [
        'Created high-performance web apps',
        'Open source contributor'
      ]
    },
    {
      id:6,  
      name: 'Emily Zhang',
      role: 'BACKEND DEVELOPER',
      departmentId: 3,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
      bio: 'Backend specialist with focus on scalable architecture and performance.',
      additionalInfo: [
        'Microservices architecture expert',
        'Database optimization specialist'
      ]
    }
  ];
  
  useEffect(() => {
    if (deptScrollRef.current) {
      const activeButton = deptScrollRef.current.children[activeDepartment];
      activeButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeDepartment]);

  const handleDepartmentChange = (deptId) => {
    const newDeptMembers = teamMembers.filter(member => member.departmentId === deptId);
    const currentDeptMembers = teamMembers.filter(member => member.departmentId === activeDepartment);
    const relativePosition = activeMember / currentDeptMembers.length;
    const newPosition = Math.floor(relativePosition * newDeptMembers.length);
    
    setActiveDepartment(deptId);
    setActiveMember(Math.min(newPosition, newDeptMembers.length - 1));
  };

  const navigateTeam = (direction) => {
    if (filteredMembers.length <= 1) return;
    setActiveMember(prev => direction === 'next' 
      ? (prev + 1) % filteredMembers.length 
      : (prev - 1 + filteredMembers.length) % filteredMembers.length
    );
  };

  const filteredMembers = teamMembers.filter(member => member.departmentId === activeDepartment);
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
            className="mb-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-2
              lg:hidden touch-pan-x"
          >
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => handleDepartmentChange(dept.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 mx-1 rounded-xl transition-all snap-center
                  ${activeDepartment === dept.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
              >
                <span className="text-xl">{dept.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{dept.name}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr,auto] gap-4 lg:gap-6">
            {/* Desktop Department Sidebar */}
            <div className="hidden lg:block lg:w-64 shrink-0">
              <div className="flex flex-col gap-2 p-4 bg-blue-600 rounded-2xl h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400">
                {departments.map(dept => (
                  <button
                    key={dept.id}
                    onClick={() => handleDepartmentChange(dept.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full
                      ${activeDepartment === dept.id 
                        ? 'bg-white text-blue-600 shadow-md' 
                        : 'text-white hover:bg-blue-700'}`}
                  >
                    <span className="text-2xl">{dept.icon}</span>
                    <span className="text-sm font-medium">{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Team Member Card */}
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
                {/* Image */}
                <div className="p-4 sm:p-6">
                  <img
                    src={currentMember?.image}
                    alt={currentMember?.name}
                    className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl border-4 border-white shadow-lg"
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
                            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all
                              ${index === activeMember ? 'bg-white scale-125' : 'bg-blue-300'}`}
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
              <div className="h-full flex flex-col gap-4">
                <div className="bg-blue-600 rounded-2xl p-4 text-white text-center flex-1 flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-bold block">Code</span>
                  <span className="text-xl sm:text-2xl font-bold block">Create</span>
                  <span className="text-2xl sm:text-3xl font-extrabold block text-blue-200">Conquer</span>
                </div>
                <div className="bg-blue-600 rounded-2xl p-16 text-white text-center">
                  <span className="text-3xl sm:text-4xl font-bold">FS</span>
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