import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [authToggle, setAuthToggle] = useState(false);
  const [c, setC] = useState("3 : 00");
  const [sec, setSec] = useState(180);
  const [stop, setStop] = useState(false);

  document.cookie = "user=John";
  useEffect(() => {
    let intervalId: number = 0;

    if (authToggle && !stop) {
      intervalId = window.setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 0) {
            clearInterval(intervalId);
            setAuthToggle(false);
            toast.error(<b>시간이 만료되었습니다.</b>);
            setC("3 : 00");
            return 0;
          }

          const newSec = prevSec - 1;
          let minute = Math.floor(newSec / 60);
          let second = newSec % 60;
          setC(
            `${minute < 10 ? `0${minute}` : minute} : ${
              second < 10 ? `0${second}` : second
            }`
          );
          return newSec;
        });
      }, 1000);
    }

    if (stop) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [authToggle, stop]);

  function check() {
    setStop(true);
    toast.success(<b>인증이 완료되었습니다.</b>);
  }

  return (
    <div>
      <label>E-mail</label>
      <br />
      <input type="email" disabled={authToggle} />
      <br />
      <button
        onClick={() => {
          setAuthToggle(!authToggle);
          setSec(180);
        }}
      >
        인증코드 {authToggle ? "취소" : "전송"}
      </button>
      {authToggle && <br />}
      {authToggle && <input type="email" />}
      {authToggle && c}
      {authToggle && <br />}
      {authToggle && <button onClick={check}>확인</button>}
      <br />
      <label>Nickname</label>
      <br />
      <input type="text" />
      <br />
      <label>Password</label>
      <br />
      <input type="password" />
      <br />
      <button>SignUp</button>
      <br />
      <Toaster />
    </div>
  );
}

export default SignUp;
