# 📊 DataLens AI

An AI-powered data analytics platform that enables users to upload CSV datasets, automatically analyze data, generate statistical insights and visualizations, and interact with their datasets using natural language queries powered by a Large Language Model.

The project combines data processing, exploratory data analysis, visualization, and Generative AI to make dataset analysis more accessible and interactive.

---

## 🚀 Overview

DataLens AI allows users to upload CSV datasets and explore them through:

- Automated dataset analysis
- Statistical summaries
- Interactive data visualizations
- AI-powered natural language querying
- Dataset preview and exploration

The application uses an LLM to help users understand and interact with their data conversationally.

---

## ✨ Features

### 📂 CSV Dataset Upload

Users can upload CSV datasets directly to the application for analysis.

### 📊 Automated Data Analysis

The application processes uploaded datasets and provides:

- Dataset structure and overview
- Column information
- Basic statistical summaries
- Data previews
- Insights into numerical and categorical features

### 📈 Interactive Visualizations

Generate visual representations of the uploaded data using interactive charts.

### 🤖 AI-Powered Data Assistant

Users can ask natural language questions about their datasets.

The application integrates a Large Language Model through the OpenRouter API to generate contextual responses and insights based on the uploaded data.

### 🔍 Dataset Exploration

Users can preview and explore the uploaded dataset directly through the dashboard.

---

## 🧠 AI Integration

DataLens AI integrates a Large Language Model using the OpenRouter API.

The AI component enables users to interact with datasets using natural language instead of manually performing every analysis.

### Example Queries

- "What are the main insights from this dataset?"
- "Which column has the highest variation?"
- "Summarize the important trends."
- "What patterns can you identify in the data?"

This demonstrates the practical integration of Generative AI and LLM APIs into a data analytics workflow.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Chart.js
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- OpenRouter API
- PapaParse

### AI / Generative AI

- Large Language Models (LLMs)
- OpenRouter API
- Natural Language Querying
- Prompt Engineering

### Data Processing

- PapaParse
- CSV Data Analysis
- Statistical Summaries
- Data Visualization

### Tools

- Git
- GitHub

---

## 🏗️ System Architecture

```text
                 ┌──────────────────┐
                 │      User        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   React Frontend │
                 │                  │
                 │  Upload Dataset  │
                 │  Visualizations  │
                 │ AI Chat Interface│
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Express Backend  │
                 │                  │
                 │ CSV Processing   │
                 │ API Handling     │
                 │ AI Integration   │
                 └────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
      ┌───────────────┐      ┌────────────────┐
      │ PapaParse     │      │ OpenRouter API │
      │ CSV Processing│      │      LLM       │
      └───────────────┘      └────────────────┘
```
## 📁 Project Structure

```
datalens-ai/
│
├── client/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/sumanvitha-kavuri/datalens-ai.git

cd datalens-ai
```

---

## Install dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` directory.

```env
OPENROUTER_API_KEY=your_api_key_here
```

---

## Run Locally

### Backend

```bash
cd server
npm run dev
```

Runs on:

```
http://localhost:5001
```

### Frontend

```bash
cd client
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Docker

Build and run the complete application

```bash
docker compose up --build
```

Stop containers

```bash
docker compose down
```

---

## Screenshots

Add screenshots of:

- Landing Page
- Dashboard
- Visualizations
- AI Chat Interface

---

## Future Improvements

- AWS cloud deployment
- User authentication
- PDF and Excel support
- Download AI-generated reports
- Advanced analytics dashboard

---

## Author

**Kavuri Divya Sumanvitha**

GitHub:
https://github.com/sumanvitha-kavuri


