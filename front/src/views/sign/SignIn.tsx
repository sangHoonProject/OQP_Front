import { Link } from 'react-router-dom';
import Color from '../../styles/Color';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Auth from '../../api/Auth';

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

      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '100px'
        }}
      >
        <h1 style={{
          color: Color.puple,
          marginBottom: '20px',
          }}>Sign In</h1>

        <div style={{ marginBottom: '15px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#4682b4', // 짙은 파란색
            }}
          >
            E-mail
          </label>
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
              color: '#4682b4',
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
            backgroundColor: '#401eff', // 메인 파란색
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
                
            }}
          >
            이미회원이 아니신가요? 로그인
          </Link>
          <br />
          <Link
            to="/signup"
            style={{
              color: 'rgb(53, 53, 53)',
                
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
