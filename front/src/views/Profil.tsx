import Navbar from '../components/Navbar';

function Profil() {

    async function userNameres() {
        try {
            const response = fetch('');
            const data = response
        }
    }

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        height: '100vh',
      }}
      className="content"
    >
        <h2>{localStorage.getItem('userName')}</h2>
    </div>
  );
}

export default Profil;
