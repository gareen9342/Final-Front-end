import React from "react";
import TestService from "./testService"

const onClickPayment = (pg, pay_method="card") => {
    const { IMP } = window;
    IMP.init("imp77220765"); // 가맹점 식별코드

    // 결제 데이터 정의
    const data = {
        pg: pg, // PG사 (선택항목)
        pay_method: pay_method, // 결제수단 (필수항목)
        merchant_uid: `mid_${new Date().getTime()}`, // 결제구분번호 (필수항목)
        name: "결제 테스트", // 주문명 (필수항목)
        amount: "1000", // 금액 (필수항목)
        custom_data: {
            name: "부가정보",
            desc: "세부 부가정보",
        },
        buyer_name: "임기원", // 구매자 이름
        buyer_tel: "01099558701", // 구매자 전화번호 (필수항목)
        buyer_email: "l4279625@gmail.com", // 구매자 이메일
        buyer_addr: "구천면로 365-13",
        buyer_postalcode: "05258",
    };

    IMP.request_pay(data, callback);
};

const callback = async (response) => {
    const {
        success,
        error_msg,
        imp_uid,    // 고유 주문번호
        paid_amount,    // 결제 금액
        paid_at,    // 결제 승인 시각
        name, // 주문명
        pg_provide, // pg사
        pay_method, // 결제수단
        status,     // 상태(성공, 실패, 환불 등등)
    } = response;

    const paymentInfo = {
        "paymentid" : imp_uid,
        "paymentprice" : paid_amount,
        "paymentdate" : paid_at,
        "paymentcontent" : name,
        "paymentkinds" : `${pg_provide}-${pay_method}`
    };

    

    if (success) {
        const res = await TestService.insert(paymentInfo);
        console.log(res);
        alert("결제 성공");
    } else {
        alert(`결제 실패 : ${error_msg}`);
    }
};


export const ShinYongCard = () => ( // 신용카드
    <button onClick={() => onClickPayment("html5_inicis")}>ShinyongCard</button>
);
export const GyeJwaEche = () => (   // 계좌이체
    <button onClick={() => onClickPayment("html5_inicis", "trans")}>GyejwaEche</button>
);
export const MuTongJang = () => ( // 가상계좌
    <button onClick={() => onClickPayment("html5_inicis", "vbank")}>MuTongJang</button>
);
export const KakaoPay = () => (     // 카카오페이
    <button onClick={() => onClickPayment("kakaopay")}>KakaoPay</button>
);
export const Payco = () => (        // 페이코
    <button onClick={() => onClickPayment("payco")}>Payco</button>
);