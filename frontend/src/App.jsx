import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {
  FaDocker,
  FaJenkins,
  FaGithub,
  FaDatabase,
  FaServer
} from "react-icons/fa";

import {
  SiKubernetes,
  SiGrafana,
  SiPrometheus
} from "react-icons/si";

function App() {

  const [backend, setBackend] = useState({});

  useEffect(() => {
    axios
      .get("http://49.50.92.84:5000")
      .then((res) => {
        setBackend(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">

      <section className="hero">
        <h1>E-Commerce DevOps Platform</h1>
        <p>
          Production Ready CI/CD • Kubernetes • Monitoring • Observability
        </p>
        <p className="hero-desc">
          A complete DevOps implementation demonstrating CI/CD automation,
          containerization, Kubernetes orchestration, monitoring, alerting,
          and production deployment practices.
        </p>

        <a
          href="https://github.com/2121-shivi/ecommerce-devops-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        > 
          View GitHub Repository
        </a>
      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>4</h2>
          <span>Pods Running</span>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <span>K8s Nodes</span>
        </div>

        <div className="stat-card">
          <h2>14</h2>
          <span>Services</span>
        </div>

        <div className="stat-card">
          <h2>99.9%</h2>
          <span>Availability</span>
        </div>

      </section>

      <section className="tech-stack">

        <h2>Technology Stack</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <SiKubernetes />
            <p>Kubernetes</p>
          </div>

          <div className="tech-card">
            <FaDocker />
            <p>Docker</p>
          </div>

          <div className="tech-card">
            <FaJenkins />
            <p>Jenkins</p>
          </div>

          <div className="tech-card">
            <SiPrometheus />
            <p>Prometheus</p>
          </div>

          <div className="tech-card">
            <SiGrafana />
            <p>Grafana</p>
          </div>

          <div className="tech-card">
            <FaDatabase />
            <p>MySQL</p>
          </div>
          <div className="tech-card">
            <FaGithub />
            <p>GitHub</p>
          </div>

          <div className="tech-card">
            <FaServer />
            <p>Backend API</p>
          </div>
        </div>

      </section>

      <section className="architecture">

        <h2>Architecture Diagram</h2>

        <div className="architecture-box">

          <div className="arch-step">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <FaJenkins />
            <span>Jenkins</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <FaDocker />
            <span>Docker</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <SiKubernetes />
            <span>Kubernetes</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <FaDatabase />
            <span>MySQL</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <SiPrometheus />
            <span>Prometheus</span>
          </div>

          <span>➜</span>

          <div className="arch-step">
            <SiGrafana />
            <span>Grafana</span>
          </div>

       </div>

      </section>

      <section className="backend-status">

       <div className="status-box">

        <h2>Backend Health Status</h2>

        <p>
          <strong>Application:</strong>
          {" "}
          {backend.application || "Loading..."}
        </p>

        <p>
          <strong>Status:</strong>
          {" "}
          <span style={{ color: "#00ff88" }}>
            {backend.status || "Loading..."}
          </span>
         </p>

         <p>
           <strong>Version:</strong>
           {" "}
           {backend.version || "Loading..."}
         </p>

        </div>

       </section>
       <section className="screenshots">
        <h2>Monitoring Screenshots</h2>

        <div className="gallery">
  
        <div className="image-card">
         <a href="/screenshots/grafana-dashboard.jpg" target="_blank">
          <img
            src="/screenshots/grafana-dashboard.jpg"
            alt="Grafana Dashboard"
           />
          </a>
         <h3>Grafana Dashboard</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/prometheus.jpg" target="_blank">
          <img
            src="/screenshots/prometheus.jpg"
            alt="Prometheus Targets"
           />
          </a>
         <h3>Prometheus Targets</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/jenkins.jpg" target="_blank">
          <img
            src="/screenshots/jenkins.jpg"
            alt="Jenkins Pipeline"
           />
          </a>
         <h3>Jenkins CI/CD Pipeline</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/kubernetes.jpg" target="_blank">
          <img
            src="/screenshots/kubernetes.jpg"
            alt="Kubernetes Cluster"
           />
          </a>
         <h3>Kubernetes Cluster</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/backend-alert.jpg" target="_blank">
          <img
            src="/screenshots/backend-alert.jpg"
            alt="Backend Down Alert"
           />
          </a>
         <h3>Backend Down Alert</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/mysql-alert.jpg" target="_blank">
          <img
            src="/screenshots/mysql-alert.jpg"
            alt="MySQL Down Alert"
           />
          </a>
         <h3>MySQL Down Alert</h3>
        </div>

        <div className="image-card">
         <a href="/screenshots/cpu-alert.jpg" target="_blank">
          <img
            src="/screenshots/cpu-alert.jpg"
            alt="High CPU Alert"
           />
          </a>
         <h3>High CPU Alert</h3>
        </div>

       </div>
      </section>

      <footer>
       Powered by Kubernetes & Docker.
      </footer>

     </div>
);
}

export default App;
