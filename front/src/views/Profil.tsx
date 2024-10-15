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
        <div>
          <button
            style={{
              color: 'white',
              backgroundColor: '#0d6efd',
              fontFamily: 'NoonnuBasicGothicRegular',
              padding: '10px',
              border: 'none',
              borderRadius: '10px',
              marginRight: '20px',
            }}
          >
            회원 정보 수정
          </button>
          <button
            style={{
              color: 'white',
              backgroundColor: '#dc3545',
              fontFamily: 'NoonnuBasicGothicRegular',
              padding: '10px',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            회원 탈퇴하기
          </button>
        </div>
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
