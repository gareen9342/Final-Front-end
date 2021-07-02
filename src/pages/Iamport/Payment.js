import React, { useEffect } from 'react';
import {ShinYongCard, GyeJwaEche, MuTongJang, KakaoPay, Payco} from "./PaymentButton";

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

    return (
        <>
            <ShinYongCard/>
            <br/>
            <GyeJwaEche/>
            <br/>
            <MuTongJang/>
            <br/>
            <KakaoPay/>
            <br/>
            <Payco/>
        </>
    );
}

export default Payment;