import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log(`Deleting ${props.title}`);
  }

  function closeBackdrop() {
    console.log("Closing backdrop");
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onClick={closeBackdrop}/>}
      {modalIsOpen && <Backdrop onClick={closeBackdrop} />}
    </div>
  );
}

export default Todo;
