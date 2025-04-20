CINDY JEWELRY
This repository contains a jewelry e-commerce website deployed with modern DevOps practices. The project demonstrates implementing CI/CD pipelines and containerization.

Project 1: CI/CD Pipeline with GitHub Actions
This project demonstrates the implementation of a CI/CD pipeline using GitHub Actions to automatically deploy a static website to GitHub Pages whenever changes are pushed to the main branch.

Technologies Used:
- HTML/CSS/JavaScript
- Git & GitHub
- GitHub Actions
- GitHub Pages

Key Features
- Automated deployment workflow using GitHub Actions
- Static website hosting on GitHub Pages
- Version control with Git
- No build tools required - pure HTML/CSS/JS implementation

CI/CD Pipeline Process
1. Developer pushes code to the master branch
2. GitHub Actions automatically detects the changes
3. The workflow checks out the code
4. The code is deployed to GitHub Pages
5. The website is accessible online immediately after deployment

Live Demo: The website is available at: https://van49785.github.io/CindyJewelry/

Project 2: Docker Containerization
This project demonstrates how to containerize a static website using Docker and Nginx, allowing for consistent deployment across different environments.

Technologies Used
- Docker & Docker Compose
- Nginx web server
- HTML/CSS/JavaScript

Key Features
- Lightweight Alpine-based Nginx container
- Docker Compose for easy container management
- Production-ready container configuration

How to Run Locally
Clone the repository
- git clone https: https://github.com/van49785/CindyJewelry
- cd CindyJewelry

Using Docker directly
- docker build -t cindy-jewelry .
- docker run -d -p 8080:80 cindy-jewelry

Or using Docker Compose
- docker-compose up -d

Access the website at http://localhost:8080
