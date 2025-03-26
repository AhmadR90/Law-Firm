import React from "react";

const LawyerDetails = () => {
  const lawyers = [
    { id: 1, name: "John Doe", experience: "15 years", charge: "$500/hr", proficiency: "Corporate Law" },
    { id: 2, name: "Jane Smith", experience: "10 years", charge: "$400/hr", proficiency: "Criminal Law" },
    { id: 3, name: "Michael Johnson", experience: "8 years", charge: "$350/hr", proficiency: "Family Law" },
    { id: 4, name: "Sarah Lee", experience: "12 years", charge: "$450/hr", proficiency: "Civil Rights Law" },
  ];

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-amber-400 text-center mb-6">Supreme Court Lawyers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="bg-gray-950 border border-amber-500 rounded-lg shadow-lg p-6 text-white text-center">
            <h3 className="text-xl font-semibold text-amber-400">{lawyer.name}</h3>
            <p className="mt-2"><strong>Experience:</strong> {lawyer.experience}</p>
            <p className="mt-2"><strong>Charge Rate:</strong> {lawyer.charge}</p>
            <p className="mt-2"><strong>Proficiency:</strong> {lawyer.proficiency}</p>
            <button className="bg-amber-500 h-10 w-25 mt-1 rounded-2xl">Contact Me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerDetails;
