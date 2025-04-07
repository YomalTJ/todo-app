# Todo Task Web Application

A simple to-do task web application built with Express.js (TypeScript), Next.js, and MySQL.

## Prerequisites

- Docker and Docker Compose

## Project Structure

```
todo-app/
├── backend/         # Express TypeScript backend
├── frontend/        # Next.js frontend
├── database/        # MySQL initialization scripts
└── docker-compose.yml
```

## How to Run

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-app
```

2. Start the application using Docker Compose:

```bash
docker-compose up --build
```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000/api/tasks

## Features

- Create to-do tasks with title and description
- View the 5 most recent tasks
- Mark tasks as completed

## API Endpoints

- `GET /api/tasks`: Get recent tasks (limit: 5)
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id/complete`: Mark a task as completed

## Development

### Backend

The backend is built with Express.js and TypeScript.

```bash
cd backend
npm install
npm run dev
```

### Frontend

The frontend is built with Next.js.

```bash
cd frontend
npm install
npm run dev
```

## Testing

### Backend Tests

```bash
cd backend
npm test
```

## Notes

- The database is initialized with a `task` table
- The application uses Docker Compose to orchestrate three containers: MySQL database, Express backend, and Next.js frontend
- The backend API follows RESTful principles
- The frontend is a simple SPA built with Next.js and Tailwind CSS
