import React, { useState } from "react";

const TeacherDashboard = () => {
  const [reviews, setReviews] = useState([
    { student: "John Doe", assignment: "Essay 1", aiScore: "80%", teacherScore: 85, status: "✔️" },
    { student: "Jane Smith", assignment: "Essay 1", aiScore: "92%", teacherScore: 92, status: "✔️" },
    { student: "Alice Johnson", assignment: "Essay 1", aiScore: "75%", teacherScore: null, status: "❌" },
  ]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold">Learning Harbor</h2>
        <nav className="mt-6">
          <ul>
            <li className="py-2 flex items-center text-gray-600">
              📖 Student Dashboard
            </li>
            <li className="py-2 flex items-center bg-blue-600 text-white rounded-md px-3">
              👤 Teacher Dashboard
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="text-gray-600">Review and grade student assignments</p>

        {/* Assignment Reviews Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Assignment Reviews</h2>
          <p className="text-gray-500">Review AI-graded assignments and provide feedback</p>
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Student</th>
                <th className="border p-2">Assignment</th>
                <th className="border p-2">AI Score</th>
                <th className="border p-2">Teacher Score</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{review.student}</td>
                  <td className="border p-2">{review.assignment}</td>
                  <td className="border p-2">{review.aiScore}</td>
                  <td className="border p-2">
                    {review.teacherScore !== null ? (
                      <input
                        type="number"
                        className="border p-1 rounded w-16 text-center"
                        value={review.teacherScore}
                        readOnly
                      />
                    ) : (
                      <button className="text-blue-500 underline">Score</button>
                    )}
                  </td>
                  <td className="border p-2 text-center">
                    {review.status === "✔️" ? "✅" : "❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Class Performance and AI Feedback Section */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Class Performance */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Class Performance</h2>
            <p className="text-gray-500">Performance chart will be displayed here</p>
          </div>

          {/* Recent AI Feedback */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Recent AI Feedback</h2>
            <h3 className="text-gray-700 font-semibold">Common Areas for Improvement</h3>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Thesis statement clarity</li>
              <li>Supporting evidence usage</li>
              <li>Conclusion structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
