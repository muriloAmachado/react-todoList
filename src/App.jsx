import { useEffect, useState } from "react";
import Painel from "./components/Painel";
import Task from "./components/Task";
import { v4 } from "uuid";

function App() {
  const [tarefas, setTasks] = useState(
    JSON.parse(localStorage.getItem("tarefas")) || []
  );

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();

  //     setTasks(data);
  //   }

  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tarefas.map((tarefa) => {
      if (tarefa.id == taskId) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      }
      return tarefa;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tarefas.filter((tarefa) => tarefa.id != taskId);
    setTasks(newTasks);
  }

  function addNewTask(titulo, descricao) {
    const newTask = {
      id: v4(),
      title: titulo,
      description: descricao,
      isCompleted: false,
    };

    setTasks([...tarefas, newTask]);
  }

  function taskExist(titulo) {
    return tarefas.some(
      (tarefa) =>
        tarefa.title.toString().toLowerCase() ===
        titulo.toString().toLowerCase()
    );
  }

  return (
    <div className="w-screen h-screen bg-yellow-300 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-red-400 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Painel newTask={addNewTask} taskExist={taskExist} />
        <Task
          tarefas={tarefas}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
