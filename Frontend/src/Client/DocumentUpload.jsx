import { useState } from "react";

const DocumentUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    file: null,
  });

  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.type && formData.file) {
      const newDoc = {
        title: formData.title,
        type: formData.type,
        description: formData.description,
        fileName: formData.file.name,
      };
      setUploadedDocs([newDoc, ...uploadedDocs]);
      setFormData({ title: "", type: "", description: "", file: null });
      e.target.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-3xl bg-gray-950 border border-amber-500 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-amber-400 text-center mb-4">Upload Documents</h2>
        <p className="text-gray-400 text-center mb-6">Upload your legal documents securely.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Enter document title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring focus:ring-amber-500"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring focus:ring-amber-500"
            required
          >
            <option value="">Select Document Type</option>
            <option value="PDF">PDF</option>
            <option value="Word">Word</option>
            <option value="Image">Image</option>
          </select>

          <textarea
            name="description"
            placeholder="Enter document description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring focus:ring-amber-500"
          />

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-500 text-gray-900 p-3 rounded-lg font-bold hover:bg-amber-600 transition"
          >
            Upload Document
          </button>
        </form>
      </div>

      {/* Recently Uploaded Documents Section */}
      <div className="w-full max-w-3xl bg-gray-950 border border-amber-500 shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-xl font-semibold text-amber-400">Recently Uploaded Documents</h3>
        {uploadedDocs.length === 0 ? (
          <p className="text-gray-400">No documents uploaded yet.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {uploadedDocs.map((doc, index) => (
              <li key={index} className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg">
                <strong>{doc.title}</strong> ({doc.type}) - <span className="text-gray-400">{doc.fileName}</span>
                <p className="text-sm text-gray-500">{doc.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
