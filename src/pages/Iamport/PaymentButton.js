import React from "react";

const onClickPayment = (pg, pay_method="card") => {
    const { IMP } = window;
    IMP.init("imp77220765"); // 가맹점 식별코드

    // 결제 데이터 정의
    const data = {
        pg: pg, // PG사 (선택항목)
        pay_method: pay_method, // 결제수단 (필수항목)
        merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
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

const callback = (response) => {
    const {
        success,
        error_msg,
        imp_uid,
        merchant_uid,
        pay_method,
        paid_amount,
        status,
    } = response;

    if (success) {
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
export const NaverPay = () => (     // 네이버페이
    <button onClick={() => onClickPayment("naverco")}>NaverPay</button>
);
export const Payco = () => (        // 페이코
    <button onClick={() => onClickPayment("payco")}>Payco</button>
);