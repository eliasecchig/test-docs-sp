# Agent Templates

The Agent Starter Pack follows a "bring your own agent" approach. It provides several production-ready agent templates designed to accelerate your development while offering the flexibility to use your preferred agent framework or pattern.

## Available Templates


| Agent Name | Description | Use Case |
|------------|-------------|----------|
| `adk_base` | A base ReAct agent implemented using Google's [Agent Development Kit](https://github.com/google/adk-python) | General purpose conversational agent |
| `agentic_rag` | A RAG agent for document retrieval and Q&A | Document search and question answering |
| `langgraph_base_react` | A base ReAct agent using LangGraph | General purpose agent with reasoning capabilities |
| `crewai_coding_crew` | A multi-agent system implemented with CrewAI | Collaborative coding assistance |
| `live_api` | A real-time multimodal RAG agent | Audio/video/text chat with knowledge base |

## Choosing the Right Template

When selecting a template, consider these factors:

1.  **Primary Goal**: Are you building a conversational bot, a Q&A system over documents, a task-automation crew, or something else?
2.  **Core Pattern/Framework**: Do you have a preference for Google's ADK, LangChain/LangGraph, CrewAI, or implementing a pattern like RAG directly? The Starter Pack supports various approaches.
3.  **Reasoning Complexity**: Does your agent need complex planning and tool use (like ReAct), or is it more focused on retrieval and synthesis (like basic RAG)?
4.  **Collaboration Needs**: Do you need multiple specialized agents working together?
5.  **Modality**: Does your agent need to process or respond with audio, video, or just text?

## Template Details

### ADK Base (`adk_base`)

This template uses Google's [Agent Development Kit (ADK)](https://github.com/google/adk-python) to implement the [ReAct](https://react-lm.github.io/) pattern, enabling reasoning and tool selection. Ideal for:

*   Getting started with agent development on Google Cloud.
*   Building general-purpose conversational agents.
*   Learning the ADK framework and ReAct pattern.

### Agentic RAG (`agentic_rag`)

This template implements [Retrieval-Augmented Generation (RAG)](https://cloud.google.com/use-cases/retrieval-augmented-generation?hl=en) for document-based question answering. Features include:

*   Integration with [Vertex AI Search](https://cloud.google.com/vertex-ai-search-and-conversation) and [Vertex AI Vector Search](https://cloud.google.com/vertex-ai/docs/vector-search/overview).
*   Document processing and embedding generation.
*   Answer synthesis from retrieved context.

### LangGraph Base ReAct (`langgraph_base_react`)

Using [LangGraph](https://langchain-ai.github.io/langgraph/), this template implements ReAct in a graph-based structure, offering:

*   Explicit state management for complex flows.
*   Control over reasoning cycles.
*   Robust tool integration and error handling.
*   Support for structured, multi-step reasoning.

### CrewAI Coding Crew (`crewai_coding_crew`)

This [CrewAI](https://www.crewai.com/) template orchestrates multiple specialized agents (e.g., Senior Engineer, QA Engineer) to collaborate. Suitable for:

*   Complex tasks requiring delegation and specialized roles.
*   Simulating team collaboration.
*   Multi-step workflows with checks and balances.

### Live API (`live_api`)

This template demonstrates a real-time, multimodal RAG agent using [Vertex AI Live API](https://cloud.google.com/vertex-ai/generative-ai/docs/live-api). Features include:

*   Audio, video, and text input handling.
*   RAG lookups against a knowledge base.
*   Low-latency responses for live chat.
*   Responsive user interface.

## Customizing Templates

All templates are provided as starting points and are designed for customization:

1.  Choose a template that most closely matches your needs.
2.  Create a new agent instance based on the selected template.
3.  Familiarize yourself with the code structure, focusing on the agent logic, tool definitions, and any UI components.
4.  Modify and extend the code: adjust prompts, add or remove tools, integrate different data sources, change the reasoning logic, or update the framework versions as needed.
