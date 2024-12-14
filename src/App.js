import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> GIRAGANI SAGAR </h1>
        <p>Azure DevOps Engineer</p>
        <div className="contact-info">
          <p>Phone: +91-6301758608</p>
          <p>Email: sagargoud2606@gmail.com</p>
        </div>
        <button className="contact-btn" onClick={() => window.location = 'mailto:sagargoud2606@gmail.com'}>Contact Me</button>
      </header>

      <section className="summary">
        <h2>Profile Summary</h2>
        <p>
          Microsoft Azure DevOps professional offering 2 years of experience in cloud & production support, implementation, configuring, monitoring, and troubleshooting in Azure cloud.
        </p>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Cloud Technologies: Microsoft Azure</li>
          <li>CI/CD Tools: Azure DevOps, Jenkins</li>
          <li>Containerization: Docker, Kubernetes</li>
          <li>Scripting: PowerShell, Azure CLI, Terraform</li>
          <li>Version Control: Git</li>
          <li>Monitoring: Azure Monitor, Application Insights</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Sukranth Technologies - Azure DevOps Engineer (Jun 2022 - Present)</h3>
          <p>
            Responsibilities include automating builds and deployments, configuring CI/CD pipelines using Azure DevOps, managing Azure services, and implementing infrastructure as code with Terraform.
          </p>
        </div>
        <div className="job">
          <h3>PepsiCo - Azure DevOps Engineer (Jul 2022 - Present)</h3>
          <p>
            Worked with Azure IAAS and PAAS services, creating and managing repositories, implementing CI/CD, and automating deployments with Jenkins and PowerShell.
          </p>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Global Finance Service - Azure DevOps Engineer</h3>
          <p>
            Automated Continuous Integration builds, deployments, and unit tests across multiple environments, created ARM templates, and wrote PowerShell scripts for virtual machine management.
          </p>
        </div>
        <div className="project">
          <h3>PepsiCo - Azure DevOps Engineer</h3>
          <p>
            Managed Azure resources such as VMs, web apps, and storage, configured load balancers, and implemented backup and replication strategies.
          </p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>B.Sc. in Computer Science - Chaitanya Degree College, Hanmakonda</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 GIRAGANI SAGAR</p>
      </footer>
    </div>
  );
}

export default App;

