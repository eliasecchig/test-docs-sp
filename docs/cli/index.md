# CLI Reference

The Agent Starter Pack CLI provides commands for creating, managing, and deploying agents.

## Overview

The CLI is designed to simplify the process of working with agent templates and deploying them to Google Cloud.

## Available Commands

| Command | Description |
|---------|-------------|
| `create` | Create a new agent project from a template |
| `deploy` | Deploy an agent to Google Cloud |
| `setup-cicd` | Set up CI/CD for your agent project |
| `list-templates` | List available agent templates |

## Basic Usage

### Creating a new agent

```bash
agent-starter-pack create my-agent -a adk_base
```

### Listing available templates

```bash
agent-starter-pack list-templates
```

### Setting up CI/CD

```bash
agent-starter-pack setup-cicd
```

## Command Options

For detailed information about command options, use the `--help` flag:

```bash
agent-starter-pack create --help
```

## Environment Variables

The CLI respects the following environment variables:

- `GOOGLE_CLOUD_PROJECT` - Default Google Cloud project ID
- `GOOGLE_CLOUD_REGION` - Default Google Cloud region

## Next Steps

- [Create Command Reference](./create.md)
- [Setup CI/CD Reference](./setup-cicd.md)
