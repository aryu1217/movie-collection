import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="login">
        <h1>로그인창 테스트</h1>
        <div className="input-name">
          <input type="text" placeholder="아이디" />
        </div>
        <div className="input-psw">
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="login-button">
          <button>로그인</button>
        </div>
        <div className="register-button">
          <button onClick={goToRegister}>회원가입</button>
        </div>
      </div>
    </>
  );
}

export default Login;
