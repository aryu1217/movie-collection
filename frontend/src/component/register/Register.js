import "./Register.css";

function Register() {
  return (
    <>
      <div className="register">
        <h1>회원가입창 테스트</h1>
        <div className="input-name">
          <input type="text" placeholder="이메일을 입력해주세요." />
        </div>
        <div className="errorMessageWrap">
          올바른 형식의 이메일주소를 입력해주세요.
        </div>
        <div className="input-psw">
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="errorMessageWrap">
          영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
        </div>
        <div className="input-psw2">
          <input type="password" placeholder="비밀번호 확인" />
        </div>
        <div className="register-button">
          <button>확인</button>
        </div>
      </div>
    </>
  );
}

export default Register;
