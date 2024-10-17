import { useState } from 'react';
import Navbar from '../components/Navbar';
import Change from './change';
import Userprofilcomponents from './userprofilcomponents';
import Modal from '../components/Modal'; // 모달 컴포넌트 import

function Profil() {
	const [toggle, setToggle] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

	function changeuser() {
		setToggle((prev) => !prev);
	}

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
				{toggle ? <Change /> : <Userprofilcomponents />}
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
						onClick={changeuser}
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
						onClick={() => setIsModalOpen(true)} // 모달 열기
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
			</div>

			{/* 모달 컴포넌트 */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</div>
	);
}

export default Profil;
