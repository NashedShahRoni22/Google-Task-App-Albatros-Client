import React from "react";
import { toast } from "react-hot-toast";
import { MdDelete, MdOutlineUpdate, MdOutlineCheck } from "react-icons/md";

const SingleTask = ({ t, refetch }) => {

  const handleDelete = (t) => {
    const sure = window.confirm(`Do want to delete ${t.task}?`);
    if (sure) {
      fetch(`http://localhost:8000/task/${t._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${t.task} deleted successfully!`);
            refetch();
          }
        });
    }
  };
  return (
    <div className="w-full mt-4 shadow-2xl rounded-3xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={t.image} className="h-36 w-36 rounded-3xl" alt="" />
        <p>{t.task}</p>
      </div>
      <div className="flex items-center gap-4 mr-8">
        <MdOutlineUpdate
          className="text-3xl cursor-pointer text-blue-400"
        />
        <MdOutlineCheck className="text-3xl cursor-pointer text-green-500" />
        <MdDelete
          onClick={() => handleDelete(t)}
          className="text-3xl cursor-pointer text-red-500"
        />
      </div>
    </div>
  );
};

export default SingleTask;
