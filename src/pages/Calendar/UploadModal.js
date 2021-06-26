import React, { useState, useRef } from "react";
import {TextField} from '@material-ui/core';
import "./modal.css";


const UploadModal = ({
  currentEvents,
  setCurrentEvents,
  open,
  close,
  header,
  selectInfo,
  createEventId,
}) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header } = props;
  const [title, setTitle] = useState("");
  const [contesnt, setContent] = useState("");
  

  const insert = () => {
    const selectInfoApi = selectInfo.view.calendar;
    selectInfoApi.unselect(); // clear date selection
    const newSchedule = {
      id: createEventId(),
      title,
      content: selectInfo.content,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    };

    selectInfoApi.addEvent(newSchedule);
    setCurrentEvents([...currentEvents, newSchedule]);
    alert('일정이 등록 되었습니다!');
    close(true);
  };

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
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="0000-00-00T00:00"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            console.log(e.target.value);
            setStart(e.target.value);
          }}/>

          
            일정 :
            <input
              label="일정"
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setTitle(e.target.value);
              }}
              placeholder="일정을 입력해주세요."
            /><br/>
            내용 : 
            <textarea onChange={(e) => {
                console.log(e.target.value);
                setContent(e.target.value);
              }}
              placeholder="내용을 입력해주세요."
              ></textarea>
          </main>
          <footer>
            <button className="insert" onClick={insert}>
              {" "}
              insert{" "}
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

export default UploadModal;
