import Navbar from '../components/Navbar';

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
		</div>
	);
}

export default Main;