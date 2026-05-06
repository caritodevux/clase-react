import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import AdviceBox from './components/AdviceBox';
function App() {
const [tasks, setTasks] = useState([]);
useEffect(() => {
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
setTasks(JSON.parse(savedTasks));
}
}, []);
useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
const addTask = (taskText) => {
const newTask = {
id: Date.now(),
text: taskText,
completed: false,
};
setTasks([...tasks, newTask]);
};
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
const deleteTask = (taskId) => {
const confirmDelete = window.confirm('¿Estás seguro de eliminar esta tarea?');
if (!confirmDelete) {
return;
}
const filteredTasks = tasks.filter((task) => task.id !== taskId);
setTasks(filteredTasks);
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