import React, { useState } from "react";
import {
  chargeOptions,
  publicOptions,
  meetOptions,
  sortOptions,
  locationOptions,
} from "./StudyConfig";
import useInput from "../../hooks/useInput";
import MapSearchForm from "./MapSearchForm";
import SelectBox from "./SelectBox";
import { CheckLength } from "../../util/editor";
/**
 *
 * // TODO: 장소목록 : 온라인 / 오프라인 둘 다 들어가게 함 (검색할 때 필요함)
 * // TODO: 오프라인의 경우에 모임장소를 알아야 하기 때문에 스터디 생성할 때든 나중이든 선택적으로 모임장소를 정할 수 있게 함.
 * // TODO: studyname, (charge / nocharge), (public/private), 스터디의 종류(분류), (ONLINE / OFFLINE)
 *
 *
 */

const StudyForm = () => {
  const [studyName, setStudyName] = useState("");
  const [studyNameWarn, setStudyNameWarn] = useState("");
  const [charge, onChangeCharge] = useInput("유료");
  const [isPublic, onChangeIsPublic] = useInput("공개");
  const [password, onChangePassword] = useInput("");
  const [studySort, onChangeStudySort] = useInput("영어회화");
  const [studyLoc, onChangeStudyLoc] = useInput("서울");
  // address 세팅
  const [address, setAddress] = useState("");
  const [addressId, setAddressId] = useState("");
  const [OnLineOffLine, onChangeOnlineOffLine] = useInput("ONLINE");
  // 고민중인 부분
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [description, setDescription] = useState("");
  const [char, setChar] = useState(0);
  const onChangeStudyName = (e) => {
    setStudyName(e.target.value);
    if (studyName.length < 5) {
      setStudyNameWarn("스터디 그룹의 이름은 6자 이상으로 입력해주세요.");
    } else {
      setStudyNameWarn("");
    }
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
    const characters = CheckLength(e.target.value);
    setChar(characters);
  };

  const onClickSubmit = () => {
    const data = {
      study_group_name: studyName,
      study_group_desc: description,
      study_group_type: studySort,
      study_group_loc: studyLoc,
      study_group_addr_id: addressId,
      study_group_PW: password,
      study_group_addr: address,
    };
    console.log(data);
    // 채워져야 할 칸들이 비어져 있다면
    if (!studyName.length || !description.length) {
      return alert("모든 작성란을 입력해주세요.");
    }
    if (studyName.length < 6) {
      return alert("스터디 이름은 반드시 6자 이상으로 작성해주세요.");
    }
    //오프라인 선택시 장소를 선택완료 하지 않았다면
    if (OnLineOffLine === "OFFLINE" && !address.length) {
      return alert("오프라인 선택시 장소를 반드시 선택 완료해주세요.");
    }
    // 비공개 설정시 비밀번호를 작성하지 않았다면
    if (isPublic === "비공개") {
      return alert("비공개 설정시 비밀번호를 반드시 작성해주세요");
    }
  };
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
                      value={studyName}
                      onChange={onChangeStudyName}
                    />
                    {studyNameWarn && (
                      <p className="text-red-500 text-xs">{studyNameWarn}</p>
                    )}
                  </div>
                </div>
                {/* end one row */}
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      보증금 유무<abbr title="required">*</abbr>
                    </label>
                    <SelectBox
                      options={chargeOptions}
                      value={charge}
                      onChange={onChangeCharge}
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      스터디 분류 <abbr title="required">*</abbr>
                    </label>
                    <SelectBox
                      options={sortOptions}
                      onChange={onChangeStudySort}
                      value={studySort}
                    />
                  </div>
                </div>
                {/* end one row */}
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      공개 유무 <abbr title="required">*</abbr>
                    </label>
                    <SelectBox
                      options={publicOptions}
                      onChange={onChangeIsPublic}
                      value={isPublic}
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      지역선택<abbr title="required">*</abbr>
                    </label>
                    <SelectBox
                      options={locationOptions}
                      value={studyLoc}
                      onChange={onChangeStudyLoc}
                    />
                  </div>
                </div>

                {isPublic === "비공개" && (
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        비밀번호 설정하기 <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="비밀번호"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </div>
                  </div>
                )}

                {/* end one row */}
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      ONLINE / OFFLINE <abbr title="required">*</abbr>
                    </label>
                    <SelectBox
                      options={meetOptions}
                      value={OnLineOffLine}
                      onChange={onChangeOnlineOffLine}
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  {OnLineOffLine === "OFFLINE" && (
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
                      {address.length < 1 && (
                        <p className="text-red-500 text-xs ">
                          반드시 오프라인을 진행할 장소를 선택해주세요
                        </p>
                      )}
                    </div>
                  )}
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
                    required={true}
                    className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                    onChange={onChangeDescription}
                    placeholder="스터디에 대한 정보를 간략히 작성해주세요 '-'"
                  ></textarea>
                  <p className="text-xs text-gray-400 text-left my-3">
                    You inserted {char} characters
                  </p>
                </div>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    Cancel
                  </button>
                  <button
                    onClick={onClickSubmit}
                    className="mb-2 md:mb-0 bg-primary_dark px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:io"
                  >
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
