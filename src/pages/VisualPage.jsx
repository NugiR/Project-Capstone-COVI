import React, { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "chart.js/auto";
import "../dist/css/visual.css";

const VisualPage = () => {
  const [chartData, setChartData] = useState(null);
  const [monthlySalesData, setMonthlySalesData] = useState(null);
  const [categorySalesData, setCategorySalesData] = useState(null);

  useEffect(() => {
    // Ambil data prediksi dari localStorage
    const predictionData = JSON.parse(localStorage.getItem("predictionData"));

    if (predictionData) {
      // Pisahkan data tanggal, penjualan asli, dan prediksi
      const labels = predictionData.map((item) => item.Tanggal);
      const actualSales = predictionData.map((item) => item["Total Harga Produk"] || null);
      const predictedSales = predictionData.map((item) => item["Prediksi Penjualan"] || null);

      // Set data untuk grafik prediksi
      setChartData({
        labels,
        datasets: [
          {
            label: "Historical Sales",
            data: actualSales,
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            fill: true,
          },
          {
            label: "Predicted Sales",
            data: predictedSales,
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            fill: true,
          },
        ],
      });
    }
  }, []);

  useEffect(() => {
    const fetchMonthlySales = async () => {
      try {
        const base64File = localStorage.getItem("uploadedFile");
        if (!base64File) throw new Error("File tidak ditemukan di localStorage.");

        const byteString = atob(base64File.split(",")[1]);
        const mimeType = base64File.split(",")[0].split(":" )[1].split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i);
        }
        const fileBlob = new Blob([arrayBuffer], { type: mimeType });

        const formData = new FormData();
        formData.append("file", fileBlob, "uploaded_file.xlsx");

        const response = await axios.post("http://110.239.93.223:5002/monthly_sales", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setMonthlySalesData(response.data);
      } catch (error) {
        console.error("Error fetching monthly sales:", error.response?.data || error.message);
      }
    };

    const fetchCategorySales = async () => {
      try {
        const base64File = localStorage.getItem("uploadedFile");
        if (!base64File) throw new Error("File tidak ditemukan di localStorage.");

        const byteString = atob(base64File.split(",")[1]);
        const mimeType = base64File.split(",")[0].split(":" )[1].split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i);
        }
        const fileBlob = new Blob([arrayBuffer], { type: mimeType });

        const formData = new FormData();
        formData.append("file", fileBlob, "uploaded_file.xlsx");

        const response = await axios.post("http://110.239.93.223:5002/sales_by_category", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Category Sales Data:", response.data); // Debugging log
        setCategorySalesData(response.data);
      } catch (error) {
        console.error("Error fetching category sales:", error.response?.data || error.message);
      }
    };

    fetchMonthlySales();
    fetchCategorySales();
  }, []);

  const renderChart = (data, title) => (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <Line data={data} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
    </div>
  );

  const renderPieChart = (data, title) => (
    <div className="chart-container pie-chart">
      <h3 className="chart-title">{title}</h3>
      <Pie data={data} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
    </div>
  );

  if (!chartData || !monthlySalesData || !categorySalesData) {
    return <div>Loading charts...</div>;
  }

  // Normalisasi data kategori untuk menghindari duplikasi
  const normalizedCategoryData = categorySalesData.reduce((acc, item) => {
    const normalizedSKU = item["SKU Induk"].toLowerCase();
    if (!acc[normalizedSKU]) {
      acc[normalizedSKU] = item["Total Penjualan"];
    } else {
      acc[normalizedSKU] += item["Total Penjualan"];
    }
    return acc;
  }, {});

  const sortedCategoryData = Object.entries(normalizedCategoryData)
    .sort((a, b) => b[1] - a[1]);

  const top5CategoryData = sortedCategoryData.slice(0, 5);
  const totalTop5 = top5CategoryData.reduce((sum, item) => sum + item[1], 0);

  const categoryChartData = {
    labels: sortedCategoryData.map((item) => item[0]),
    datasets: [
      {
        label: "Sales by Category",
        data: sortedCategoryData.map((item) => item[1]),
        backgroundColor: [
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const top5CategoryChartData = {
    labels: top5CategoryData.map((item) => `${item[0]} (${((item[1] / totalTop5) * 100).toFixed(1)}%)`),
    datasets: [
      {
        label: "Top 5 Sales by Category",
        data: top5CategoryData.map((item) => item[1]),
        backgroundColor: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const monthlyChartData = {
    labels: monthlySalesData.map((item) => item.YearMonth),
    datasets: [
      {
        label: "Monthly Sales",
        data: monthlySalesData.map((item) => item["Total Harga Produk"]),
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fill: true,
      },
    ],
  };

  return (
    <Container className="visual-page-container">
      <h1 className="visual-page-header">Sales Visualization</h1>
      <Row>
        <Col md={6}>{renderChart(chartData, "Prediction Chart")}</Col>
        <Col md={6}>{renderChart(monthlyChartData, "Monthly Sales Chart")}</Col>
      </Row>
      <Row>
        <Col md={6} className="bar-chart">
          <div className="chart-container">
            <h3 className="chart-title">Sales by Category</h3>
            <Bar data={categoryChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </div>
        </Col>
        <Col md={6} className="pie-chart">
          {renderPieChart(top5CategoryChartData, "Top 5 Sales by Category")}
        </Col>
      </Row>
    </Container>
  );
};

export default VisualPage;
