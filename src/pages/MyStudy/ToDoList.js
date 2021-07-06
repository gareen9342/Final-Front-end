import React, { useState, useCallback, useEffect } from "react";
import { ToDoList, ToDoListItem, AddButton } from "./UI";
import { todolist } from "../../dummyData/todos";
import Modal from "../../components/Modal";
import TodoInput from "./TodoInput";
import TodoService from "../../services/todoService";

const ToDos = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      (async () => {
        try {
          const { data } = await TodoService.getMyTodos(
            localStorage.getItem("email")
          );
          if (data && data.length) {
            console.log(data);
            setTodos(data);
            setLoading(false);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }

    return () => {
      setLoading(false);
    };
  }, [loading]);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ToDoList>
      {loading && "loading..."}
      {!loading && !todos.length && "할일이 아직 없습니다."}
      {todos.map((item, idx) => (
        <ToDoListItem
          key={item.todomyid}
          checked={item.is_done}
          index={idx}
          taskName={item.title}
        />
      ))}
      <br />
      <div className="text-center">
        <AddButton onClickButton={openModal} />
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          <TodoInput
            todos={todos}
            setTodos={setTodos}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </ToDoList>
  );
};

export default ToDos;
