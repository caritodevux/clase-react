import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import AdviceBox from './components/AdviceBox';

function App() {
  // 1. Inicialización perezosa: Leemos localStorage una sola vez al cargar el componente
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    // Si existen tareas las convertimos a objeto, si no, empezamos con array vacío
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. Efecto de persistencia: Cada vez que 'tasks' cambie, actualizamos localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para añadir tareas
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Función para marcar como completada/pendiente
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Función para eliminar tareas
  const deleteTask = (taskId) => {
    const confirmDelete = window.confirm('¿Estás seguro de eliminar esta tarea?');
    if (confirmDelete) {
      const filteredTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(filteredTasks);
    }
  };

  return (
    <main className="container">
      <h1>Gestor Básico de Tareas</h1>
      <p className="description">
        Aplicación creada con React, componentes, Local Storage y consumo de API.
      </p>
      
      <AdviceBox />
      
      <TaskForm onAddTask={addTask} />
      
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}

export default App;