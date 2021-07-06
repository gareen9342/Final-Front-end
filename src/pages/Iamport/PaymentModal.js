import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import { PaymentButton } from "./PaymentButton";
import { TailwindInput } from "./tailwindUI/TailwindInput";
import "./Payment.css";

export const PaymentModal = ({ info }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);

  const width_100per = {
    width: "100%",
  };

  /* 모달 open, close */
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  /********************/

  /* onChange Function */
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  /*********************/

  return (
    <>
      <div>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded text-2xl font-bold"
        >
          Open Modal
        </button>
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          maskClosable={true}
          onClose={closeModal}
          bgColor={"rgba(0,0,0,0.3)"}
        >
          <div className="main-modal w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
            <div
              className="border border-blue-500 shadow-lg modal-container bg-white md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              style={width_100per}
            >
              <div className="modal-content py-4 text-left px-6">
                {/* Title */}
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold text-gray-500">
                    SWith 프리미엄 기능 결제
                  </p>
                  <div
                    className="modal-close cursor-pointer z-50"
                    onClick={closeModal}
                  >
                    <svg
                      className="fill-current text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </div>
                </div>
                {/* Body */}
                <div className="my-5 mr-5 ml-5 flex justify-center">
                  <form
                    action="{{url_for('default.add_caretaker', apartment_id = apartment.id)}}"
                    method="POST"
                    id="add_caretaker_form"
                    className="w-full"
                  >
                    <div className="">
                      {/* 결제명 */}
                      <TailwindInput id="names" title="결제명" content={info.name} readonly={true} />
                      {/* 가격 */}
                      <TailwindInput id="price" title="가격" content={info.price} readonly={true} />
                      {/* 핸드폰 번호 */}
                      <TailwindInput id="phone" title="핸드폰 번호" content={phone} onchange={phoneChange} />
                      <div className="">
                        <label htmlFor="phone" className="text-md text-gray-600">
                          핸드폰 번호
                        </label>
                      </div>
                      <div className="">
                        <input
                          type="text"
                          value={phone}
                          id="phone"
                          onChange={phoneChange}
                          autoComplete="off"
                          name="phone"
                          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          placeholder="Example. 0729400426"
                        />
                      </div>
                      {/* 이메일 */}
                      <div className="">
                        <label
                          htmlFor="email"
                          className="text-md text-gray-600"
                        >
                          이메일
                        </label>
                      </div>
                      <div className="">
                        <input
                          type="text"
                          value={email}
                          id="email"
                          onChange={emailChange}
                          autoComplete="off"
                          name="email"
                          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          placeholder="Example. 0729400426"
                        />
                      </div>
                      {/* 결제 유형 */}
                      {/* <div className="">
                        <label
                          htmlFor="payment"
                          className="text-md text-gray-600"
                        >
                          결제 유형
                        </label>
                      </div>
                      <div className="">
                        <input
                          type="number"
                          id="payment"
                          onChange={emailChange}
                          autoComplete="off"
                          name="payment"
                          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          placeholder="결제유형"
                        />
                        <div class="block">
                          <span class="text-gray-700">Radio Buttons</span>
                          <div class="mt-2">
                            <div>
                              <label class="inline-flex items-center">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  name="radio"
                                  value="1"
                                  checked
                                />
                                <span class="ml-2">Option 1</span>
                              </label>
                            </div>
                            <div>
                              <label class="inline-flex items-center">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  name="radio"
                                  value="2"
                                />
                                <span class="ml-2">Option 2</span>
                              </label>
                            </div>
                            <div>
                              <label class="inline-flex items-center">
                                <input
                                  type="radio"
                                  class="form-radio"
                                  name="radio"
                                  value="3"
                                />
                                <span class="ml-2">Option 3</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* -------- */}
                    </div>
                  </form>
                </div>
                {/* Footer */}
                <div className="flex justify-end pt-2 space-x-14">
                  <button
                    className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                    onClick={closeModal}
                  >
                    취소
                  </button>

                  <PaymentButton name="결제" info={info} pg="" />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
