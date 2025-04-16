import React from "react";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">LedgerEDU</h1>
      <p className="text-lg">Welcome to your Higher Ed Budgeting Software MVP.</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">📘 Chart of Accounts Module</h2>
        <p className="text-sm text-gray-700">View and manage your fund-org-account-program structure.</p>
        <div className="mt-4 bg-white p-4 rounded shadow">
          <table className="table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="text-left border-b pb-2">Fund</th>
                <th className="text-left border-b pb-2">Org</th>
                <th className="text-left border-b pb-2">Account</th>
                <th className="text-left border-b pb-2">Program</th>
                <th className="text-left border-b pb-2">Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1000</td>
                <td className="py-2">200</td>
                <td className="py-2">50000</td>
                <td className="py-2">01</td>
                <td className="py-2">Instructional Salaries</td>
              </tr>
              <tr>
                <td className="py-2">1000</td>
                <td className="py-2">201</td>
                <td className="py-2">51000</td>
                <td className="py-2">01</td>
                <td className="py-2">Support Staff</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;