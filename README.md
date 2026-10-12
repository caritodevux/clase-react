# Clase React
## Instalación
1. Asegurate de instalar en el computador: node.js y npm. 
2. En Visual Studio Code: `npm install`
3. Inicar el servidor con Vite `npm run dev`
4. Abrir: `ttp://localhost:5173/`

## Descripcion de la app
### 1. Revisa dentro de la carpeta src:
#### App.jsx 
Suele ser el componente principal donde reside el estado global de las tareas (tasks o tareas) usando useState, junto con las funciones controladoras:
- Agregar tarea (handleAddTask / agregarTarea).
- Alternar completada/pendiente (handleToggle o completarTarea).
- Eliminar tarea (handleDelete o eliminarTarea).
- **components/**: Si el código está modularizado, encontrarás componentes como:
    - **Formulario / Input (TaskForm.jsx o similar)**: maneja el input de texto y el evento onSubmit.
    - **Lista (TaskList.jsx)**: recorre el array de tareas con .map() para renderizarlas.
    - **Elemento de tarea (TaskItem.jsx)**: renderiza el texto, el checkbox y el botón de borrado de cada fila.
    - **main.jsx**: Punto de entrada donde React monta el árbol en el elemento #root del index.html.

### 2. Funcionalidades típicas implementadas
Al interactuar con la interfaz en http://localhost:5173, puedes comprobar qué nivel de lógica esta implementada:
- **CRUD básico**: Crear tareas nuevas, marcarlas como terminadas y eliminarlas de la lista.
- **Persistencia (localStorage)**: Si recargas la página (F5), verifica si las tareas creadas se mantienen o si vuelven a un estado inicial fijo (lo que indicaría si implementaste localStorage.getItem / setItem con un useEffect).
- **Filtros**: Pestañas o botones para ver Todas, Pendientes o Completadas.
- **Estilos**: Revisa si usa CSS puro (App.css), módulos CSS (.module.css), o librerías de utilidades como Tailwind o Bootstrap.

## Cambios importantes
Aparentemente el proyecto estaba duplicado dentro de la carpeta "clase-react" como la carpeta "gestor-tareas-react".
---
## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
