import { useEffect, useState } from "react";

const DocumentUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    file: null,
  });

  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser); // Check stored user data
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.id);
    }
  }, []);

  // Hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.type || !formData.file) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("type", formData.type);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("file", formData.file);
    formDataToSend.append("userId", userId);

    try {
      const response = await fetch(
        "http://localhost:5000/api/documents/upload",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUploadedDocs([data.newDocument, ...uploadedDocs]);
        setFormData({ title: "", type: "", description: "", file: null });
        e.target.reset();
        showToast("Document uploaded successfully!", "success");
      } else {
        showToast(data.message || "Upload failed", "error");
      }
    } catch (error) {
      console.error("Error uploading document:", error.message);
      showToast("Error uploading document. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-700 p-6">
      {/* Toast Notification */}
      {toast.show && (
        <div 
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          <span>{toast.message}</span>
          <button 
            onClick={() => setToast({ ...toast, show: false })} 
            className="ml-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      )}

      <div className="w-full max-w-3xl bg-gray-950 border border-amber-500 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-amber-400 text-center mb-4">
          Upload Documents
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Upload your legal documents securely.
        </p>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
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
            name="file"
            onChange={handleFileChange}
            className="w-full bg-gray-800 text-white border border-gray-700 p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-500 text-gray-900 p-3 rounded-lg font-bold hover:bg-amber-600 transition flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </>
            ) : (
              "Upload Document"
            )}
          </button>
        </form>
      </div>

      {/* Recently Uploaded Documents Section */}
      <div className="w-full max-w-3xl bg-gray-950 border border-amber-500 shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-xl font-semibold text-amber-400">
          Recently Uploaded Documents
        </h3>
        {uploadedDocs.length === 0 ? (
          <p className="text-gray-400">No documents uploaded yet.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {uploadedDocs.map((doc, index) => (
              <li
                key={index}
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg"
              >
                <strong>{doc.title}</strong> ({doc.type}) -{" "}
                <span className="text-gray-400">{doc.fileName}</span>
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