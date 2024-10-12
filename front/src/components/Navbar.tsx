import { Link } from 'react-router-dom';

function Navbar() {
  let userName: string = '김민서';

  return (
    <div
      style={{
        position: 'fixed',
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.737)255)',
        backdropFilter: 'blur(3px)',
        left: '50%',
        top: '50px',
        transform: 'translate(-50%, -10px)',
        height: '80px',
        borderRadius: '12px',
        display: 'flex',
      }}
    >
      <div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
        <Link to={''}>{userName}</Link>
      </div>

      <div style={{ flex: '1', textAlign: 'center', marginTop: '23px' }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="6" stroke="#222222" stroke-width="1.2" />
          <path
            d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
            stroke="#2A4157"
            stroke-opacity="0.24"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            d="M20 20L17 17"
            stroke="#222222"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>

        <input
          type="text"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0)255)',
            border: 'none',
            borderBottom: '2px solid black',
            fontSize: '20px',
          }}
        />
      </div>
      <div style={{ flex: '1', textAlign: 'center', marginTop: '23px' }}>
        <h2>{localStorage.getItem('nickname')}님</h2>
      </div>
    </div>
  );
}

export default Navbar;