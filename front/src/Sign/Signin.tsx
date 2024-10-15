import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Input = styled.input`
  font-size: 20px;
  padding: 5px;
  width: 70%;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 1px;
  margin-bottom: 50px;
`;

function Signin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState('');
  const data = {
    user_id: id,
    password: password,
  };

  async function signup() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/api/user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
      localStorage.setItem('nickname', result.nickname);
      console.log(result);
      setRes(result.errorMsg);

      if (response.ok) {
        console.log('성공');
        window.location.href = './';
      } else {
        console.log('에러');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(160, 95, 240)',
        paddingTop: '16vh',
        position: 'fixed',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '60%',
          margin: '60px auto',
          boxShadow: '0px 5px 4px 5px rgba(72, 72, 72, 0.606)',
          textAlign: 'center',
          boxSizing: 'border-box',
          padding: '60px',
          borderRadius: '20px',
          paddingTop: '30px',
        }}
      >
        <h1 style={{ marginBottom: '50px', fontSize: '40px' }}>Sign in</h1>

        <Input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요."
        />
        <br />

        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <br />
        <p>{res}</p>
        <div style={{width : '60%', textAlign : 'left',paddingLeft : '20%'}}>
            <div style={{marginBottom : '10px'}}>
        <Link to={'/Signup'} style={{ color: 'black', textAlign : 'left'}}>
          회원이 아니신가요? 회원가입
        </Link> <br/>
        </div>
        <Link to={'/forgotpassword'} style={{ color: 'black'}}>
            비밀번호를 잊으셨나요?
        </Link>
        </div>
        <button
          onClick={signup}
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            fontWeight: '600',
            fontSize: '16px',
            padding: '15px',
            borderRadius: '50px',
            marginLeft: '40%',
            color: 'green',
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Signin;
