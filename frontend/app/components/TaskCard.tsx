"use client";

import React from "react";

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onMarkComplete: (id: number) => void;
}

const TaskCard: React.FC<TaskProps> = ({
  id,
  title,
  description,
  onMarkComplete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={() => onMarkComplete(id)}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300"
      >
        Done
      </button>
    </div>
  );
};

export default TaskCard;
