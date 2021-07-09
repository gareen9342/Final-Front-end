import React, { useState } from 'react';
import useInput from "../../../hooks/useInput";
import StudyService from "../../../services/studyService";

// 온라인 스터디
const OnStudyComponent = () => {

  const [studies, setStudies] = useState([]);
  const [searchText, onChangeSearchText] = useInput("");

  console.log(studies);

  // data
  // "studygroupid": 129,
  // "studygroupname": "asdasdadas",
  // "studygroupdesc": "스터디에 대한 정보를 간략히 작성해주세요 '-'asdasdasdad",
  // "studygroupoffline": "N",
  // "studygrouparea": null,
  // "studygrouplat": null,
  // "studygrouplng": null,
  // "studygroupaddr": null,
  // "studygroupadmin": "gareen9342@gmail.com",
  // "studygrouppw": null,
  // "studyusercnt": 0

  const onClickSearchButton = (searchText) => {
    // console.log(searchText)
    (async () => {
      try {
        const { data } = await StudyService.searchAllStudy(searchText);
        if (!!data) {
          console.log(data);
          setStudies(data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }

  const renderCards = studies.map(item => {

    return (
      <div key={item.studygroupid} style={{ marginTop: '3rem' }}>{console.log(item)}
        <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0 float-left">
              <div className="bg-blue">{`현재 인원 : ${item.studyusercnt}`}</div>
            </div>
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.studygroupname}</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">공부해^^</a>
              <p className="mt-2 text-gray-500">{item.studygroupdesc}</p>
            </div>
          </div>
        </div>
      </div>)
  });

  // const renderCards = 'happy hackkk';


  return (
    <>

      <input
        type="text"
        maxLength="30"
        value={searchText}
        placeholder="검색어를 입력하세요"
        required="required"
        type="text"
        className="appearance-none block w-80 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
        onChange={onChangeSearchText}
      />
      <button
        onClick={() => onClickSearchButton(searchText)}
        className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
        검색</button>

      <React.Fragment>
        <div style={{ marginTop: '2rem' }}>
          {renderCards}
        </div>
      </React.Fragment>

    </>

  )
}

export default OnStudyComponent
