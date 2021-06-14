import React from "react";
/**
 *
 * // TODO: 장소목록 : 온라인 / 오프라인 둘 다 들어가게 함 (검색할 때 필요함)
 * // TODO: 오프라인의 경우에 모임장소를 알아야 하기 때문에 스터디 생성할 때든 나중이든 선택적으로 모임장소를 정할 수 있게 함.
 * // TODO:
 *
 *
 *
 */

const StudyForm = () => {
  return (
    <div className="container mx-auto px-2 my-7 min-h-screen max-w-screen-md rounded">
      <div className="flex flex-col">
        <div className="bg-white shadow-md rounded-3xl p-5">
          <div className="flex flex-col sm:flex-row items-center">
            <h2 className="font-semibold text-lg mr-auto">스터디 생성</h2>
            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
          </div>
          <div className="mt-5">
            <div className="form">
              <div className="md:space-y-2 mb-3">
                {/* <label htmlFor="text-xs font-semibold text-gray-600 py-2">
                  Logo
                  <abbr classname="hidden" title="required">
                    *
                  </abbr>
                </label>
                <div className="flex items-center py-6">
                  <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                    <img
                      src=""
                      alt=""
                      className="w-12 h-12 mr-4 object-cover"
                    />
                    <label className="cursor-pointer" htmlFor="">
                      <span className="focus:outline-noneb text-white text-sm py-2px-4 rounded-full">
                        Browse <input type="file" class="hidden" />
                      </span>
                    </label>
                  </div>
                </div> */}
                {/* <div className="db-3 space-y-2 w-full text-xs">
                  <label
                    htmlFor=""
                    className="font-semibold text-gray-600 py-2"
                  >
                    company website
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-t-non border border-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="https://"
                    ></input>
                  </div>
                </div> */}
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      스터디 이름 <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="스터디 이름"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      ONLINE / OFFLINE <abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required="required"
                    >
                      <option value="">ONLINE</option>
                      <option value="">OFFLINE</option>
                    </select>
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                {/* end one row */}
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      결제 유무 <abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required="required"
                    >
                      <option value="">무료</option>
                      <option value="">유료</option>
                    </select>
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      공개 유무 <abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required="required"
                    >
                      <option value="">비공개</option>
                      <option value="">공개</option>
                    </select>
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                {/* end one row */}

                <div className="md:flex md:flex-row md:space-row md:space-x-4 w-full text-xs">
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2">
                      지역<abbr title="required">*</abbr>
                    </label>
                    <div className="flex w-full">
                      <input
                        placeholder="스터디 이름"
                        className="appearance-none block w-80 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className="mb-2 md:mb-0 bg-emerald-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io">
                        search
                      </button>
                    </div>

                    <p className="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                  <label className="font-semibold text-gray-600 py-2">
                    스터디 설명
                  </label>
                  <textarea
                    required=""
                    name="message"
                    id=""
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="스터디에 대한 정보를 간략히 작성해주세요 '-'"
                    spellcheck="false"
                  ></textarea>
                  <p className="text-xs text-gray-400 text-left my-3">
                    You inserted 0 characters
                  </p>
                </div>
                <p className="text-xs text-red-500 text-right my-3"></p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    Cancel
                  </button>
                  <button className="mb-2 md:mb-0 bg-emerald-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyForm;
