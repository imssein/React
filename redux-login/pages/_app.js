import "bootstrap/dist/css/bootstrap.css";
import store from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../actions/auth";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      { currentUser && (
        <div>
          <Link href="/user">사용자</Link>
        </div>
      )} 
      { currentUser ? (
        <div>
          <Link href="/profile">프로필</Link>
          <button onClick={logOut}>로그아웃</button>
        </div>
      ) : (
        <div>
          <Link href="/login">로그인</Link>
          <Link href="/register">회원가입</Link>
        </div>
      )}
    </Provider>
  );
}

export default MyApp;
