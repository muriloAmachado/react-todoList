import {
  CheckCheckIcon,
  CheckIcon,
  ChevronRightIcon,
  Trash,
} from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

function Task({ tarefas, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  function detailPage(tarefa) {
    const query = new URLSearchParams();
    query.set("title", tarefa.title);
    query.set("description", tarefa.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-2 p-6 bg-red-200 rounded-md shadow">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="flex gap-1">
          <Button
            onClick={() => onTaskClick(tarefa.id)}
            className={`bg-yellow-100 text-red-700 p-2 flex gap-2 items-center rounded-md w-full text-left ${
              tarefa.isCompleted && "line-through"
            }`}
          >
            {tarefa.isCompleted && <CheckIcon />}
            {tarefa.title}
          </Button>
          <Button onClick={() => detailPage(tarefa)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => deleteTask(tarefa.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
