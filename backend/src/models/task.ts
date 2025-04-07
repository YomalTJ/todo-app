import db from "./db";

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
  created_at?: Date;
}

export const getTasks = async (limit: number = 5): Promise<Task[]> => {
  const [rows] = await db.query(
    "SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT ?",
    [limit]
  );
  return rows as Task[];
};

export const createTask = async (task: Task): Promise<number> => {
  const { title, description } = task;
  const [result]: any = await db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description]
  );
  return result.insertId;
};

export const updateTaskStatus = async (
  id: number,
  completed: boolean
): Promise<boolean> => {
  const [result]: any = await db.query(
    "UPDATE task SET completed = ? WHERE id = ?",
    [completed, id]
  );
  return result.affectedRows > 0;
};
