import React from "react";
/**
 *
 * // TODO: 장소목록 : 온라인 / 오프라인 둘 다 들어가게 함 (검색할 때 필요함)
 * // TODO: 오프라인의 경우에 모임장소를 알아야 하기 때문에 스터디 생성할 때든 나중이든 선택적으로 모임장소를 정할 수 있게 함.
 *
 *
 *
 *
 */
const StudyForm = () => {
  return (
    <div className="container mx-auto px-2 my-7 min-h-screen max-w-screen-md border border-gray-300 rounded">
      <div className="py-12">
        <h2 className="my-1 text-primary text-2xl font-bold">
          스터디 생성하기
        </h2>
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <div className="block">
              <span className="text-gray-500">스터디 이름</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-200 focus:gray-200 "
                placeholder=""
              />
            </div>
            <div className="flex justify-between">
              <div className="w-50">
                <span className="text-gray-500">스터디 종류</span>
                <select className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-200 focus:gray-200 ">
                  <option>IT, 개발</option>
                  <option>어학/영어</option>
                  <option>디자인</option>
                </select>
              </div>
              <div className="w-50">
                <span className=" text-gray-500">결제 유무</span>
                <select className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-200 focus:gray-200 ">
                  <option>유료 가입</option>
                  <option>무료 가입</option>
                </select>
              </div>
            </div>
            <div className="block">
              <span className="text-gray-700">공개 유무</span>
              <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-200 focus:gray-200 ">
                <option>공개</option>
                <option>비공개</option>
              </select>
            </div>
            <div className="block">
              <span className="text-gray-700 block">스터디 지역</span>
              <input
                type="text"
                className="mt-1  rounded-md border-gray-300 shadow-sm focus:border-gray-200 focus:gray-200 "
                placeholder=""
              />
              <button className="bg-red-500 hover:bg-red-700">검색</button>
            </div>
            <div className="block">
              <div className="block">스터디 설명</div>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-200"
                rows="3"
              ></textarea>
            </div>
            <div className="block">
              <div className="mt-2">
                <div>
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 shadow-sm focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2">
                      Email me news and special offers
                    </span>
                  </div>
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
