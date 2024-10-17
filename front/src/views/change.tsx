import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Inputstyle = styled.input`
  font-family: 'NoonnuBasicGothicRegular';
  border: none;
  font-size: 17px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

function Change() {
  const [userName, setUserName] = useState('김민서');
  const [userId, setUserId] = useState('rlazmfdl');
  const [nickname, setNickname] = useState('rlazmfdl');
  const [email, setEmail] = useState('rlazmfdl@gmail.com');
  const [password, setPassword] = useState('a1122334455');
  const [result, setResult] = useState('');

  const NameRef = useRef<HTMLInputElement>(null);
  const IdRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function userNameres() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/api/user/search/${localStorage.getItem('nickname')}`
      );
      const data = await response.json();
      console.log(data);
      setUserName(data.name);
      setUserId(data.userId);
      setNickname(data.nickname);
      setEmail(data.email);
      setPassword(data.password);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userNameres();
  });

  async function changes() {
    const data = {
      user_id: IdRef.current?.value,
      password: passwordRef.current?.value,
      nickname: nicknameRef.current?.value,
      name: NameRef.current?.value,
      email: emailRef.current?.value,
    };
    try {
      const response2 = await fetch(
        `${process.env.REACT_APP_API_KEY}/api/user/modify`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(data),
        }
      );

      const json = await response2.json();
      if (response2.ok) {
        setResult('변경이 완료되었습니다.');
      } else {
        setResult(json.message);
      }
    } catch (error) {
      setResult('변경하는 도중 오류가 생겼습니다.');
    }
  }

  return (
    <div>
      <label htmlFor="" style={{ textAlign: 'center' }}>
        이름 &nbsp; &nbsp; &nbsp; &nbsp; :
      </label>
      <Inputstyle
        type="text"
        placeholder="userName"
        defaultValue={userName}
        ref={NameRef}
      />
      <br />
      <label htmlFor="">아이디 &nbsp; &nbsp;: </label>
      <Inputstyle
        type="text"
        placeholder="userId"
        defaultValue={userId}
        ref={IdRef}
      />
      <br />
      <label htmlFor="">닉네임 &nbsp; &nbsp;: </label>
      <Inputstyle
        type="text"
        placeholder="nickname"
        defaultValue={nickname}
        ref={nicknameRef}
      />
      <br />
      <label htmlFor="">이메일 &nbsp; &nbsp;: </label>
      <Inputstyle
        type="text"
        placeholder="email"
        defaultValue={email}
        ref={emailRef}
      />
      <br />
      <label htmlFor="">비밀번호 : </label>
      <Inputstyle
        type="text"
        placeholder="password"
        defaultValue={password}
        ref={passwordRef}
      />
      <br />
      <p></p>
      <button
        onClick={changes}
        style={{
          color: 'white',
          backgroundColor: '#28a745',
          fontFamily: 'NoonnuBasicGothicRegular',
          padding: '10px',
          border: 'none',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      >
        변경사항 저장하기
      </button>
    </div>
  );
}

export default Change;
