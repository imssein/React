import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersPromise } from "../redux/actions";
import { useCallback } from "react";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

//   const start = useCallback(() => {}, [dispatch]);

//   const success = useCallback((data) => {}, [dispatch]);

//   const fail = useCallback((error) => {}, [dispatch]);

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get("https://api.github.com/users");
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise()); 
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
