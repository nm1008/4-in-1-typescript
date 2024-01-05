import { FaEdit } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

type Props = {
  task: string;
  number: number;
  handleDeleteTask: () => void;
  handleEditTask: () => void;
  editIndex: number | null;
};

const TodoTask = ({
  task,
  number,
  handleDeleteTask,
  handleEditTask,
  editIndex,
}: Props) => {
  return (
    <div className="flex flex-col items-center pt-3 md:flex-row md:justify-between border-b-2 pb-2 ">
      <div className="">
        <h1 className="font-bold md:ml-5">
          {number + 1}. {task}
        </h1>
      </div>
      <div className="flex gap-5 md:mr-5">
        {editIndex === null && (
          <FaEdit
            onClick={handleEditTask}
            style={{ color: "white" }}
            className="w-6 h-10 cursor"
          >
            Edit
          </FaEdit>
        )}
        <FaTimes
          onClick={handleDeleteTask}
          style={{ color: "white" }}
          className="w-5 h-10 cursor"
        >
          &times
        </FaTimes>
      </div>
    </div>
  );
};

export default TodoTask;
