// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import TeacherDashboard from "./components/TeacherDashboard";

// function App() {
//   return (
//     <div>
//       <TeacherDashboard />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import TeacherDashboard from "./components/TeacherDashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
//         <Route path="/student-dashboard" element={<div>Student Dashboard (Coming Soon)</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import TeacherDashboard from "./components/TeacherDashboard";
// import StudentDashboard from "./components/StudentDashboard"; // Importing the Student Dashboard

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
//         <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Updated here */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import UploadAssignment from "./components/UploadAssignment"; // Import the new Upload Assignment page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/upload-assignment" element={<UploadAssignment />} /> {/* Added new route */}
      </Routes>
    </Router>
  );
}

export default App;
