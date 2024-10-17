/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfilP = styled.p`
  font-family: 'NoonnuBasicGothicRegular';
  margin-bottom: 10px;
  font-size: 18px;
`;

function Userprofilcomponents() {
  const [userName, setUserName] = useState('김민서');
  const [userId, setUserId] = useState('rlazmfdl');
  const [nickname, setNickname] = useState('rlazmfdl');
  const [email, setEmail] = useState('rlazmfdl@gmail.com');
  const [password, setPassword] = useState('a1122334455');

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
  return (
    <div>
      <img
        src="/images/userProfil.jpg"
        style={{
          width: '80px',
          borderRadius: '50%',
        }}
      />
      <ProfilP style={{ marginTop: '20px' }}>{nickname}</ProfilP>
      <ProfilP>{userName} 님</ProfilP>
      <ProfilP style={{ color: 'gray' }}>{email}</ProfilP>
    </div>
  );
}

export default Userprofilcomponents;
