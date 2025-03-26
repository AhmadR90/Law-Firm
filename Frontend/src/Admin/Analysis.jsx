import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const UserLawyerAnalysis = ({ userCount, lawyerCount }) => {
  const data = [
    { name: "Users", count: 34 },
    { name: "Lawyers", count: 12 },
  ];

  return (
    <div className="p-6 bg-gray-700 min-h-screen flex flex-col gap-6 items-center">
      {/* Summary Section */}
      <div className="flex gap-6">
        <div className="p-4 bg-blue-400 shadow-md rounded-lg text-center">
          <h3 className="text-lg font-semibold">Registered Users</h3>
          <p className="text-2xl font-bold text-blue-600">{userCount}</p>
        </div>
        <div className="p-4  shadow-md bg-red-400 rounded-lg text-center">
          <h3 className="text-lg  font-semibold">Registered Lawyers</h3>
          <p className="text-2xl font-bold text-green-600">{lawyerCount}</p>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-gray-900 shadow-md p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Registration Analysis</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" className="text-gray-300" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserLawyerAnalysis;