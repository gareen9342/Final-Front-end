import React from 'react'

// 온라인 스터디
const OnStudyComponent = ({ studies }) => {

  // const [studies, setStudies] = useState([]);

  console.log(studies);
  // const renderCards = studies.map(item => {

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

  //   return (
  //     <div key={item.studygroupid} style={{ marginTop: '3rem' }}>{console.log(item)}
  //       <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex">
  //           <div className="md:flex-shrink-0 float-left">
  //             <div className="bg-blue">{`현재 인원 : ${item.studyusercnt}`}</div>
  //           </div>
  //           <div className="p-6">
  //             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.studygroupname}</div>
  //             <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">공부해^^</a>
  //             <p className="mt-2 text-gray-500">{item.studygroupdesc}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>)
  // });

  const renderCards = 'happy hackkk'

  return (

    <React.Fragment>
      <div style={{ marginTop: '2rem' }}>
        {renderCards}
      </div>
    </React.Fragment>

  )
}

export default OnStudyComponent
