import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background: white;
	padding: 20px;
	border-radius: 10px;
	max-width: 500px;
	width: 100%;
	text-align: center;
`;

const CloseButton = styled.button`
	background-color: #dc3545;
	color: white;
	padding: 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;

const Modal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const [email, setEmail] = useState('rlazmfdl@gmail.com');
	const [result, setResult] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	async function del() {
		if (email === inputRef.current?.value) {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_API_KEY}/api/user/delete`,
					{
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				);
				const result = await response.json();
				if (response.ok) {
					alert(result.message);
					onClose();
					window.location.href = '/signin';
				} else {
					alert(result.message);
				}
			} catch (error) {
				alert('삭제 도중 문제가 발생하였습니다.');
			}
		} else {
			console.log('이메일을 잘못 입력하셨습니다.');
			setResult('이메일을 잘못 입력하셨습니다.');
		}
	}

	async function userNameres() {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_KEY}/api/user/search/${localStorage.getItem('nickname')}`
			);
			const data = await response.json();
			setEmail(data.email);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		userNameres();
	}, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행

	// isOpen 조건에 따른 반환
	if (!isOpen) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<h2 style={{ marginBottom: '10px' }}>정말 회원을 탈퇴하시겠습니까?</h2>
				<p style={{ marginBottom: '30px' }}>
					탈퇴 후에는 모든 정보가 삭제됩니다.
				</p>
				<p style={{ marginBottom: '20px' }}>
					확인하려면 아래 회원님의 <br />
					이메일 : "{email}"를 적으세요.
				</p>
				<input
					type="text"
					placeholder="아이디를 입력하세요."
					style={{
						border: 'none',
						borderBottom: '1px solid black',
						padding: '5px',
						width: '80%',
						marginBottom: '20px',
					}}
					ref={inputRef}
					required
				/>
				<br />
				<p style={{ marginBottom: '20px' }}>{result}</p>
				<button
					style={{
						color: 'white',
						backgroundColor: '#0d6efd',
						padding: '10px',
						border: 'none',
						borderRadius: '10px',
						marginRight: '20px',
					}}
					onClick={onClose}
				>
					취소
				</button>
				<CloseButton
					onClick={() => {
						del();
					}}
				>
					회원 탈퇴
				</CloseButton>
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;
