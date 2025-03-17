import React, { useState } from "react";

function UploadAssignment() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Assignment</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 w-full rounded"
        />
        {file && <p className="mt-2 text-sm text-gray-600">Selected: {file.name}</p>}

        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
        >
          Upload Assignment
        </button>

        {file && (
          <div className="mt-6">
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
            >
              Generate OCR Text
            </button>
            <button
              className="mt-2 w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded transition"
            >
              Download OCR PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadAssignment;
