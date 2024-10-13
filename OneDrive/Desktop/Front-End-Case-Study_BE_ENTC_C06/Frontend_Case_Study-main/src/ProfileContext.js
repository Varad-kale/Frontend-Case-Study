// src/ProfileContext.js
import React, { createContext, useState } from 'react';

// Create Context
export const ProfileContext = createContext();

// Default profiles if localStorage is empty
const defaultProfiles = [
  {
    id: 1,
    name: "Ritesh Thombare",
    photo: "https://unsplash.com/photos/a-man-wearing-a-necklace-with-a-cross-on-it-nSBl2cfwnmE", // Placeholder image URL
    description: "Software Developer with over 5 years of experience in building web applications using modern technologies. Proficient in JavaScript, React, and Node.js. Passionate about creating efficient and user-friendly solutions.",
    address: "Pune",
    contact: "riteshthombare123@gmail.com",
    interests: ["Web Development", "Open Source", "AI"],
  },
  {
    id: 2,
    name: "Watson Smith",
    photo: "https://unsplash.com/photos/a-man-wearing-a-black-shirt-with-red-flowers-on-it-BU3CIOxsq0s",
    description: "Graphic Designer with a flair for creativity and a keen eye for detail. Specializes in branding, print design, and digital media. Dedicated to transforming ideas into visually stunning designs that engage and inspire.",
    address: "New York",
    contact: "watsonsmith@gmail.com",
    interests: ["Graphic Design", "Photography", "Travel"],
  },
  {
    id: 3,
    name: "Varad Kale",
    photo: "https://unsplash.com/photos/a-man-in-a-white-shirt-is-posing-for-a-picture-mRVP1c59wko",
    description: "Project Manager with 8 years of experience in leading cross-functional teams and delivering projects on time and within budget. Skilled in Agile methodologies and stakeholder management, with a strong focus on team collaboration.",
    address: "Nashik",
    contact: "varadkale1314@gmail.com",
    interests: ["Project Management","SDE 1"],
  },
  {
    id: 4,
    name: "Vikas Deshmukh",
    photo: "https://unsplash.com/photos/a-man-in-a-blue-shirt-and-a-white-hat-vv5mHNP7M9U",
    description: "Data Scientist passionate about transforming data into actionable insights. Experienced in machine learning, data analysis, and statistical modeling. Committed to leveraging data to solve complex business challenges.",
    address: "Aurangabad",
    contact: "vikasDeshmukh@gmail.com",
    interests: ["Data Analysis", "Machine Learning", "Statistics"],
  },
  {
    id: 5,
    name: "Etisha Deshpande",
    photo: "https://in.pinterest.com/pin/random-pic--577938564707963361/",
    description: "Full Stack Developer with a strong background in both front-end and back-end technologies. Adept at building scalable applications and proficient in frameworks like Angular, React, and Express.js.",
    address: "Mumbai",
    contact: "etisha123@gmail.com",
    interests: ["Cloud Computing", "SEO", "Content Creation"],
  },
  {
    id: 6,
    name: "Vaishnavi jadhav",
    photo: "https://i.pinimg.com/736x/c9/70/df/c970dfaf7eebcc5ac9ac13cec59dd259.jpg",
    description: "Hi, I'm Vaishnavi ! I’ve always been fascinated by how technology can change the world, and coding gives me the power to be part of that transformation. Whether I’m designing an interactive website or diving into a machine learning model, there's something thrilling about solving problems with code.",
    address: "Mumbai",
    contact: "vaishujadhav138174@gmail.com",
    interests: ["Full Stack Development", "APIs"],
    
  }
];

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      try {
        return JSON.parse(storedProfiles); // Parse only if valid JSON
      } catch (error) {
        console.error("Error parsing profiles from localStorage:", error);
        return defaultProfiles; // Use default profiles if parsing fails
      }
    }
    return defaultProfiles; // Return default profiles if no data in localStorage
  });

  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles)); // Update localStorage
  };

  const contextValue = {
    profiles,
    setProfiles,
    handleDelete
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
