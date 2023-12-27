type Props = {
    task: string;
    number: number;
    handleDeleteTask: () => void;
    handleEditTask: () => void; // Corrected the typo in the function name
    editIndex: number | null;
  };
  

const todoButton =
  "px-4g py-3 text-sm  mt-0  text-white rounded-lg md:px-3 md:text-md";

const TodoTask = ({
  task,
  number,
  handleDeleteTask,
  handleEditTask,
  editIndex,
}: Props) => {

  return (
    <div className="flex flex-col gap-3 justify-between items-center py-3  md:flex-row ">
      <h1 className="font-bold md:ml-5">
        {number + 1}. {task}
      </h1>
      <div className="flex gap-2 w-fullmd:mr-5">
        {editIndex === null && (
          <button
            onClick={handleEditTask}
            className={`bg-amber-600 ${todoButton}`}
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDeleteTask}
          className={`bg-red-600 mr-0 md:mr-5 ${todoButton}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
