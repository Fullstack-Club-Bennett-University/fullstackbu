import React, { useState, useRef, useEffect } from 'react';

const MeetTheTeamSection = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [activeMember, setActiveMember] = useState(0);
  const deptScrollRef = useRef(null);

  // Scroll active department into view
  useEffect(() => {
    if (deptScrollRef.current) {
      const activeButton = deptScrollRef.current.children[activeDepartment];
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeDepartment]);

  // Team member data
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
  
  // Enhanced navigation that preserves position when switching departments
  const handleDepartmentChange = (deptId) => {
    const newDeptMembers = teamMembers.filter(member => member.departmentId === deptId);
    const currentDeptMembers = teamMembers.filter(member => member.departmentId === activeDepartment);
    
    // Calculate relative position in new department
    const relativePosition = activeMember / currentDeptMembers.length;
    const newPosition = Math.floor(relativePosition * newDeptMembers.length);
    
    setActiveDepartment(deptId);
    setActiveMember(newPosition);
  };

  const navigateTeam = (direction) => {
    if (filteredMembers.length <= 1) return;
    
    if (direction === 'next') {
      setActiveMember((activeMember + 1) % filteredMembers.length);
    } else {
      setActiveMember((activeMember - 1 + filteredMembers.length) % filteredMembers.length);
    }
  };

  // Filter team members by active department
  const filteredMembers = teamMembers.filter(
    member => member.departmentId === activeDepartment
  );
  
  const currentMember = filteredMembers.length > 0 
    ? filteredMembers[activeMember % filteredMembers.length] 
    : teamMembers[0];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-400 p-4 md:p-6">
      <h1 className="text-6xl md:text-7xl font-bold text-orange-500 mb-12 tracking-widest text-center" 
          style={{textShadow: '2px 2px 0 rgba(0,0,0,0.1)'}}>
        MEET THE TEAM
      </h1>
      
      <div className="container mx-auto max-w-7xl">
        <div className="w-full bg-black rounded-[2.5rem] p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[800px]">
            {/* Left sidebar - departments */}
            <div className="w-full md:w-48  bg-blue-600 rounded-[1.5rem] overflow-hidden shadow-2xl">
              {/* Mobile scroll indicator */}
              <div className="md:hidden w-full h-1 bg-white bg-opacity-20">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ 
                    width: `${100 / departments.length}%`,
                    marginLeft: `${(100 / departments.length) * activeDepartment}%`
                  }}
                />
              </div>
              
              {/* Departments container */}
              <div 
                ref={deptScrollRef}
                className="h-full flex flex-row md:flex-col justify-between py-8 px-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory md:snap-none"
              >
                {departments.map(dept => (
                  <button 
                    key={dept.id}
                    onClick={() => handleDepartmentChange(dept.id)}
                    className={`flex flex-col items-center justify-center transition-all duration-300 snap-center
                      min-w-[90px] md:min-w-0 w-24 h-24 md:w-full md:h-24
                      rounded-2xl group relative
                      ${activeDepartment === dept.id 
                        ? 'bg-white scale-105 shadow-lg' 
                        : 'hover:bg-blue-700/50'}`}
                  >
                    <span className={`text-5xl transition-transform duration-300 group-hover:scale-110
                      ${activeDepartment === dept.id ? 'text-blue-600' : 'text-white'}`}>
                      {dept.icon}
                    </span>
                    <span className={`mt-2 text-sm font-medium transition-colors
                      ${activeDepartment === dept.id ? 'text-blue-600' : 'text-white/80'}`}>
                      {dept.name}
                    </span>
                    {/* Active indicator */}
                    {activeDepartment === dept.id && (
                      <div className="absolute inset-0 rounded-2xl ring-4 ring-white ring-opacity-50 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          
            {/* Center - team member info */}
            <div className="flex-1 relative">
              {/* Navigation Arrows */}
              {filteredMembers.length > 1 && (
                <>
                  <button 
                    onClick={() => navigateTeam('prev')}
                    className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2 w-20 h-20 
                      bg-white/90 backdrop-blur-sm rounded-full 
                      flex items-center justify-center 
                      hover:bg-blue-100 transition-all duration-300
                      shadow-lg hover:shadow-xl z-10
                      transform hover:-translate-x-9"
                  >
                    <span className="text-blue-600 text-4xl">◀</span>
                  </button>
                  <button 
                    onClick={() => navigateTeam('next')}
                    className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2 w-20 h-20 
                      bg-white/90 backdrop-blur-sm rounded-full 
                      flex items-center justify-center 
                      hover:bg-blue-100 transition-all duration-300
                      shadow-lg hover:shadow-xl z-10
                      transform hover:translate-x-9"
                  >
                    <span className="text-blue-600 text-4xl">▶</span>
                  </button>
                </>
              )}

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] overflow-hidden h-full">
                <div className="h-full flex flex-col md:flex-row gap-6">
                  {/* Member image */}
                  <div className="w-full md:w-1/2 p-4 md:p-6">
                    <div className="relative rounded-[1.5rem] overflow-hidden border-4 border-white h-80 md:h-[600px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-20"></div>
                      <img 
                        src={currentMember.image} 
                        alt={currentMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Member info with funky styling */}
                  <div className="w-full md:w-1/2 p-4 md:p-6 text-white">
                    <h2 className="text-4xl font-bold mb-4 text-white">{currentMember.name}</h2>
                    <div className="bg-white text-blue-600 font-bold text-2xl px-8 py-2 inline-block rounded-full mb-6 transform -skew-x-6 shadow-lg">
                      {currentMember.role}
                    </div>
                    
                    <div className="text-xl space-y-8">
                      <p className="font-mono leading-relaxed">{currentMember.bio}</p>
                      
                      <ul className="space-y-4">
                        {currentMember.additionalInfo.map((info, index) => (
                          <li key={index} className="font-mono leading-relaxed flex items-center">
                            <span className="text-white mr-3 text-2xl">▸</span>
                            {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Navigation dots */}
                    {filteredMembers.length > 1 && (
                      <div className="flex justify-center mt-12 space-x-4">
                        {filteredMembers.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setActiveMember(index)}
                            className={`w-8 h-8 transform rotate-45 transition-all duration-300 ${
                              index === activeMember % filteredMembers.length 
                                ? 'bg-white scale-110 shadow-lg' 
                                : 'bg-blue-200 hover:bg-blue-100'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right sidebar with funky styling */}
            <div className="w-full md:w-40 flex flex-col gap-6">
              {/* CODE CREATE CONQUER logo */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] overflow-hidden flex-1">
                <div className="h-full p-4 flex flex-col items-center justify-center text-white font-bold">
                  <div className="text-4xl leading-tight tracking-tight text-center">
                    <div className="mb-3">CODE</div>
                    <div className="mb-3">CRE</div>
                    <div className="mb-3">ATE</div>
                    <div className="text-white transform -rotate-12 origin-center text-7xl mt-3 font-black">CONQUER</div>
                  </div>
                </div>
              </div>
              
              {/* FS logo */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] overflow-hidden h-36">
                <div className="h-full p-4 flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute bg-white bg-opacity-10 h-1 w-full transform -rotate-45"
                        style={{ top: `${i * 14 + 20}px`, left: '-10px', width: '150%' }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="text-white text-2xl mb-3">
                      <code>&lt;/&gt;</code>
                    </div>
                    <div className="text-white font-bold text-6xl">FS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamSection;