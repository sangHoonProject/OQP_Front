import Navbar from '../components/Navbar';
import ViewContent from '../components/viewcontent';

function Main() {



  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        height: '100vh',
      }}
      className="content"
    >
      <Navbar />
      <ViewContent />
    </div>
  );
}

export default Main;
