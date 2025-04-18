# Setup CI/CD Command

The `setup-cicd` command helps you configure continuous integration and continuous deployment (CI/CD) for your agent project.

## Syntax

```bash
agent-starter-pack setup-cicd [options]
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--project-id` | Google Cloud project ID for CI/CD | Current project |
| `--region` | Google Cloud region | `us-central1` |
| `--repository` | GitHub repository name | Detected from git config |
| `--repository-owner` | GitHub repository owner | Detected from git config |
| `--connection-name` | Cloud Build connection name | `github-connection` |
| `--github-app-id` | GitHub App Installation ID | Prompted if not provided |
| `--github-pat-secret` | GitHub Personal Access Token secret name | `github-pat` |

## Prerequisites

Before running this command, ensure you have:

1. A GitHub repository for your agent project
2. A Google Cloud project with the necessary APIs enabled
3. Appropriate permissions to create Cloud Build resources

## What It Does

The `setup-cicd` command:

1. Creates a Cloud Build connection to your GitHub repository
2. Sets up Cloud Build triggers for CI/CD pipelines
3. Configures the necessary IAM permissions
4. Creates Terraform configurations for deployment environments

## Examples

### Basic usage

```bash
cd my-agent
agent-starter-pack setup-cicd
```

### Specify project and repository details

```bash
agent-starter-pack setup-cicd --project-id=my-cicd-project --repository=my-agent-repo --repository-owner=my-github-username
```

## CI/CD Pipeline

The configured CI/CD pipeline includes:

1. **Pull Request Validation**: Runs tests when PRs are created or updated
2. **Continuous Deployment**: Deploys to development environment when changes are merged to main
3. **Promotion Workflow**: Allows promoting changes to staging and production environments

## Customizing the Pipeline

You can customize the CI/CD pipeline by modifying the following files:

- `.cloudbuild/pr-validation.yaml`: Pull request validation workflow
- `.cloudbuild/continuous-deployment.yaml`: Continuous deployment workflow
- `.cloudbuild/terraform/main.tf`: Terraform configuration for CI/CD resources

## Troubleshooting

If you encounter issues with CI/CD setup:

1. Ensure your GitHub repository exists and is accessible
2. Verify that you have the necessary permissions in Google Cloud
3. Check that the Cloud Build API is enabled in your project
