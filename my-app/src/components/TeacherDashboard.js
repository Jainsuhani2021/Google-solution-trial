// import React, { useState } from "react";

// const TeacherDashboard = () => {
//   const [reviews, setReviews] = useState([
//     { student: "John Doe", assignment: "Essay 1", aiScore: "80%", teacherScore: 85, status: "✔️" },
//     { student: "Jane Smith", assignment: "Essay 1", aiScore: "92%", teacherScore: 92, status: "✔️" },
//     { student: "Alice Johnson", assignment: "Essay 1", aiScore: "75%", teacherScore: null, status: "❌" },
//   ]);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//      {/*} <aside className="w-1/4 min-h-screen bg-gray-100 p-6">
//         <h2 className="text-2xl font-bold">Learning Harbor</h2>
//         <nav className="mt-6">
//           <ul>
//             <li className="py-2 flex items-center text-gray-600">
//               📖 Student Dashboard
//             </li>
//             <li className="py-2 flex items-center bg-blue-600 text-white rounded-md px-3">
//               👤 Teacher Dashboard
//             </li>
//           </ul>
//         </nav>
//       </aside>*/}

//       {/* Main Content */}
//       <div className="w-3/4 p-8">
//         <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
//         <p className="text-gray-600">Review and grade student assignments</p>

//         {/* Assignment Reviews Section */}
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">Assignment Reviews</h2>
//           <p className="text-gray-500">Review AI-graded assignments and provide feedback</p>
//           <table className="w-full mt-4 border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Student</th>
//                 <th className="border p-2">Assignment</th>
//                 <th className="border p-2">AI Score</th>
//                 <th className="border p-2">Teacher Score</th>
//                 <th className="border p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review, index) => (
//                 <tr key={index} className="border">
//                   <td className="border p-2">{review.student}</td>
//                   <td className="border p-2">{review.assignment}</td>
//                   <td className="border p-2">{review.aiScore}</td>
//                   <td className="border p-2">
//                     {review.teacherScore !== null ? (
//                       <input
//                         type="number"
//                         className="border p-1 rounded w-16 text-center"
//                         value={review.teacherScore}
//                         readOnly
//                       />
//                     ) : (
//                       <button className="text-blue-500 underline">Score</button>
//                     )}
//                   </td>
//                   <td className="border p-2 text-center">
//                     {review.status === "✔️" ? "✅" : "❌"}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Class Performance and AI Feedback Section */}
//         <div className="grid grid-cols-2 gap-6 mt-6">
//           {/* Class Performance */}
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold">Class Performance</h2>
//             <p className="text-gray-500">Performance chart will be displayed here</p>
//           </div>

//           {/* Recent AI Feedback */}
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold">Recent AI Feedback</h2>
//             <h3 className="text-gray-700 font-semibold">Common Areas for Improvement</h3>
//             <ul className="list-disc pl-6 mt-2 text-gray-600">
//               <li>Thesis statement clarity</li>
//               <li>Supporting evidence usage</li>
//               <li>Conclusion structure</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;

import React, { useState, useEffect, useRef } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TeacherDashboard = () => {
  const [reviews, setReviews] = useState([
    { id: 1, student: "John Doe", assignment: "Essay 1", aiScore: "80%", teacherScore: 85, status: "approved" },
    { id: 2, student: "Jane Smith", assignment: "Essay 1", aiScore: "92%", teacherScore: 92, status: "approved" },
    { id: 3, student: "Alice Johnson", assignment: "Essay 1", aiScore: "75%", teacherScore: null, status: "pending" },
  ]);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup chart on component unmount
      }
    };
  }, []);

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Class Average Score",
        data: [78, 82, 85, 88],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
      <p className="text-gray-600">Review and grade student assignments</p>

      {/* Assignment Reviews */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Assignment Reviews</h2>
        <p className="text-gray-500 mb-4">Review AI-graded assignments and provide feedback</p>
        <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 font-medium">
              <th className="p-3 border">Student</th>
              <th className="p-3 border">Assignment</th>
              <th className="p-3 border">AI Score</th>
              <th className="p-3 border">Teacher Score</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-t text-gray-700">
                <td className="p-3 border">{review.student}</td>
                <td className="p-3 border">{review.assignment}</td>
                <td className="p-3 border">{review.aiScore}</td>
                <td className="p-3 border">
                  {review.teacherScore !== null ? (
                    <input
                      type="text"
                      className="w-16 px-2 py-1 border rounded-md text-center"
                      defaultValue={review.teacherScore}
                    />
                  ) : (
                    <a href="#" className="text-blue-500 hover:underline">Score</a>
                  )}
                </td>
                <td className="p-3 border text-center">
                  {review.status === "approved" ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Chart & AI Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Class Performance */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Class Performance</h2>
          <p className="text-gray-500 mb-4">Performance chart will be displayed here</p>
          <div className="h-52">
            <Line data={data} ref={chartRef} />
          </div>
        </div>

        {/* Recent AI Feedback */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent AI Feedback</h2>
          <p className="text-gray-500">Common Areas for Improvement</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Thesis statement clarity</li>
            <li>Supporting evidence usage</li>
            <li>Conclusion structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
