# Clase React
## Instalación
1. Asegurate de instalar en el computador: node.js y npm. 
2. En Visual Studio Code: `npm install`
3. Inicar el servidor con Vite `npm run dev`
4. Abrir: `ttp://localhost:5173/`

## Enseñanzas del ejercicio
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
# Detalle sobre App.jsx
## 1. Estado inicial con función Lazy Initialization
Define la lista de tareas y su modificador (tasks y setTasks): Si ya habia algo guardado bajo la clave "tasks", toma ese texto y lo convierte en array de objetos con `JSON.parse()` y si no hay nada, arranca con un arreglo vacio.

## 2. Guardado automático con useEffect
`JSON.stringify(tasks): localStorage` solo sabe guardar texto plano, así que convierte el array de objetos a un string con formato JSON. Esto sincroniza el estado del disco local con el navegador.

## 3. Las tres funciones de negocio (CRUD)
Agregar tarea (addTask), Marcar / Desmarcar tarea (toggleTask) y Eliminar tarea (deleteTask).

## El retorno (JSX) y comunicación entre componentes
Patrón clásico de React: "Props down, events up" (los datos bajan, los eventos suben):
1. `<AdviceBox/>`: No recibe props, es autónomo (hace su propia petición fetch a una API de consejos).
2. `<TaskForm onAddTask="{addTask}"/>`: Le pasa la función addTask como prop al formulario. Cuando el usuario escribe algo y hace submit, el formulario ejecuta esa función avisándole a App el texto ingresado.
3. `<TaskList .../>`: Recibe tanto el array tasks (para mostrarlo en pantalla) como las funciones toggleTask y deleteTask (para que los botones de cada fila puedan ejecutarlas).

# Detalle de AdviceBox.jsx
Maneja un patrón estándar de consumo de APIs en React, manejando tres estados fundamentales: datos, carga y error.

## La función asíncrona (getAdvice)
1. **Preparación**: setLoading(true) activa el mensaje de espera y setError('') limpia errores previos antes de volver a consultar.
2. **Llamada de red**: Consulta el endpoint público de Advice Slip.
3. **Validación HTTP**: if (!response.ok) comprueba que el servidor respondió con un código 200–299. Si la API devuelve un error 404 o 500, fetch no lanza un error por sí solo, por lo que lanzar throw new Error(...) manualmente asegura que salte al bloque catch.
4. **Estructura de la respuesta**: La API devuelve un JSON Por eso accedes a data.slip.advice para guardar únicamente la frase.
5. **Cierre con finally**: Tanto si la petición fue exitosa como si falló, setLoading(false) se ejecuta siempre para apagar el indicador de carga.

## Ciclo de vida (useEffect)
El array de dependencias vacío [] indica que este efecto corre únicamente una vez al montarse el componente en pantalla. Así la aplicación siempre muestra un consejo apenas el usuario entra a la web.

## Renderizado condicional en JSX
Usa el operador lógico && para alternar la vista según el estado:
- Mientras descarga: muestra Cargando consejo....
- Si falló la red: muestra el mensaje de error en rojo.
- Si no hay carga ni error: muestra la cita entre comillas.
- El botón onClick={getAdvice} reutiliza la misma función para pedir una nueva cita sin necesidad de recargar la página.

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
