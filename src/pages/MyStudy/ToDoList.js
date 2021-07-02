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
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="px-12 py-5">
              <h2 className="text-gray-800 text-3xl font-semibold">
                Your opinion matters to us!
              </h2>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-6 space-y-3"></div>
              <div className="w-3/4 flex flex-col">
                <textarea
                  rows="3"
                  className="p-4 text-gray-500 rounded-xl resize-none"
                >
                  contents
                </textarea>
                <button className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
                  okay
                </button>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center">
              <button onClick={() => closeModal()}>maybe later</button>
            </div>
          </div>
        </Modal>
      )}
    </ToDoList>
  );
};

export default ToDos;
