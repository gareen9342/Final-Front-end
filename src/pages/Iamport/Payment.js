import React, { useEffect } from 'react';
import {PaymentButton} from "./PaymentButton";
import {PaymentModal} from "./PaymentModal";
import './Payment.css';

const Payment = (effect, deps) => {
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
        }
    }, []);

    const info = "";    // 주문명, 금액, 구매자 전화번호, 구매자 이메일 들어가야함
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();

    return (
        <>
            <PaymentModal/>
            <PaymentButton name="신용카드" info={info} pg="html5_inicis"/>
            <br/>
            <PaymentButton name="계좌이체" info={info} pg="html5_inicis" pay_method="trans"/>
            <br/>
            <PaymentButton name="가상계좌" info={info} pg="html5_inicis" pay_method="vbank"/>
            <br/>
            <PaymentButton name="카카오페이" info={info} pg="kakaopay"/>
            <br/>
            <PaymentButton name="페이코" info={info} pg="payco"/>
        </>
    );
}

export default Payment;