import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <input type="email" />
      <input type="password" />
      <button>Sgin in</button>
      <Link to={"./signUp"}>대충 이거 누르면 회원가입</Link>
    </div>
  );
}

export default SignIn;
