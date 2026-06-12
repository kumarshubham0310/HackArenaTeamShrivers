import React, { useState } from 'react';

export default function CitizenView() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleReport = () => {
    setLoading(true);
    setResult(null);

    // Simulate AI categorization buffer
    setTimeout(() => {
      setLoading(false);
      setResult({
        category: "Infrastructure",
        action: "Urgent repair required for road surface."
      });
    }, 3000);
  };

  return (
    <div className="citizen-page">
      <h1>Report a Problem</h1>
      <input type="file" className="file-input" />
      <button className="report-btn" onClick={handleReport}>Add Report</button>

      {loading && (
        <div className="ai-buffer-box">
          <div className="spinner"></div>
          <p>AI is categorizing your issue...</p>
        </div>
      )}

      {result && (
        <div className="ai-result-box">
          <h3>Category: {result.category}</h3>
          <p><strong>Action Needed:</strong> {result.action}</p>
        </div>
      )}
    </div>
  );
}