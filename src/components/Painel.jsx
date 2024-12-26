import { useState } from "react";
import Input from "./Input";

function Painel({ newTask, taskExist }) {
  const [titulo, setTitle] = useState("");
  const [descricao, setDescription] = useState("");

  return (
    <div className="space-y-2 p-6 bg-red-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Decrição da tarefa"
        value={descricao}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-yellow-100 text-red-700 p-2 rounded-md font-medium shadow"
        onClick={() => {
          if (!titulo.trim() || !descricao.trim()) {
            return alert(
              "Preencha o título e a descrição para criar uma nova tarefa"
            );
          }
          if (taskExist(titulo)) {
            return alert("Tarefa já foi criada!");
          }
          newTask(titulo, descricao);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default Painel;
