import Image from "../../Components/image/image";
import { useState } from "react"; // 1. Import useState

const BoardForm = ({ setIsNewBoardOpen, setNewBoard }) => {
  // 2. Add state to hold the input's value
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 4. Use the state variable here
    setNewBoard(title);
    setIsNewBoardOpen(false);
  };

  return (
    <div className="boardForm">
      <div className="boardFormContainer">
        <div
          className="boardFormClose"
          onClick={() => setIsNewBoardOpen(false)}
        >
          <Image path="/general/cancel.svg" alt="" w={20} h={20} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Create a new board</h1>
          <input
            type="text"
            placeholder="Board Title"
            value={title} // 3. Control the input
            onChange={(e) => setTitle(e.target.value)} // 3. Update the state
          />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default BoardForm;