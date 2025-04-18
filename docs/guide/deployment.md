# Deployment Guide

This guide explains how to deploy agents created with the Agent Starter Pack to Google Cloud.

## Deployment Options

The Agent Starter Pack supports two primary deployment options:

1. **Cloud Run** - Deploy your agent as a containerized service on Cloud Run
2. **Agent Engine** - Deploy using Vertex AI Agent Engine, a fully managed solution

## Prerequisites

Before deploying, ensure you have:

- A Google Cloud project with billing enabled
- Appropriate IAM permissions
- Google Cloud SDK installed and configured
- Terraform installed (version 1.0.0+)

## Deploying to Cloud Run

### 1. Set up your environment

```bash
# Set your project ID
export PROJECT_ID=your-project-id
export REGION=us-central1

# Configure gcloud
gcloud config set project $PROJECT_ID
```

### 2. Deploy using Terraform

The Agent Starter Pack includes Terraform configurations for deployment:

```bash
cd my-agent/deployment/terraform/dev

# Initialize Terraform
terraform init

# Apply the configuration
terraform apply -var="dev_project_id=$PROJECT_ID" -var="region=$REGION"
```

### 3. Access your deployed agent

After deployment completes, Terraform will output the URL of your deployed agent.

## Deploying to Agent Engine

### 1. Prepare your agent for Agent Engine

```bash
agent-starter-pack create my-agent -d agent_engine -a adk_base
```

### 2. Deploy to Agent Engine

```bash
cd my-agent
agent-starter-pack deploy
```

## CI/CD Setup

For automated deployments, you can set up CI/CD:

```bash
agent-starter-pack setup-cicd
```

This will configure a GitHub Actions workflow for continuous deployment.

## Troubleshooting

If you encounter issues during deployment, check:

- IAM permissions
- Project quotas
- Service account configurations

For more detailed troubleshooting, see the [Troubleshooting Guide](./troubleshooting.md).
