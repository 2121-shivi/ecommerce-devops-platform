# E-Commerce DevOps Platform

A production-ready DevOps project demonstrating the complete software delivery lifecycle using modern cloud-native technologies.

The platform integrates **GitHub, Jenkins, Docker, Kubernetes, Prometheus, and Grafana** to automate application deployment, monitoring, and observability. It showcases CI/CD automation, container orchestration, infrastructure monitoring, and alert management in a real-world DevOps workflow.


## Overview

This project implements an end-to-end DevOps pipeline for an e-commerce application.

The workflow begins with source code management in GitHub, followed by automated builds and deployments through Jenkins. Application components are containerized using Docker and deployed to a Kubernetes cluster. Prometheus collects metrics from the infrastructure and applications, while Grafana provides dashboards and alerting capabilities for monitoring system health.


## Architecture

```text
GitHub
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
   ├── Backend (Flask)
   └── MySQL Database
   │
   ▼
Prometheus Monitoring
   │
   ▼
Grafana Dashboards & Alerts

## Tech Stack

### Frontend

* React.js
* Vite
* Axios

### Backend

* Flask
* Python

### Database

* MySQL

### DevOps & Infrastructure

* Docker
* Kubernetes
* Helm
* Jenkins
* GitHub Actions/Webhooks

### Monitoring & Observability

* Prometheus
* Grafana

## Features

* Automated CI/CD Pipeline
* Dockerized Application Services
* Kubernetes Deployment
* React-Based Dashboard
* Backend API Integration
* MySQL Database Connectivity
* Prometheus Monitoring
* Grafana Dashboards
* Alert Management
* GitHub Webhook Integration
* Infrastructure Observability

## CI/CD Pipeline

The Jenkins pipeline automates the complete deployment workflow:

1. Source code checkout from GitHub
2. Docker image build
3. Docker Hub authentication
4. Docker image push
5. Kubernetes deployment
6. Deployment verification

### Pipeline Stages

* Checkout SCM
* Checkout
* Build Docker Image
* Docker Login
* Push Image
* Deploy to Kubernetes
* Post Actions

## Application Access

| Service            | URL                     |
| ------------------ | ----------------------- |
| Frontend Dashboard | http://49.50.92.84:5173 |
| Backend API        | http://49.50.92.84:5000 |
| Jenkins            | http://49.50.92.84:8080 |
| Prometheus         | http://49.50.92.84:9090 |
| Grafana            | http://49.50.92.84:3000 |


## Monitoring & Alerting

The platform includes comprehensive monitoring and observability using Prometheus and Grafana.

### Dashboards

* Kubernetes Cluster Dashboard
* Infrastructure Monitoring Dashboard
* Resource Utilization Dashboard

### Alerts

* Backend Down Alert
* MySQL Down Alert
* High CPU Usage Alert

## Project Screenshots

The frontend dashboard includes screenshots of:

* Grafana Monitoring Dashboard
* Prometheus Targets
* Jenkins CI/CD Pipeline
* Kubernetes Cluster Status
* Backend Down Alert
* MySQL Down Alert
* High CPU Alert


## Repository Structure

ecommerce-devops-platform/
│
├── backend/
├── frontend/
│   ├── public/
│   ├── src/
│   └── Dockerfile
│
├── helm/
├── Jenkinsfile
├── docker-compose.yml
├── README.md
└── LICENSE

## Learning Outcomes

This project demonstrates practical experience with:

* Continuous Integration
* Continuous Deployment
* Containerization
* Kubernetes Orchestration
* Infrastructure Monitoring
* Alert Management
* DevOps Automation
* Cloud-Native Deployment

## Author

**Shivani Sharma**

GitHub: https://github.com/2121-shivi

Repository: https://github.com/2121-shivi/ecommerce-devops-platform


## License

This project is licensed under the MIT License.
