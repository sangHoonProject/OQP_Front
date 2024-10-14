import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  let userName: string = '김민서';

  const [toggle, setToggle] = useState('none');

  function setting() {
    const set = toggle === 'none' ? 'block' : 'none';
    setToggle(set);
  }

  function re() {
    localStorage.clear();
    window.location.href = '/Signin';
  }

  return (
    <div
      style={{
        position: 'fixed',
        width: '90%',
        backgroundColor: 'rgba(231, 231, 231, 0.737)',
        backdropFilter: 'blur(3px)',
        left: '50%',
        top: '50px',
        transform: 'translate(-50%, -10px)',
        height: '80px',
        borderRadius: '12px',
        display: 'flex',
      }}
    >
      <div
        style={{
          flex: '6',
          textAlign: 'left',
          marginTop: '25px',
          marginLeft: '50px',
        }}
      >
        <h2 className="yogiaddea">
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            <i>OQP</i>
          </Link>
        </h2>
      </div>

      <div
        style={{ width: '300px', textAlign: 'center', marginTop: '23px' }}
        className="ban"
      >
        <input
          type="text"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: 'none',
            borderBottom: '2px solid black',
            fontSize: '18px',
            width: '100%',
            padding: '5px',
          }}
          placeholder="카테고리나 유저이름을 검색하세요."
          className="yogiaddea"
        />
      </div>

      <div
        style={{ width: '80px', textAlign: 'right', marginTop: '27px' }}
        className="ban"
      >
        <p className="yogiaddea">글쓰기</p>
      </div>

      <div
        style={{
          width: '80px',
          textAlign: 'right',
          marginTop: '25px',
          marginRight: '50px',
        }}
        className="ban"
      >
        <p
          className="yogiaddea"
          style={{ cursor: 'pointer' }}
          onClick={setting}
        >
          {localStorage.getItem('nickname')}님 ▿
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '80px',
          bottom: '-110px',
          border: '1px solid gray',
          padding: '13px',
          cursor: 'pointer',
          display: toggle,
        }}
      >
        <ul style={{ listStyleType: 'none' }}>
          <Link
            to={'/Profil'}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <li className="cooki" style={{ marginBottom: '15px' }}>
              내 프로필
            </li>
          </Link>
          <div style={{ border: '1px solid gray' }}></div>
          <a onClick={re}>
            <li className="cooki" style={{ marginTop: '15px' }}>
              로그아웃
            </li>
          </a>
        </ul>
      </div>
      <div
        className="menubar"
        style={{
          display: 'none',
        }}
      >
        <svg
          width="110"
          height="24"
          viewBox="0 0 105 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginTop: '25px',
            marginLeft: '150px',
          }}
        >
          <path
            d="M20 18H4M20 12H4M20 6H4"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <style>{`
        @media (max-width: 659px) {
        .ban {
          display : none;
        }

        .menubar {
          display : block !important;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
