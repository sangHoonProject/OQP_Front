import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const ProfilP = styled.p`
  font-family: 'NoonnuBasicGothicRegular';
  margin-bottom: 22px;
  font-size: 18px;
`;

function Profil() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = [
    {
      userName: '김민서',
      userId: 'rlazmfdl',
      nickname: '김클이',
      email: 'rlazmfdl@gmail.com',
      password: 'ajjdowkdj@!',
    },
    {
      contents: 'title',
    },
  ];

  async function userNameres() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_KEY}/api/user/search/`
      );
      const data = await response.json();
      // setUserName(data[0].userName);
      // setUserId(data[0].userId);
      // setNickname(data[0].nickname);
      // setEmail(data[0].email);
      // setPassword(data[0].password);
    } catch (error) {}
  }

  useEffect(() => {
    // userNameres();
    setUserName(data[0].userName || '');
    setUserId(data[0].userId || '');
    setNickname(data[0].nickname || '');
    setEmail(data[0].email || '');
    setPassword(data[0].password || '');
  });

  return (
    <div
      style={{
        margin: 'auto',
        width: '90%',
        backgroundColor: 'rgb(255, 255, 255)',
      }}
    >
      <Navbar />
      <div
        style={{
          margin: '150px auto',
          textAlign: 'center',
          padding: '10px',
          width: '100%',
        }}
      >
        <h1
          className="yogiaddea"
          style={{
            marginBottom: '50px',
          }}
        >
          My Profil
        </h1>
        <ProfilP>Name : {userName}</ProfilP>
        <ProfilP>Id : {userId}</ProfilP>
        <ProfilP>nickname : {nickname}</ProfilP>
        <ProfilP>email : {email}</ProfilP>
        <ProfilP>password : {password}</ProfilP>
      </div>

      <h1
        className="yogiaddea"
        style={{ width: '100%', margin: 'auto', color: 'blue' }}
      >
        My Contents
      </h1>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Profil;
