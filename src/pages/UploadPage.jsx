import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import "../dist/css/upload.css";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Simpan file ke localStorage dalam format base64
      const reader = new FileReader();
      reader.onload = () => {
        const base64File = reader.result;
        localStorage.setItem("uploadedFile", base64File);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    if (!/\.(xlsx|xls)$/i.test(file.name)) {
      alert("Please upload a valid Excel file (.xlsx or .xls)");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Kirim file ke backend untuk prediksi
      const response = await axios.post("http://110.239.93.223:5002/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Simpan data prediksi ke localStorage
      localStorage.setItem("predictionData", JSON.stringify(response.data));

      // Redirect ke halaman visualisasi
      navigate("/visualization");
    } catch (error) {
      console.error("Error during file upload:", error);
      setErrorMessage("Failed to upload file. Please ensure the file format is correct and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload w-100 min-vh-100 d-flex align-items-center">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="gradient-text">
              Visualizations <br /> and Data Prediction
            </h1>
            <p className="mt-2 mb-4">
              Easily View Data Visualization and Predictions in Just Seconds
            </p>
            <div className="d-flex justify-content-center mt-4">
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-input"
              />
              <Button
                className="btn-custom me-5"
                onClick={() => document.getElementById("file-input").click()}
              >
                Select Excel
              </Button>
              <Button className="btn-custom ms-5">Template</Button>
            </div>
            <Button
              className="btn-custom mt-4"
              onClick={handleUpload}
              disabled={!file || isLoading}
            >
              {isLoading ? <Spinner animation="border" size="sm" /> : "Upload and Process"}
            </Button>
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
            <p className="mt-5 instruction-text">
              The first way is to download the template that has been provided, 
              then fill the template with your data. After that, you upload the 
              template file into the excel button.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UploadPage;
