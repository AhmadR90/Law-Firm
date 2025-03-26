export default function CaseDashboard() {
    // Sample data
    const caseStats = {
      total: 10,
      won: 4,
      pending: 3,
      lost: 3,
    };
  
    const recentCases = [
      { id: 1, name: "Case A", status: "Running", client: "John Doe" },
      { id: 2, name: "Case B", status: "Running", client: "Jane Smith" },
      { id: 3, name: "Case C", status: "Running", client: "Robert Brown" },
    ];
  
    return (
      <div className="p-6 bg-gray-700 min-h-screen">
        {/* Case Stats Section */}
        <h2 className="text-2xl font-bold text-white mb-4">Overall Case Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Cases" value={caseStats.total} color="bg-green-500" />
          <StatCard title="Cases Won" value={caseStats.won} color="bg-blue-500" />
          <StatCard title="Pending Cases" value={caseStats.pending} color="bg-yellow-500" />
          <StatCard title="Lost Cases" value={caseStats.lost} color="bg-red-500" />
        </div>
  
        {/* Recent Cases Section */}
        <h3 className="text-white font-semibold mt-6 mb-2 text-2xl">Recent Cases</h3>
        <div className="bg-gray-900 text-amber-50 shadow-md rounded-lg p-4">
          {recentCases.length > 0 ? (
            <ul className="space-y-2">
              {recentCases.map((caseItem) => (
                <li key={caseItem.id} className="p-2 border-b last:border-none">
                  <span className="font-medium">{caseItem.name}</span> - {caseItem.client} ({caseItem.status})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No running cases available.</p>
          )}
        </div>
      </div>
    );
  }
  
  // Reusable Stat Card Component
  function StatCard({ title, value, color }) {
    return (
      <div className={`p-4 ${color} text-white text-center rounded-lg shadow-md`}>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  