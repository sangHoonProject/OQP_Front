import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Input = styled.input`
  font-size: 20px;
  padding: 5px;
  width: 70%;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 1px;
  margin-bottom: 50px;
`;

function ForgotPassword() {
  const [result, setResult] = useState('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleForgotPassword(email: string, userId: string) {
    console.log(email, userId);
    const data = {
      email: email,
      user_id: userId,
    };
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_API_KEY}/api/user/send-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    let dap = await response.json();
    setLoading(false);
    if (response.ok) {
      setResult(dap.message);
    } else {
      console.log(data);
      setResult(dap.message);
    }
  }

  function send() {
    if (emailRef.current && idRef.current) {
      const emaii = emailRef.current.value;
      const idd = idRef.current.value;

      if (emaii === '' || idd === '') {
        setResult('이메일이나 아이디 필드가 비어있습니다.');
      } else {
        handleForgotPassword(emaii, idd);
      }
    } else {
      setResult('입력필드를 불러오지 못했습니다.');
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
          position: 'relative',
        }}
      >
        <h1 style={{ marginBottom: '50px', fontSize: '40px' }}>
          비밀번호 발급
        </h1>

        <Input type="text" placeholder="아이디를 입력하세요." ref={idRef} />
        <br />

        <Input type="email" placeholder="이메일 입력하세요." ref={emailRef} />
        <br />
        <p>{result}</p>
        <div style={{ width: '60%', textAlign: 'left', paddingLeft: '20%' }}>
          <div style={{ marginBottom: '10px' }}></div>
          <Link to={'/signin'} style={{ color: 'black' }}>
            로그인 하러 가기
          </Link>

          {loading && <p>이메일 전송 중...</p>}
          <button
            onClick={send}
            style={{
              backgroundColor: 'white',
              border: '1px solid black',
              padding: '10px',
              position: 'absolute',
              right: '20%',
            }}
          >
            이메일 보내기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
