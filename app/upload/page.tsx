'use client';

import { useState } from 'react';
import { upload } from '@vercel/blob/client';
import { Card, CardContent } from "@/components/ui/card";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const blob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });
      setUploadedUrl(blob.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Upload File</h2>
        <div className="space-y-4">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
          <button 
            onClick={handleUpload} 
            disabled={!file || uploading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          {uploadedUrl && (
            <div className="mt-4">
              <p>Uploaded file:</p>
              <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {uploadedUrl}
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}