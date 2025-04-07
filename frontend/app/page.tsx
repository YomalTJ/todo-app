"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/tasks`);
      setTasks(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title: string, description: string) => {
    try {
      const response = await axios.post(`${apiUrl}/tasks`, {
        title,
        description,
      });

      // Add the new task to the state and maintain only the most recent 5
      setTasks((prev) => [response.data, ...prev].slice(0, 5));
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Failed to add task. Please try again.");
    }
  };

  const handleMarkComplete = async (id: number) => {
    try {
      await axios.put(`${apiUrl}/tasks/${id}/complete`);
      // Remove the completed task from the list
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error marking task as complete:", err);
      setError("Failed to update task. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Todo Task App</h1>

        <TaskForm onAddTask={handleAddTask} />

        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Recent Tasks</h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks available. Add your first task!
            </p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                onMarkComplete={handleMarkComplete}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
