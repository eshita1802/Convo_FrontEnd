import React, { useState } from 'react';
import './Upload.css'; // Import the stylesheet

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCsvData] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview,setshowPreview]=useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedFile(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setCsvData(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    setSelectedFile(null);
    setCsvData(null);
    setshowPreview(false);
    console.log('Uploading CSV data:', csvData);
  };

  const handlePreview = () => {
    // Implement your preview logic here
    console.log('Previewing CSV data:', csvData);
    setPreviewData(csvData);
    setshowPreview(!showPreview);
  };

  return (
    <div className="upload-container">
      <input
        id="upload-input" // Add an id attribute
        className="upload-input"
        type="file"
        onChange={handleFileChange}
        accept=".csv"
      />
      <label htmlFor="upload-input" className="upload-label">
        Select CSV File
      </label>
      {selectedFile && <p>{selectedFile}</p>}
      <div className="button-container">
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handlePreview}>{showPreview?'Hide Preview':'Show Preview'}</button>
      </div>
      {/* {csvData && (
        <div className="textarea-container">
          <h2>Uploaded CSV Data:</h2>
          <textarea
            value={csvData}
            readOnly
            placeholder="No CSV data uploaded"
          />
        </div>
      )} */}
      {showPreview && (
        <div className="textarea-container">
           {csvData?<h2>Preview Data:</h2>:<h2>You have not selected a file</h2>}

          <div className="textarea-container">
          
          <textarea
            value={previewData}
            readOnly
         />
        </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
