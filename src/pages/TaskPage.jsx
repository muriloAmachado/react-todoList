import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-yellow-300 flex justify-center p-6">
      <div className="w-[700px] space-y-4 ">
        <div className="flex justify-center  relative">
          <button
            className="absolute left-0 top-0 bottom-0 text-red-400"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-red-400 font-bold text-center">
            Detalhes de Tarefas
          </h1>
        </div>
        <div className="bg-red-200 p-4 rounded-md flex flex-col gap-2 shadow">
          <h1 className="text-xl shadow bg-yellow-100 rounded-md p-2 text-red-700 font-bold text-center">
            {title}
          </h1>
          <p className="text-red-700 shadow bg-yellow-100 rounded-md p-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
