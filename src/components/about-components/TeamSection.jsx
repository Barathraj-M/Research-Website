import React from 'react';

const teamMembers = [
  {
    name: 'Avinesh M R',
    role: 'Frontend Developer',
    image: '/team/avinesh.jpg',
    description: 'Expert in React, Tailwind, and UI/UX design.',
  },
  {
    name: 'John Doe',
    role: 'Backend Developer',
    image: '/team/john.jpg',
    description: 'Specialist in Node.js, Firebase, and database design.',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    image: '/team/jane.jpg',
    description: 'Designs user-friendly and accessible interfaces.',
  },
  {
    name: 'Sarah Lee',
    role: 'Project Manager',
    image: '/team/sarah.jpg',
    description: 'Coordinates the team and ensures timely delivery.',
  },
  {
    name: 'Michael Brown',
    role: 'QA Engineer',
    image: '/team/michael.jpg',
    description: 'Handles testing, automation, and bug tracking.',
  },
  {
    name: 'Emily White',
    role: 'Marketing Lead',
    image: '/team/emily.jpg',
    description: 'Drives branding, strategy, and growth.',
  },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">Creative minds behind our success</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
                <h4 className="text-xl font-bold mb-1">{member.role}</h4>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
