import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './dummy-data';
import './Calendar.css';

export default class Calendar extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='calendar-app'>
        {this.renderSidebar()}
        <div className='calendar-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // 초기화/추가/변경/제거 이벤트 실행후 호출
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='calendar-app-sidebar'>
        <div className='calendar-app-sidebar-section'>
          <h2>설명</h2>
          <ul className='calendar-ul'>
            <li className='calendar-li'>날짜를 선택하면 일정을 추가할수 있습니다</li>
            <li className='calendar-li'>추가한 일정을 드래그하여 옮기거나 날짜를 조정할수 있습니다</li>
            <li className='calendar-li'>추가된 일정을 클릭하면 삭제할수 있습니다.</li>
          </ul>
        </div>
        <div className='calendar-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            주말 보기/안보기
          </label>
        </div>
        <div className='calendar-app-sidebar-section'>
          <h2>총 일정 ({this.state.currentEvents.length})</h2>
          <ul className='calendar-ul'>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  // 요일부분 클릭하면 발생하는 이벤트
  handleDateSelect = (selectInfo) => {
    let title = prompt('일정 제목을 추가해주세요!')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  // 일정을 클릭하면 발생하는 이벤트
  handleEventClick = (clickInfo) => {
    if (confirm(`'${clickInfo.event.title}' 일정을 정말 삭제 하시겠습니까?`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}
