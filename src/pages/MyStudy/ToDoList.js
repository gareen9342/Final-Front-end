import React, { useState } from "react";
import { ToDoList, ToDoListItem, AddButton } from "./UI";
import { todolist } from "../../dummyData/todos";
import Modal from "../../components/Modal";

const ToDos = () => {
  const [todos, setTodos] = useState(todolist);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const onClickAddButton = () => {
    console.log("onclick");
    openModal();
  };
  return (
    <ToDoList>
      {todos.map((item, idx) => (
        <ToDoListItem
          key={item.todolist_id}
          checked={item.is_done}
          index={idx}
          taskName={item.title}
        />
      ))}
      <br />
      <div className="text-center">
        <AddButton onClickButton={onClickAddButton} />
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          asdf
        </Modal>
      )}
    </ToDoList>
  );
};

export default ToDos;
