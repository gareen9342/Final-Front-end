import { Container } from 'postcss';
import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const clientId = '774130593672-28ta69qb3sukr3ib2v2u8rcq20qv2gh5.apps.googleusercontent.com';

const GoogleButton = () => {
    const [id ,setId] = useState('');
    const [name ,setName] = useState('');
    const [provider ,setProvider] = useState('');

    const responseGoogle = (res) => {
        location.href = ""
        console.log(res);
    }

    const responseFail = (err) => {
        console.error(err);
    }

    return(
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            />
        </>
    );
}

// const Container = styled.div`
//     display: flex;
//     flex-flow: column wrap;
// `

export default GoogleButton;

