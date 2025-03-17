  import React from "react";
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
  import { CheckCircleIcon, CloudArrowUpIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
  import { useNavigate } from "react-router-dom"; 

  const assignments = [
    {
      title: "Mathematics Assignment 1",
      subject: "Mathematics",
      score: 85,
      feedback: "Good understanding of calculus concepts",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      dueDate: "3/1/2024",
    },
    {
      title: "Physics Lab Report",
      subject: "Physics",
      score: 72,
      feedback: "Needs more detailed experimental analysis",
      status: "Needs Review",
      statusColor: "bg-yellow-100 text-yellow-600",
      dueDate: "3/5/2024",
    },
    {
      title: "Chemistry Assignment 3",
      subject: "Chemistry",
      score: 65,
      feedback: "",
      status: "Pending",
      statusColor: "bg-blue-100 text-blue-600",
      dueDate: "3/10/2024",
    },
  ];

  const progressData = [
    { name: "Jan", score: 75 },
    { name: "Feb", score: 80 },
    { name: "Mar", score: 78 },
    { name: "Apr", score: 82 },
    { name: "May", score: 85 },
  ];

  const StudentDashboard = () => {
    const navigate = useNavigate(); 
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-500">Track your progress and assignments</p>
          </div>
          {/* <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            <CloudArrowUpIcon className="w-6 h-6 text-gray-500" />
            Upload Assignment
          </button> */}
          {/* Upload Assignment Button */}
          <button
            onClick={() => navigate("/upload-assignment")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            <CloudArrowUpIcon className="w-6 h-6 text-gray-500" />
            Upload Assignment
          </button>
        </div>

        {/* Assignments Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Assignments</h2>
            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.subject}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${assignment.statusColor}`}>
                      {assignment.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium">Score</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${assignment.score}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-semibold">Feedback:</span> {assignment.feedback}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">📅 Due: {assignment.dueDate}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Trend Graph */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Performance Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Subject Progress</h2>
          <div className="space-y-4">
            {[
              {
                subject: "Mathematics",
                score: 85,
                areas: ["Complex Integration", "Differential Equations"],
                resources: [
                  { title: "Khan Academy - Calculus", link: "#" },
                  { title: "MIT OpenCourseWare - Advanced Math", link: "#" },
                ],
              },
              {
                subject: "Physics",
                score: 72,
                areas: ["Quantum Mechanics", "Electromagnetism"],
                resources: [
                  { title: "Physics Lab Techniques", link: "#" },
                  { title: "Video: Understanding Wave Functions", link: "#" },
                ],
              },
              {
                subject: "Chemistry",
                score: 65,
                areas: ["Organic Reactions", "Chemical Equilibrium"],
                resources: [
                  { title: "Chemistry Lab Safety Guide", link: "#" },
                  { title: "Interactive Periodic Table", link: "#" },
                ],
              },
            ].map((subject, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">{subject.subject}</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: `${subject.score}%` }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Areas to Improve:</span>
                  <ul className="list-disc list-inside text-sm">
                    {subject.areas.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Recommended Resources:</span>
                  <ul className="list-disc list-inside text-sm">
                    {subject.resources.map((res, i) => (
                      <li key={i}>
                        <a href={res.link} className="text-blue-600 hover:underline">
                          {res.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default StudentDashboard;

//  import React from "react";
//   import { useNavigate } from "react-router-dom";   Import useNavigate
//   import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
//   import { CheckCircleIcon, CloudArrowUpIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

//   const assignments = [
//     {
//       title: "Mathematics Assignment 1",
//       subject: "Mathematics",
//       score: 85,
//       feedback: "Good understanding of calculus concepts",
//       status: "Completed",
//       statusColor: "bg-green-100 text-green-600",
//       dueDate: "3/1/2024",
//     },
//     {
//       title: "Physics Lab Report",
//       subject: "Physics",
//       score: 72,
//       feedback: "Needs more detailed experimental analysis",
//       status: "Needs Review",
//       statusColor: "bg-yellow-100 text-yellow-600",
//       dueDate: "3/5/2024",
//     },
//     {
//       title: "Chemistry Assignment 3",
//       subject: "Chemistry",
//       score: 65,
//       feedback: "",
//       status: "Pending",
//       statusColor: "bg-blue-100 text-blue-600",
//       dueDate: "3/10/2024",
//     },
//   ];

//   const progressData = [
//     { name: "Jan", score: 75 },
//     { name: "Feb", score: 80 },
//     { name: "Mar", score: 78 },
//     { name: "Apr", score: 82 },
//     { name: "May", score: 85 },
//   ];

//   const StudentDashboard = () => {
//     const navigate = useNavigate();   Initialize useNavigate for navigation

//     return (
//       <div className="min-h-screen bg-gray-100 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
//             <p className="text-gray-500">Track your progress and assignments</p>
//           </div>
//           {/* Upload Assignment Button */}
//           <button
//             onClick={() => navigate("/upload-assignment")}   Navigate to upload-assignment
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             <CloudArrowUpIcon className="w-6 h-6" />
//             Upload Assignment
//           </button>
//         </div>

//         {/* Assignments Section */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Assignments</h2>
//             <div className="space-y-4">
//               {assignments.map((assignment, index) => (
//                 <div key={index} className="bg-white p-4 rounded-xl shadow">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="font-semibold">{assignment.title}</h3>
//                       <p className="text-sm text-gray-500">{assignment.subject}</p>
//                     </div>
//                     <span className={`px-3 py-1 text-sm font-medium rounded-full ${assignment.statusColor}`}>
//                       {assignment.status}
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <p className="text-sm font-medium">Score</p>
//                     <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
//                       <div className="h-2 rounded-full bg-blue-600" style={{ width: `${assignment.score}%` }}></div>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       <span className="font-semibold">Feedback:</span> {assignment.feedback}
//                     </p>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">📅 Due: {assignment.dueDate}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Performance Trend Graph */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold text-gray-900 mb-3">Performance Trend</h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={progressData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default StudentDashboard;
