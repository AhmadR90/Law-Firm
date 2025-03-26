import { useState } from "react";

export default function ClientRequests() {
  // Sample client request data
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      caseType: "Divorce",
      details: "Need assistance with legal separation process.",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+9876543210",
      caseType: "Business Dispute",
      details: "Seeking legal support for a contract issue.",
      status: "pending",
    },
  ]);

  // Handle Accept or Reject actions
  const handleAction = (id, action) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  return (
    <div className="p-6 bg-gray-700 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-amber-50">Client Requests</h2>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-gray-900 text-white p-4 shadow-md rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold">{request.name}</h3>
            <p className="text-gray-300">{request.email} | {request.phone}</p>
            <p className="mt-2"><strong>Case Type:</strong> {request.caseType}</p>
            <p className="mt-1"><strong>Details:</strong> {request.details}</p>
            <div className="mt-4 flex gap-2">
              {request.status === "pending" ? (
                <>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    onClick={() => handleAction(request.id, "accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleAction(request.id, "rejected")}
                  >
                    Reject
                  </button>
                </>
              ) : (
                <p className={`text-lg font-bold ${request.status === "accepted" ? "text-green-600" : "text-red-600"}`}>
                  {request.status.toUpperCase()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
