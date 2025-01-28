import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Color from '../../styles/Color'
import Auth from '../../api/Auth'
import styled from 'styled-components'

const SignUpHeaders = styled.h1`
  @font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  font-family: 'NoonnuBasicGothicRegular';
`;

const Infotext = styled.label`
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


function SignUp() {
  const [userEmail, setUserEmail] = useState('')
  const [emailValidation, setEmailValidation] = useState('')
  const [nickname, setNickName] = useState('')
  const [password, setPassword] = useState('')

  async function emailCheck() {
    if (userEmail) {
      const email = {email: userEmail}
      toast.promise(
        Auth.sendEmail(email),
         {
           loading: '로딩 중',
           success: <b>이메일을 성공적을 전송하였습니다.</b>,
           error: <b>유효하지 않은 이메일 입니다.</b>,
         }
       );
    } else {
      toast.error(<b>이메일을 입력해주세요.</b>)
    }

  }

  async function signup() {
    const data = {
      "nickname": nickname,
      "email": userEmail,
      "password": password,
      "auth_code": emailValidation,
    }
    Auth.SignUp(data);
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
          backgroundColor: '#ffffff',
          borderRadius: '30px',
          border:'0.5px solid gray',
          padding: '50px',
          textAlign: 'center',
          marginBottom: '100px',
          zIndex:2
        }}
      >
        <SignUpHeaders style={{
          color: Color.black,
          marginBottom: '20px',
          }}>Sign Up</SignUpHeaders>

        <div style={{ marginBottom: '15px' }}>
          <Infotext
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            E-mail
          </Infotext>
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
            }}
            onChange={(e) => {
              setUserEmail(e.target.value)
            }}
          />
          <button onClick={emailCheck}>인증</button>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <Infotext
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            E-mail vaildatoin
          </Infotext>
          <input
            type="text"
            placeholder="이메일 인증코드를 입력하세요."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #000000',
              borderRadius: '5px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
            onChange={(e) => {
              setEmailValidation(e.target.value)
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <Infotext
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            Nick Name
          </Infotext>
          <input
            type="text"
            placeholder="닉네임을 입력하세요."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #000000',
              borderRadius: '5px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
            onChange={(e) => {
              setNickName(e.target.value)
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Infotext
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color:Color.black
            }}
          >
            Password
          </Infotext>
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
              setPassword(e.target.value)
            }}
          />
        </div>

        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor:Color.footerbg,
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={signup}
        >
          Sign In
        </button>

        <div style={{ marginTop: '10px' }}>
          <Link
            to="/SignIn"
            style={{
              color: Color.black,
              textDecoration:'none'
                
            }}
          >
            이미회원이 아니신가요? 로그인
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
