import React, { useState } from 'react';
import styled from "styled-components"
import './modal.css';


const UpdateModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const update = () => {
    let data = {
      date: datetime,
      title: schedule,
      completed: false,
    };
    setCalendarList([...calendarList, data]);
  }


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}> &times; </button>
          </header>
          <main>
            <input
              type="datetime-local"
              onChange={(e) => {
                console.log(e.target.value);
                setDatetime(e.target.value);
              }}
            />

            <input
              type="text"
              value={schedule}
              onChange={(e) => {
                console.log(e.target.value);
                setSchedule(e.target.value);
              }}
            />



          </main>
          <footer>
            <button className="update" onClick={update}> update </button>&nbsp;
            <button className="close" onClick={close}> close </button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}


const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: silver;
  z-index: 10;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 700px; 
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  padding: 30px;
  z-index: 20;
  opacity: 1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  @media (max-width:700px){
    width: 70vw;
  }
  @media (max-width:450px){
    width: 100vw;
  }
`
const ExitBtn = styled.button`
  position: fixed;
  right: 5px;
  top: 5px;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width:450px){
    right: 30px;
  }
`
const Text = styled.div`
  font-size: 20px
`


export default UpdateModal;