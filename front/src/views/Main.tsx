import Navbar from '../components/Navbar';

function Main() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgb(193, 200, 242)',
        height: '100vh',
      }}
      className="content"
    >
      <Navbar />
      <h1>Main</h1>
      <div>
        <h1>안녕하세요 제이름은 김민서 입니다.</h1>
      </div>
    </div>
  );
}

export default Main;
