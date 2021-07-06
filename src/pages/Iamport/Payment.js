import React, { useEffect } from "react";
import { PaymentModal } from "./PaymentModal";

const Payment = () => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const info = {
    name: "프리미엄 기능",
    price: "1000",
    email: localStorage.getItem("email"),
    phone: "01099558701",
  }; // 주문명, 금액, 이메일, 전화번호 들어가야함

  return (
    <>
      <PaymentModal info={info} />
    </>
  );
};

export default Payment;
