// import React, { useEffect, useRef, useState } from "react";
// import myImage from "../../assets/awardsImage.png";
// import myImage1 from "../../assets/awardsImage1.png";
// import myImage2 from "../../assets/awardsImage2.png";

// const AwardsComponent = () => {
//   const scrollContainerRef = useRef(null);
//   const contentRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Set component as visible after a short delay for entrance animation
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);

//     const scrollContainer = scrollContainerRef.current;
//     const content = contentRef.current;
//     let animationId;
//     let scrollPosition = 0;
//     const scrollSpeed = 0.5; // Adjust for faster/slower scrolling

//     const scroll = () => {
//       scrollPosition += scrollSpeed;

//       // Reset scroll position when reaching the end of the first set
//       if (scrollPosition >= content.scrollWidth / 2) {
//         scrollPosition = 0;
//         scrollContainer.scrollLeft = 0;
//       } else {
//         scrollContainer.scrollLeft = scrollPosition;
//       }

//       animationId = requestAnimationFrame(scroll);
//     };

//     // Start the animation
//     animationId = requestAnimationFrame(scroll);

//     // Clean up
//     return () => {
//       cancelAnimationFrame(animationId);
//       clearTimeout(timer);
//     };
//   }, []);

//   // Animation for background pattern movement - slower and more subtle
//   const [bgPosition, setBgPosition] = useState(0);

//   useEffect(() => {
//     const bgAnimation = setInterval(() => {
//       setBgPosition((prev) => (prev + 0.5) % 100); // Reduced speed
//     }, 150);

//     return () => clearInterval(bgAnimation);
//   }, []);

//   return (
//     <div
//       className={`relative w-full h-full overflow-hidden transition-opacity duration-1000 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* Animated orange background with wave pattern */}
//       <div
//         className="w-full h-full flex flex-col relative"
//         style={{
//           backgroundColor: "#ff7f2a",
//           backgroundImage: `radial-gradient(circle at 100% 150%, #ff7f2a 24%, #ff6600 25%, #ff6600 28%, #ff7f2a 29%, #ff7f2a 36%, #ff6600 36%, #ff6600 40%, transparent 40%, transparent),
//                           radial-gradient(circle at 0 150%, #ff7f2a 24%, #ff6600 25%, #ff6600 28%, #ff7f2a 29%, #ff7f2a 36%, #ff6600 36%, #ff6600 40%, transparent 40%, transparent),
//                           radial-gradient(circle at 50% 100%, #ff6600 10%, #ff7f2a 11%, #ff7f2a 23%, #ff6600 24%, #ff6600 30%, #ff7f2a 31%, #ff7f2a 43%, #ff6600 44%, #ff6600 50%, #ff7f2a 51%, #ff7f2a 63%, #ff6600 64%, #ff6600 71%, transparent 71%, transparent),
//                           radial-gradient(circle at 100% 50%, #ff6600 5%, #ff7f2a 6%, #ff7f2a 15%, #ff6600 16%, #ff6600 20%, #ff7f2a 21%, #ff7f2a 30%, #ff6600 31%, #ff6600 35%, #ff7f2a 36%, #ff7f2a 45%, #ff6600 46%, #ff6600 49%, transparent 50%, transparent),
//                           radial-gradient(circle at 0 50%, #ff6600 5%, #ff7f2a 6%, #ff7f2a 15%, #ff6600 16%, #ff6600 20%, #ff7f2a 21%, #ff7f2a 30%, #ff6600 31%, #ff6600 35%, #ff7f2a 36%, #ff7f2a 45%, #ff6600 46%, #ff6600 49%, transparent 50%, transparent)`,
//           backgroundSize: "100px 50px",
//           backgroundPosition: `${bgPosition}px ${bgPosition}px`,
//         }}
//       >
//         {/* Header section with subtle entrance */}
//         <div className="pt-6 pb-2 px-4">
//           <h1 className="text-black text-8xl font-bold relative">
//             <span className="relative inline-block">
//               Awards
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-black transform scale-x-0 origin-left animate-grow-line"></span>
//             </span>
//           </h1>
//         </div>

//         {/* Marquee scrolling container with hover effect */}
//         <div
//           className="flex-1 overflow-hidden"
//           ref={scrollContainerRef}
//           onMouseEnter={() =>
//             (scrollContainerRef.current.style.animationPlayState = "paused")
//           }
//           onMouseLeave={() =>
//             (scrollContainerRef.current.style.animationPlayState = "running")
//           }
//         >
//           <div className="flex flex-row p-2 gap-4 h-full" ref={contentRef}>
//             {/* First set of images with hover effects and animations */}
//             {[myImage1, myImage, myImage2, myImage1, myImage, myImage2].map(
//               (img, index) => (
//                 <div
//                   key={index}
//                   className={`${
//                     index === 1 || index === 4 ? "w-144" : "w-96"
//                   } bg-gray-200 flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl`}
//                 >
//                   <div className="relative w-full h-full group">
//                     <img
//                       src={img}
//                       alt={
//                         index % 3 === 0
//                           ? "Certificate of Recognition for FULL STACK BU"
//                           : index % 3 === 1
//                           ? "Team photo with award recipients"
//                           : "Best Performer SCSET Bennett University Trophy"
//                       }
//                       className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                       <p className="text-white text-lg font-medium p-4">
//                         {index % 3 === 0
//                           ? "Certificate of Recognition"
//                           : index % 3 === 1
//                           ? "Team Achievement Award"
//                           : "Best Performer Trophy"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* Bottom caption bar with subtler animated elements */}
//         <div className="p-4 flex justify-between items-center bg-black/10 backdrop-blur-sm">
//           <div className="text-2xl font-bold text-black">2024</div>
//           <div className="text-xl font-medium text-center max-w-md">
//             The core team of 2024 receiving the award for
//             <span className="font-bold text-white bg-black px-2 py-1 mx-1 rounded">
//               "The Most Contributing to the Community"
//             </span>
//           </div>
//           <div className="w-8"></div> {/* Empty div for flex spacing */}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add custom animation keyframes - reduced and subtler
// const styles = `
// @keyframes grow-line {
//   0% { transform: scaleX(0); }
//   100% { transform: scaleX(1); }
// }

// .animate-grow-line {
//   animation: grow-line 1.5s ease forwards;
// }
// `;

// // Add the styles to the document
// const StyleSheet = () => {
//   useEffect(() => {
//     const styleElement = document.createElement("style");
//     styleElement.textContent = styles;
//     document.head.appendChild(styleElement);
//     return () => document.head.removeChild(styleElement);
//   }, []);

//   return null;
// };

// const EnhancedAwardsComponent = () => (
//   <>
//     <StyleSheet />
//     <AwardsComponent />
//   </>
// );

// export default EnhancedAwardsComponent;

import React, { useEffect, useRef, useState } from "react";
import myImage from "../../assets/awardsImage.png";
import myImage1 from "../../assets/awardsImage1.png";
import myImage2 from "../../assets/awardsImage2.png";

const AwardsComponent = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);

  useEffect(() => {
    // Set up the intersection observer to detect when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Component is in view
          setIsVisible(true);

          // Start title animation after a slight delay
          setTimeout(() => {
            setTitleAnimated(true);
          }, 300);

          // Stop observing once animation is triggered
          observer.unobserve(componentRef.current);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    // Start observing the component
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Clean up
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;
    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset scroll position when reaching the end of the first set
      if (scrollPosition >= content.scrollWidth / 2) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation only when component is visible
    if (isVisible) {
      animationId = requestAnimationFrame(scroll);
    }

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  // Animation for background pattern movement - slower and more subtle
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    let bgAnimation;

    if (isVisible) {
      bgAnimation = setInterval(() => {
        setBgPosition((prev) => (prev + 0.5) % 100); // Reduced speed
      }, 150);
    }

    return () => clearInterval(bgAnimation);
  }, [isVisible]);

  // Title letters for animation
  const titleLetters = "Awards".split("");

  return (
    <div
      ref={componentRef}
      className={`relative w-full h-full overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated orange background with wave pattern */}
      <div
        className="w-full h-full flex flex-col relative"
        style={{
          backgroundColor: "#ff7f2a",
          backgroundImage: `radial-gradient(circle at 100% 150%, #ff7f2a 24%, #ff6600 25%, #ff6600 28%, #ff7f2a 29%, #ff7f2a 36%, #ff6600 36%, #ff6600 40%, transparent 40%, transparent),
                          radial-gradient(circle at 0 150%, #ff7f2a 24%, #ff6600 25%, #ff6600 28%, #ff7f2a 29%, #ff7f2a 36%, #ff6600 36%, #ff6600 40%, transparent 40%, transparent),
                          radial-gradient(circle at 50% 100%, #ff6600 10%, #ff7f2a 11%, #ff7f2a 23%, #ff6600 24%, #ff6600 30%, #ff7f2a 31%, #ff7f2a 43%, #ff6600 44%, #ff6600 50%, #ff7f2a 51%, #ff7f2a 63%, #ff6600 64%, #ff6600 71%, transparent 71%, transparent),
                          radial-gradient(circle at 100% 50%, #ff6600 5%, #ff7f2a 6%, #ff7f2a 15%, #ff6600 16%, #ff6600 20%, #ff7f2a 21%, #ff7f2a 30%, #ff6600 31%, #ff6600 35%, #ff7f2a 36%, #ff7f2a 45%, #ff6600 46%, #ff6600 49%, transparent 50%, transparent),
                          radial-gradient(circle at 0 50%, #ff6600 5%, #ff7f2a 6%, #ff7f2a 15%, #ff6600 16%, #ff6600 20%, #ff7f2a 21%, #ff7f2a 30%, #ff6600 31%, #ff6600 35%, #ff7f2a 36%, #ff7f2a 45%, #ff6600 46%, #ff6600 49%, transparent 50%, transparent)`,
          backgroundSize: "100px 50px",
          backgroundPosition: `${bgPosition}px ${bgPosition}px`,
        }}
      >
        {/* Header section with super animated entrance */}
        <div className="pt-6 pb-2 px-4 overflow-hidden">
          <h1 className="text-black text-8xl font-bold relative">
            <div className="flex items-end">
              {titleLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transform ${
                    titleAnimated
                      ? "animate-letter-in"
                      : "translate-y-full opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textShadow: titleAnimated
                      ? "0 4px 0 rgba(0, 0, 0, 0.3)"
                      : "none",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div
              className={`h-2 bg-black mt-2 transform origin-left ${
                titleAnimated ? "animate-line-grow" : "scale-x-0"
              }`}
            ></div>
          </h1>
        </div>

        {/* Marquee scrolling container with hover effect */}
        <div
          className="flex-1 overflow-hidden"
          ref={scrollContainerRef}
          onMouseEnter={() =>
            scrollContainerRef.current &&
            (scrollContainerRef.current.style.animationPlayState = "paused")
          }
          onMouseLeave={() =>
            scrollContainerRef.current &&
            (scrollContainerRef.current.style.animationPlayState = "running")
          }
        >
          <div className="flex flex-row p-2 gap-4 h-full" ref={contentRef}>
            {/* First set of images with hover effects and animations */}
            {[myImage1, myImage, myImage2, myImage1, myImage, myImage2].map(
              (img, index) => (
                <div
                  key={index}
                  className={`${
                    index === 1 || index === 4 ? "w-144" : "w-96"
                  } bg-gray-200 flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${
                      0.3 + index * 0.1
                    }s, transform 0.5s ease ${0.3 + index * 0.1}s`,
                  }}
                >
                  <div className="relative w-full h-full group">
                    <img
                      src={img}
                      alt={
                        index % 3 === 0
                          ? "Certificate of Recognition for FULL STACK BU"
                          : index % 3 === 1
                          ? "Team photo with award recipients"
                          : "Best Performer SCSET Bennett University Trophy"
                      }
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white text-lg font-medium p-4">
                        {index % 3 === 0
                          ? "Certificate of Recognition"
                          : index % 3 === 1
                          ? "Team Achievement Award"
                          : "Best Performer Trophy"}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom caption bar with subtler animated elements */}
        <div
          className="p-4 flex justify-between items-center bg-black/10 backdrop-blur-sm"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease 0.7s, transform 0.5s ease 0.7s",
          }}
        >
          <div className="text-2xl font-bold text-black">2024</div>
          <div className="text-xl font-medium text-center max-w-md">
            The core team of 2024 receiving the award for
            <span className="font-bold text-white bg-black px-2 py-1 mx-1 rounded">
              "The Most Contributing to the Community"
            </span>
          </div>
          <div className="w-8"></div> {/* Empty div for flex spacing */}
        </div>
      </div>
    </div>
  );
};

// Add custom animation keyframes for the super animated title
const styles = `
@keyframes letter-in {
  0% {
    transform: translateY(100%) rotate(25deg);
    opacity: 0;
  }
  30% {
    transform: translateY(-20%) rotate(-15deg);
    opacity: 1;
  }
  50% {
    transform: translateY(10%) rotate(5deg);
  }
  70% {
    transform: translateY(-5%) rotate(-2deg);
  }
  100% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
}

@keyframes line-grow {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  60% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

.animate-letter-in {
  animation: letter-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  display: inline-block;
}

.animate-line-grow {
  animation: line-grow 1.5s ease forwards;
  animation-delay: 0.7s;
}
`;

// Add the styles to the document
const StyleSheet = () => {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  return null;
};

const EnhancedAwardsComponent = () => (
  <>
    <StyleSheet />
    <AwardsComponent />
  </>
);

export default EnhancedAwardsComponent;
