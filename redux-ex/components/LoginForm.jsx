import Link from "next/link";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {loginAction} from '../reducers/user'
import useInput from "../hooks/useInput";

function LoginForm(props) {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangepassword] = useInput("");

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(id, password);
    dispatch(loginAction({id, password}));
  }, [id, password]);

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label>아이디</label>
        <input value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={onChangepassword}
          required
        />
      </div>

      <div>
      <button type="submit">로그인</button>
        <Link href="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
