import { useState, useRef } from 'react';

function ForgotPassWord() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);

  async function ForgotPassWord() {
    const data = {
      email: email,
      user_id: userId,
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_KEY}/api/user/send-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
      let dap = await response.json()
    if(response.ok) {
        setResult(dap.message)
    } else {
        setResult(dap.message)
    }
  }

  function send() {
    if(emailRef.current && idRef.current) {
        if (emailRef.current.value == '' || idRef.current.value== '') {
            setResult('이메일이나 아이디 필드가 비어있습니다.');
        } else {
            setEmail(emailRef.current.value);
            setUserId(idRef.current.value);
            ForgotPassWord()
        }
        } else {
            setResult('입력필드를 불러오지 못했습니다.');
        }
  }

  return (
    <div style={{width : '100%', height : '100vh'}}>
        <div style={{width : '600px', textAlign : 'center', margin : 'auto', marginTop : '20vh',
        border : '1px solid gray',
        padding : '20px'
        }}>
            <h1 style={{marginBottom : '40px'}} className='cooki'>임시 비밀번호 발급</h1>
            <input type="email" placeholder="이메일" ref={emailRef} />
            <br />
            <input type="text" placeholder="아이디" ref={idRef} />
            <br />
            <button onClick={send}>이메일 보내기</button>
            <p>{result}</p>
        </div>
    </div>
  );
}

export default ForgotPassWord;