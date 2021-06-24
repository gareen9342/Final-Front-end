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
import StudyService from "../../services/studyService";
import { Container, Form, Row, Box } from "./UI";

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
  const [isOffline, onChangeisOffline] = useInput("N");
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
      studygroupname: studyName,
      studygroupdesc: description,
      studygroupoffline: studySort,
      studygrouploc: studyLoc,
      studygroupaddrid: addressId,
      studygroupaddr: address,
      studygrouppw: password,
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
    if (isOffline === "OFFLINE" && !address.length) {
      return alert("오프라인 선택시 장소를 반드시 선택 완료해주세요.");
    }
    // 비공개 설정시 비밀번호를 작성하지 않았다면
    if (isPublic === "비공개" && !password.length) {
      return alert("비공개 설정시 비밀번호를 반드시 작성해주세요");
    }
    const res = StudyService.uploadStudy(data);
    console.log("res = ", res);
  };
  return (
    <Container>
      <div className="flex flex-col sm:flex-row items-center">
        <h2 className="font-semibold text-lg mr-auto">스터디 생성</h2>
        <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
      </div>
      <Form>
        <Row>
          <Box label={"스터디 이름"}>
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
          </Box>
        </Row>
        <Row>
          <Box label={"보증금 유무"} required={true}>
            <SelectBox
              options={chargeOptions}
              value={charge}
              onChange={onChangeCharge}
            />
          </Box>
          <Box label={"스터디 분류"} required={true}>
            <SelectBox
              options={sortOptions}
              onChange={onChangeStudySort}
              value={studySort}
            />
          </Box>
        </Row>
        <Row>
          <Box label={"공개 유무"} required={true}>
            <SelectBox
              options={publicOptions}
              onChange={onChangeIsPublic}
              value={isPublic}
            />
          </Box>
          <Box label={"지역 선택"} required={true}>
            <SelectBox
              options={locationOptions}
              value={studyLoc}
              onChange={onChangeStudyLoc}
            />
          </Box>
        </Row>
        {isPublic === "비공개" && (
          <Row>
            <Box label={"비밀번호 설정하기"}>
              <input
                placeholder="비밀번호"
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                type="password"
                value={password}
                onChange={onChangePassword}
              />
            </Box>
          </Row>
        )}

        {/* end one row */}
        <Row>
          <Box label={"ONLINE / OFFLINE"} required={true}>
            <SelectBox
              options={meetOptions}
              value={isOffline}
              onChange={onChangeisOffline}
            />
          </Box>
          {isOffline === "Y" && (
            <Box label={"오프라인 만남 장소"}>
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
            </Box>
          )}
        </Row>
        {/* end one row */}
        {isOffline === "Y" && (
          <Row>
            <Box label={"지역 검색하기"} required={true}>
              <MapSearchForm
                address={address}
                setAddress={setAddress}
                setAddressId={setAddressId}
                setAddressConfirmed={setAddressConfirmed}
                addressConfirmed={addressConfirmed}
              />
            </Box>
          </Row>
        )}
        <Row>
          <Box label={"스터디 설명"}>
            <textarea
              required={true}
              className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
              onChange={onChangeDescription}
              placeholder="스터디에 대한 정보를 간략히 작성해주세요 '-'"
            ></textarea>
            <p className="text-xs text-gray-400 text-left my-3">
              You inserted {char} characters
            </p>
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
          </Box>
        </Row>
      </Form>
    </Container>
  );
};

export default StudyForm;
