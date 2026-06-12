import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Initialize the AI with your key
const genAI = new GoogleGenerativeAI("AIzaSyD57Lmyz_YffjHGS6oqXiLYRqbCHnBj3A8");

// Helper function to convert the file to the format the AI needs
function fileToGenerativePart(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve({
      inlineData: {
        data: reader.result.split(",")[1],
        mimeType: file.type
      },
    });
    reader.readAsDataURL(file);
  });
}

// AI Analysis Logic
const analyzeProblem = async (imageFile, description) => {
 const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const imageParts = await fileToGenerativePart(imageFile);

  const result = await model.generateContent([
    `Analyze this road issue. Description: ${description}. 
     Return ONLY JSON (no markdown formatting): { "category": "String", "priority": "red", "area": "String", "count": Number }`,
    imageParts
  ]);

  const text = result.response.text();
  return JSON.parse(text);
};

export default function CitizenView() {
  const [isBuffering, setIsBuffering] = useState(false);
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleReport = async () => {
    if (!description || !selectedFile) {
      alert("Please enter a description and upload an image.");
      return;
    }
    
    setResult(null);
    setIsBuffering(true);

    try {
      const aiData = await analyzeProblem(selectedFile, description);
      setResult(aiData);
    } catch (error) {
      console.error("AI Analysis Error:", error);
      alert("Failed to analyze image. Please try again.");
    } finally {
      setIsBuffering(false);
    }
  };

  return (
    <div className="citizen-container">
      <h2>Report a Problem</h2>
      
      <div className="upload-area">
        <input 
          type="file" 
          onChange={(e) => setSelectedFile(e.target.files[0])} 
        />
        <p style={{ marginTop: '10px' }}>Upload an image of the issue</p>
      </div>

      <div className="description-area" style={{ marginBottom: '20px' }}>
        <textarea 
          placeholder="Describe the issue in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
      </div>

      <button 
        onClick={handleReport} 
        disabled={isBuffering}
        className="btn-submit"
      >
        {isBuffering ? "AI is Analyzing..." : "Add Problem"}
      </button>

      {isBuffering && (
        <div className="buffer-box">
          <p>Processing image and description via Jan Spandan AI...</p>
        </div>
      )}

      {result && !isBuffering && (
        <div className={`result-box priority-${result.priority}`}>
          <h3>Category: {result.category}</h3>
          <p><strong>Area:</strong> {result.area}</p>
          <p><strong>Estimated Impact:</strong> {result.count}</p>
        </div>
      )}
    </div>
  );
}