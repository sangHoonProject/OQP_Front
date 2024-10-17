import { useState } from 'react';
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

function Signup() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState('');
  const data = {
    user_id: id,
    nickname: nickname,
    password: password,
    name: name,
    email: email,
  };

  async function signup() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/api/user/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
      setRes(result.message);

      if (response.ok) {
        console.log('성공');
        window.location.href = '/signin';
      } else {
        setRes(result.message);
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
        paddingTop: '3vh',
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
        <h1 style={{ marginBottom: '50px', fontSize: '40px' }}>Sign up</h1>

        <Input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요."
        />
        <br />

        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요."
        />
        <br />

        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <br />

        <Input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력하세요."
        />
        <br />

        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <br />
        <p>{res}</p>
        <Link to={'/signin'} style={{ color: 'black' }}>
          이미 회원이신가요? 로그인
        </Link>
        <p></p>
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
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
