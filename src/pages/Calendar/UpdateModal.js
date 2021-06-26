import React, { useState, useRef } from "react";
import { TextField } from '@material-ui/core';
import "./modal.css";



const UpdateModal = ({
  currentEvents,
  setCurrentEvents,
  open,
  close,
  header,
  clickInfo,
  createEventId,
}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header } = props;
  const [title, setTitle] = useState(title);
  const [content, setContent] = useState("");

  let today = new Date();

  const update = () => {
    const clickInfoApi = clickInfo.view.calendar;
    clickInfoApi.unselect(); // clear date selection
    const newSchedule = {
      id: createEventId(),
      title,
      content,
      start: clickInfo.startStr,
      end: clickInfo.endStr,
    };

    clickInfoApi.addEvent(newSchedule);
    setCurrentEvents([...currentEvents, newSchedule]);
    alert('일정이 수정 되었습니다!');
    close(true);
  };

  const remove = () => {
    if (confirm(`'${clickInfo.event.title}' 일정을 정말 삭제 하시겠습니까?`)) {
      clickInfo.event.remove();
    }
    close(true);
  }



  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main align="center">

            

            <TextField
              id="standard-basic"
              label="일정을 입력해주세요."
              defaultValue={clickInfo.event.title}
              onChange={(e) => {
                console.log(e.target.value);
                setTitle(e.target.value);
              }}
            />

            <br />
            <br />

            {console.log(clickInfo.event.startStr)}

            <TextField
              label="Start"
              type="datetime-local"
              defaultValue={clickInfo.event.startStr}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                //console.log(e.target.value);
                clickInfo.startStr = e.target.value;
              }} />

            <TextField
              label="End"
              type="datetime-local"
              defaultValue={clickInfo.event.endStr}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                console.log(e.target.value);
                clickInfo.endStr = e.target.value;
              }} />


            <br />



            <TextField
              id="standard-basic"
              label="내용을 입력해주세요."
              defaultValue={clickInfo.event.content}
              multiline={true}
              rows={5}
              rowsMax={50}

              onChange={(e) => {
                console.log(e.target.value);
                setContent(e.target.value);
              }}
            />
          </main>
          <footer>
          <button className="update" onClick={update}>
              {" "}
              update{" "}
            </button>
            &nbsp;
            <button className="remove" onClick={remove}>
              {" "}
              remove{" "}
            </button>
            &nbsp;
            <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default UpdateModal;
