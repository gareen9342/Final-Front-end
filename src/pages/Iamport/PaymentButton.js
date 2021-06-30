import React from "react";
import TestService from "./testService"

const onClickPayment = (info, pg, pay_method="card") => {
    const { IMP } = window;
    IMP.init("imp77220765"); // 가맹점 식별코드

    // 결제 데이터 정의
    const data = {
        // pg: pg, // PG사 (선택항목)
        // pay_method: pay_method, // 결제수단 (필수항목)
        // merchant_uid: `mid_${new Date().getTime()}`, // 결제구분번호 (필수항목)
        // name: info.name, // 주문명 (필수항목)
        // amount: info.amount, // 금액 (필수항목)
        // buyer_tel: info.phone, // 구매자 전화번호 (필수항목)
        // buyer_email: info.email, // 구매자 이메일
        pg: "kakaopay", // PG사 (선택항목)
        pay_method: pay_method, // 결제수단 (필수항목)
        merchant_uid: `mid_${new Date().getTime()}`, // 결제구분번호 (필수항목)
        name: "테스트", // 주문명 (필수항목)
        amount: 1000, // 금액 (필수항목)
        buyer_tel: "01099558701", // 구매자 전화번호 (필수항목)
        buyer_email: "l4279625@gmail.com", // 구매자 이메일
    };

    IMP.request_pay(data, callback);
};

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const callback = async (response) => {
    const {
        success,
        error_msg,
        imp_uid,    // 고유 주문번호
        paid_amount,    // 결제 금액
        name, // 주문명
        pg_provider, // pg사
        pay_method, // 결제수단
        status,     // 상태(성공, 실패, 환불 등등)
    } = response;
    const paymentInfo = {
        // "paymentid" : imp_uid,
        // "paymentprice" : paid_amount,
        // "paymentdate" : paid_at,
        // "paymentcontent" : name,
        // "paymentkinds" : `${pg_provide}-${pay_method}`
        "paymentid" : imp_uid,
        "paymentprice" : paid_amount,
        "paymentdate" : `${year}-${month}-${date}`,
        "paymentcontent" : name,
        "paymentkinds" : `${pg_provider}-${pay_method}`,
        "memberid" : 9
    };

    console.log(paymentInfo);
    

    if (success) {
        const res = await TestService.insert(paymentInfo);
        console.log(res);
        alert("결제 성공");
    } else {
        alert(`결제 실패 : ${error_msg}`);
    }
};

export const PaymentButton = ({name, info, pg, pay_method="card"}) => (
    <button onClick={() => onClickPayment({info, pg, pay_method})}>{name}</button>
)
