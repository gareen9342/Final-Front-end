import React from 'react'

const StudyComponent = () => {

  const renderCards = markersPosition.map((each, index) => {

    // datas

    return (
      <div>
        <div class="max-w-md mx-auto bg-green-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0 float-left">
              <div class="bg-blue"><br />이<br />미<br />지</div>
            </div>
            <div class="p-6">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">스터디</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">공부해^^</a>
              <p class="mt-2 text-gray-500">스터디 내용</p>
            </div>
          </div>
        </div>
      </div>)
  });

  return (

    <React.Fragment>
      <div style={{}} />
      {renderCards}
    </React.Fragment>

  )
}

export default StudyComponent
