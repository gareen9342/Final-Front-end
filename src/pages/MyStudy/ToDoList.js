import React, { useState, useEffect, useCallback } from "react";
import { ToDoList, ToDoListItem, AddButton } from "./UI";
import Modal from "../../components/Modal";
import TodoInput from "./TodoInput";
import TodoService from "../../services/todoService";

const ToDos = () => {
  const [loading, setLoading] = useState(true);
  const [cbLoading, setCbLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [insertModalVisible, setInsertModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

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

  const closeModal = () => {
    if (insertModalVisible) {
      setInsertModalVisible(false);
    }
    if (updateModalVisible) {
      setUpdateModalVisible(false);
    }
  };

  const toggleTodo = async (todoid) => {
    console.log(todoid);
    if (!cbLoading) {
      try {
        setCbLoading(true);
        const { data } = await TodoService.toggleTodo(todoid);
        if (data.success === "true") {
          todoid = +todoid;
          const tempArr = todos.map((x) => {
            if (x.todomyid === todoid) {
              const temp = x;
              temp.isdone = x.isdone === 0 ? 1 : 0;
              return temp;
            } else {
              return x;
            }
          });
          setTodos(tempArr);
        } else {
          alert("실패!");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCbLoading(false);
      }
    }
  };
  const onClickAddButton = () => {
    setInsertModalVisible(true);
  };

  const onInsertTodo = useCallback(
    async (todoData) => {
      try {
        const { data } = await TodoService.insertMyTodo(
          todoData,
          localStorage.getItem("email")
        );

        console.log(data);
        if (data.success == "true") {
          alert("할일 추가 성공");
          setTodos([...todos, data.todo]);
          setInsertModalVisible(false);
        } else {
          alert("할일을 추가하는 데에 오류발생");
        }
      } catch (err) {
        console.error(err);
      }
    },
    [todos]
  );
  return (
    <ToDoList>
      {loading && "loading..."}
      {!loading && !todos.length && "할일이 아직 없습니다."}
      {todos.map((item, idx) => (
        <ToDoListItem
          key={item.todomyid}
          todoid={item.todomyid}
          checked={item.isdone === 1}
          index={idx}
          taskName={item.title}
          toggleTodo={toggleTodo}
        />
      ))}
      <br />
      <div className="text-center">
        <AddButton onClickButton={onClickAddButton} />
      </div>
      {insertModalVisible && (
        <Modal
          visible={insertModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          <TodoInput onClickAction={onInsertTodo} closeModal={closeModal} />
        </Modal>
      )}
    </ToDoList>
  );
};

export default ToDos;
