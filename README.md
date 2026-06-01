# E-Commerce DevOps Platform

A production-ready DevOps project demonstrating the complete software delivery lifecycle using modern cloud-native technologies.

This project showcases how an e-commerce application can be containerized, deployed, monitored, and automatically managed through a fully automated CI/CD pipeline. The platform integrates GitHub, Jenkins, Docker, Kubernetes, Prometheus, and Grafana to provide continuous integration, continuous deployment, monitoring, observability, and infrastructure automation.

---

## Overview

The E-Commerce DevOps Platform implements an end-to-end DevOps workflow.

Code changes pushed to GitHub automatically trigger Jenkins pipelines that build Docker images, push them to a registry, and deploy updated application versions to a Kubernetes cluster. Prometheus continuously monitors the infrastructure while Grafana provides visualization and alerting capabilities.

The project demonstrates real-world DevOps practices including automation, containerization, orchestration, monitoring, and infrastructure observability.

---

## Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins CI/CD Pipeline
    │
    ▼
Docker Build & Push
    │
    ▼
Kubernetes Cluster
    │
    ├── Frontend (React)
    ├── Backend (Node.js + Express)
    └── MySQL Database
    │
    ▼
Prometheus Monitoring
    │
    ▼
Grafana Dashboards & Alerts
```

---

## Tech Stack

| Layer | Technology |
|---------|------------|
| Frontend | React.js, Vite, Axios |
| Backend | Node.js, Express.js |
| Database | MySQL |
| CI/CD | Jenkins |
| Containerization | Docker |
| Orchestration | Kubernetes, Helm |
| Monitoring | Prometheus |
| Visualization | Grafana |
| Version Control | GitHub |

---

## Features

- Automated CI/CD Pipeline
- Dockerized Application Services
- Kubernetes Deployment
- React-Based Dashboard
- Backend API Integration
- MySQL Database Connectivity
- Prometheus Monitoring
- Grafana Dashboards
- Alert Management
- GitHub Webhook Integration
- Infrastructure Observability
- Production-Style DevOps Workflow

---

## CI/CD Pipeline

The Jenkins pipeline automates the complete deployment workflow:

1. Source code checkout from GitHub
2. Docker image build
3. Docker Hub authentication
4. Docker image push
5. Kubernetes deployment
6. Deployment verification

### Pipeline Stages

- Checkout SCM
- Build Docker Image
- Docker Login
- Push Docker Image
- Deploy to Kubernetes
- Post Actions

---

## Application Components

### Frontend Dashboard
The frontend is developed using React.js and Vite, providing a modern and responsive user interface for interacting with the e-commerce platform. It communicates with backend APIs to retrieve application data and display system information.

### Backend API
The backend is built using Node.js and Express.js. It handles business logic, API requests, database communication, and application services required by the frontend layer.

### Jenkins CI/CD Server
Jenkins automates the software delivery process by continuously integrating code changes, building Docker images, executing deployment pipelines, and updating Kubernetes workloads automatically.

### Prometheus Monitoring
Prometheus continuously collects metrics from Kubernetes nodes, pods, containers, and application services. It enables real-time monitoring and acts as the foundation for alert generation.

### Grafana Visualization
Grafana provides interactive dashboards and visual representations of infrastructure and application metrics collected by Prometheus. It enables performance analysis, observability, and operational monitoring.

### Kubernetes Infrastructure
Kubernetes orchestrates containerized workloads by managing deployments, scaling, service discovery, and self-healing capabilities across the cluster.

### MySQL Database
MySQL serves as the persistent data storage layer of the application, maintaining structured data and supporting backend operations.

---

## Kubernetes Resources

The application is deployed using Kubernetes Deployments and Services.

### Deployments

- Frontend Deployment
- Backend Deployment
- MySQL Deployment

### Services

- Frontend NodePort Service
- Backend ClusterIP Service
- MySQL ClusterIP Service

---

## Monitoring & Observability

Prometheus continuously collects metrics from:

- Kubernetes Nodes
- Kubernetes Pods
- Backend Services
- Containers
- Infrastructure Resources

Grafana visualizes these metrics through dashboards that provide insights into:

- Cluster Health
- Node Metrics
- Pod Status
- Resource Utilization
- Application Availability

---

## Alerting

The monitoring stack includes automated alerts for critical events:

- Backend Down Alert
- MySQL Down Alert
- High CPU Usage Alert

These alerts help identify failures and performance issues before they impact application availability.

---

## Project Screenshots

The project dashboard includes screenshots demonstrating:

- Grafana Monitoring Dashboard
- Prometheus Targets
- Jenkins CI/CD Pipeline
- Kubernetes Cluster Status
- Backend Down Alert
- MySQL Down Alert
- High CPU Alert

---

## Repository Structure

```text
ecommerce-devops-platform/
│
├── backend/
│
├── frontend/
│   ├── src/
│   ├── public/
│   │   └── screenshots/
│   └── Dockerfile
│
├── helm/
│
├── Jenkinsfile
├── docker-compose.yml
├── frontend-deployment.yaml
└── README.md
```

---

## Learning Outcomes

This project demonstrates practical implementation of:

- Continuous Integration (CI)
- Continuous Deployment (CD)
- Docker Containerization
- Kubernetes Orchestration
- Infrastructure Monitoring
- Alert Management
- DevOps Automation
- Cloud-Native Application Deployment

---

## Author

**Shivani Sharma**

GitHub: https://github.com/2121-shivi

Repository: https://github.com/2121-shivi/ecommerce-devops-platform

---

## License

This project is licensed under the MIT License.
