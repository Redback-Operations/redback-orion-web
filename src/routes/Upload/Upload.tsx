import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import uploadStyles from './UploadStyle';

const Upload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
        setMessage(null);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch('http://localhost:3001/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    setMessage('File uploaded successfully');
                } else {
                    setMessage('Failed to upload file');
                }
            } catch (error) {
                setMessage('Failed to upload file');
            }
        }
    };

    return (
        <div style={uploadStyles.container}>
            <header style={uploadStyles.header}>
                <img src="/logo2.svg" alt="Logo" style={uploadStyles.logoImg} />
                <h1 style={uploadStyles.headerText}>File Upload</h1>
                <div style={uploadStyles.headerUnderline}></div>
            </header>
            <div style={uploadStyles.content}>
                <div style={uploadStyles.uploadSection}>
                    <img src="/upload.jpg" alt="Upload" style={uploadStyles.uploadImage} />
                    <input type="file" onChange={handleFileChange} style={uploadStyles.fileInput} />
                    <button onClick={handleUpload} style={uploadStyles.uploadButton}>
                        <FontAwesomeIcon icon={faUpload} /> Upload
                    </button>
                    {preview && <img src={preview} alt="Preview" style={uploadStyles.preview} />}
                    {selectedFile && selectedFile.type === 'application/pdf' && <p>Selected PDF: {selectedFile.name}</p>}
                    {message && <p style={uploadStyles.message}>{message}</p>}
                </div>
            </div>
            <footer style={uploadStyles.footer}>
                <p>Uplaod Page ***Player Tracking***</p>
            </footer>
        </div>
    );
};

export default Upload;

//Refernce of the image used in file upload page
//https://cdn.pixabay.com/photo/2012/04/02/17/46/upload-25068_1280.png