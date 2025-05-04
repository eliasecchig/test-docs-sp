# Getting Started

Welcome to the Agent Starter Pack! This guide will walk you through the initial steps to get your first agent project up and running.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Python:** Version 3.10 or higher.
-   **Google Cloud SDK:** [Installation Guide](https://cloud.google.com/sdk/docs/install). Make sure you've authenticated using `gcloud auth login` and `gcloud auth application-default login`.
-   **Terraform:** [Installation Guide](https://developer.hashicorp.com/terraform/downloads). Required for deploying the infrastructure.

## Installation

The easiest way to get started is by installing the `agent-starter-pack` CLI tool using pip.

1.  **Create and activate a Python virtual environment (Recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2.  **Install the package:**
    ```bash
    pip install agent-starter-pack
    ```

## Create Your First Agent Project

Now you can create a new agent project using the CLI:

```bash
agent-starter-pack create my-awesome-agent
```

This command will:

1.  Ask you to select an agent template (e.g., `adk_base`, `agentic_rag`).
2.  Ask you to select a deployment target (e.g., `cloud_run`, `agent_engine`).
3.  Prompt for necessary Google Cloud project IDs and configuration details.
4.  Generate a complete project structure with backend code, frontend (optional), and Terraform infrastructure-as-code for deployment.

Follow the prompts, and you'll have a functional agent project ready in minutes!

**Example: Creating a RAG agent for Cloud Run:**

```bash
# Select 'agentic_rag' and 'cloud_run' when prompted
agent-starter-pack create my-rag-agent
```

**Example: Creating a base ADK agent for Agent Engine:**

```bash
agent-starter-pack create my-adk-agent -a adk_base -d agent_engine
```

## Explore Your New Project

Once created, navigate into your project directory (`cd my-awesome-agent`). You'll find:

-   `app/`: Backend agent code.
-   `frontend/`: Streamlit frontend code (if applicable).
-   `deployment/`: Terraform code for infrastructure.
-   `README.md`: Project-specific instructions.

## Next Steps

You're all set! Here are some suggestions for what to do next:

-   **Run Locally:** Follow the instructions in your new project's `README.md` to run the agent and frontend on your local machine.
-   **Deploy:** Use the provided Terraform scripts in the `deployment/` directory to deploy your agent to Google Cloud. See the [Deployment Guide](deployment.md) for details.
-   **Customize:** Modify the agent logic in `app/` or the frontend in `frontend/` to suit your needs.
-   **Explore Features:**
    -   [CI/CD Setup](cli/setup_cicd.md): Automate your deployment pipeline.
    -   [Data Ingestion for RAG](data-ingestion.md): Set up pipelines for RAG agents.
    -   [Observability](observability.md): Learn about monitoring and logging.
-   **Try in Firebase Studio:** [Launch a template directly in Firebase Studio](https://studio.firebase.google.com/new?template=https%3A%2F%2Fgithub.com%2FGoogleCloudPlatform%2Fagent-starter-pack%2Ftree%2Fmain%2Fsrc%2Fresources%2Fidx) with zero local setup.
-   **Watch the Overview:** Get a quick [1-Minute Video Overview](https://youtu.be/jHt-ZVD660g).

Refer to the main [Documentation Index](README.md) for a full overview of available guides.
