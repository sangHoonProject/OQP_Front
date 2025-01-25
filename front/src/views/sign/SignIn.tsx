import { Link } from 'react-router-dom';
import Color from '../../styles/Color';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Auth from '../../api/Auth';
import '../../styles/Fonts.css';
import styled from 'styled-components';


const SignInHeaders = styled.h1`
  @font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  font-family: 'NoonnuBasicGothicRegular';
`;

const Email = styled.label`
  @font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  font-family: 'NoonnuBasicGothicRegular';
`;

const Oqptext = styled.div`
  @font-face {
    font-family: 'EliceDigitalBaeum_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
font-family: 'EliceDigitalBaeum_Bold';
`;

// const Link = styled.`
//   @font-face {
//     font-family: 'Paperlogy-8ExtraBold';
//     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
//     font-weight: 800;
//     font-style: normal;
// }
// font-family: 'Paperlogy-8ExtraBold';
// `;

function SignIn() {
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')



  function signIn() {
    const userInfo = {
      email: email,
      password: passWord,
    } 
    
    toast.promise(
        Auth.SignIn(userInfo),
        {
          loading: '로그인 중',
          success: <b>로그인 성공!</b>,
          error: <b>이메일나 비밀번호를 잘못 적었습니다.</b>,
        }
        );
      
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor:Color.sectionbg
      }}
    >
      <Oqptext style={{
                fontSize:'400px',
                textAlign:'center',
                zIndex:0,
                position:'fixed',
                color:Color.white,
                lineHeight:'400px'
            }}>O  Q  P.</Oqptext>
      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          backgroundColor:Color.white,
          borderRadius: '30px',
          padding: '50px',
          textAlign: 'center',
          marginBottom: '100px',
          border:'0.5px solid gray',
          zIndex:'3'
        }}
      >
        <SignInHeaders style={{
          color: Color.black,
          marginBottom: '50px',
          }}>Sign In</SignInHeaders>

        <div style={{ marginBottom: '15px' }}>
          <Email
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            E-mail
          </Email>
          <input
            type="email"
            placeholder="이메일을 입력하세요."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #000000',
              borderRadius: '5px',
              boxSizing: 'border-box',
              outline: 'none',
              color:Color.footerbg
            }}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>


        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #000000',
              borderRadius: '5px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
            onChange={(e) => {
              setPassWord(e.target.value)
            }}
          />
        </div>

        <button
          style={{
            marginTop: '20px',
            width: '100%',
            padding: '10px',
            backgroundColor:Color.footerbg,
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={(signIn)}
        >
          Sign In
        </button>

        <div style={{ marginTop: '10px' }}>
          <Link
            to="/SignUp"
            style={{
              color: 'rgb(53, 53, 53)',
              textDecoration:'none',
              lineHeight:'50px'
            }}
          >
            이미회원이 아니신가요? 로그인
          </Link>
          <br />
          <Link
            to="/signup"
            style={{
              color: 'rgb(53, 53, 53)',
              textDecoration:'none',
              lineHeight:'50px'
            }}
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
