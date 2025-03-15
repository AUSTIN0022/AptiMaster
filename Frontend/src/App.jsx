// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch list of previously uploaded files
  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/files');
      const data = await response.json();
      
      if (data.files) {
        setUploadedFiles(data.files);
      }
    } catch (err) {
      console.error('Failed to fetch uploaded files:', err);
    }
  };

  // Handle file selection from the local system
  const handleFileChange = (e) => {
    setError('');
    setFileContent('');
    setSelectedFile(null);
    
    const files = e.target.files;
    if (files.length > 0) {
      setFiles(Array.from(files));
    } else {
      setFiles([]);
    }
  };

  // Read the selected local file
  const readLocalFile = (file) => {
    setLoading(true);
    setError('');
    setSelectedFile(file);
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      setFileContent(e.target.result);
      setLoading(false);
    };
    
    reader.onerror = () => {
      setError('Error reading file');
      setLoading(false);
    };
    
    reader.readAsText(file);
  };

  // Read a previously uploaded file from the server
  const readUploadedFile = async (filename) => {
    setLoading(true);
    setError('');
    setSelectedFile({ name: filename });
    
    try {
      const response = await fetch(`http://localhost:5000/api/file/${filename}`);
      const data = await response.json();
      
      if (response.ok) {
        setFileContent(data.content);
      } else {
        setError(data.error || 'Failed to fetch file content');
        setFileContent('');
      }
    } catch (err) {
      setError('Error fetching file content');
      setFileContent('');
    } finally {
      setLoading(false);
    }
  };

  // Upload a file to the server
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        fetchUploadedFiles();
        return true;
      } else {
        setError(data.error || 'Failed to upload file');
        return false;
      }
    } catch (err) {
      setError('Error uploading file');
      return false;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">File Reader</h1>
      
      {/* Local File Selection */}
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-lg font-semibold mb-2">Open Local File</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="p-2 border rounded w-full"
        />
        
        {files.length > 0 && (
          <div className="mt-2">
            <h3 className="font-medium">Selected Files:</h3>
            <ul className="mt-1">
              {files.map((file, index) => (
                <li 
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                  onClick={() => readLocalFile(file)}
                >
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {files.length > 0 && (
          <button
            onClick={() => files.length > 0 && uploadFile(files[0])}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Upload Selected File
          </button>
        )}
      </div>
      
      {/* Previously Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-lg font-semibold mb-2">Previously Uploaded Files</h2>
          <ul>
            {uploadedFiles.map((filename, index) => (
              <li 
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                onClick={() => readUploadedFile(filename)}
              >
                {filename}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* File Content Display */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">
          {selectedFile ? `Content of ${selectedFile.name}` : 'Select a file to view content'}
        </h2>
        
        {loading && <p>Loading...</p>}
        
        {error && <p className="text-red-500">{error}</p>}
        
        {fileContent && !loading && (
          <pre className="bg-white p-4 rounded border overflow-auto max-h-96">
            {fileContent}
          </pre>
        )}
      </div>
    </div>
  );
}

export default App;