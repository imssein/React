import React, { useState } from "react";
import { login } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <div>로그인 이미 함</div>;
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <input type="text" className="form-control" name="email" value={email} onChange={onChangeEmail} />
                <input type="password" className="form-control" name="password" value={password} onChange={onChangePassword} />
                <button>
                    Login
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
