
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '하...',
    start: todayStr
  },
  {
    id: createEventId(),
    title: '실화냐',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'test',
    start: '2021-06-23T12:00:00',
    end: '2021-06-25T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
