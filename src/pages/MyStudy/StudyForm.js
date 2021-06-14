import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import MapSearchForm from "./MapSearchForm";
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
  const [address, setAddress] = useState("");
  const [addressId, setAddressId] = useState("");
  const [OnLineOffLine, onChangeOnlineOffLine] = useInput("ONLINE");
  // 고민중인 부분
  const [addressConfirmed, setAddressConfirmed] = useState(false);

  console.log(address, addressId);
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
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      ONLINE / OFFLINE <abbr title="required">*</abbr>
                    </label>
                    <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required="required"
                      value={OnLineOffLine}
                      onChange={onChangeOnlineOffLine}
                    >
                      <option value="ONLINE">ONLINE</option>
                      <option value="OFFLINE">OFFLINE</option>
                    </select>
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      오프라인 만남 장소 <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="오프라인 시 모임 장소"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      readOnly
                      value={address}
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                {/* end one row */}
                {OnLineOffLine === "OFFLINE" && (
                  <div className="md:flex md:flex-row md:space-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        지역 검색하기<abbr title="required">*</abbr>
                      </label>
                      <MapSearchForm
                        address={address}
                        setAddress={setAddress}
                        setAddressId={setAddressId}
                        setAddressConfirmed={setAddressConfirmed}
                        addressConfirmed={addressConfirmed}
                      />
                    </div>
                  </div>
                )}

                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                  <label className="font-semibold text-gray-600 py-2">
                    스터디 설명
                  </label>
                  <textarea
                    required=""
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    placeholder="스터디에 대한 정보를 간략히 작성해주세요 '-'"
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
                  <button className="mb-2 md:mb-0 bg-primary_dark px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io">
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
