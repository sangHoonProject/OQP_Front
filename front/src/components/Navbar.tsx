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
      <div style={{ flex: '8', textAlign: 'left', marginTop: '25px', marginLeft: '50px' }}>
        <h2 className='yogiaddea'><i>OQP</i></h2>
      </div>

      <div style={{ flex: '1', textAlign: 'center', marginTop: '23px' }}>

        <input
          type="text"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: 'none',
            borderBottom: '2px solid black',
            fontSize: '18px',
            width: '300px',
            padding: '5px',
          }}
          placeholder='카테고리나 유저이름을 검색하세요.'
          className='yogiaddea'
        />
      </div>
      
      <div style={{ flex: '1', textAlign: 'right', marginTop: '27px' }}>
        <p className='yogiaddea'>글쓰기</p>
      </div>
      
      <div style={{ flex: '1', textAlign: 'right', marginTop: '25px', marginRight: '80px' }}>
        <p className='yogiaddea' style={{ cursor: 'pointer' }} onClick={setting}>
          {localStorage.getItem('nickname')}님 ▿
        </p>
      </div>
      
      <div style={{
        position: 'absolute',
        right: '80px',
        bottom: '-110px',
        border: '1px solid gray',
        padding: '13px',
        cursor: 'pointer',
        display: toggle,
      }}>
        <ul style={{ listStyleType: 'none' }}>
          <Link to={'/Profil'} style={{color : 'black', textDecoration : 'none'}}>
            <li className='cooki' style={{ marginBottom: '15px' }}>내 프로필</li>
          </Link>
          <div style={{ border: '1px solid gray' }}></div>
          <a onClick={re}>
          <li className='cooki' style={{ marginTop: '15px' }}>로그아웃</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
