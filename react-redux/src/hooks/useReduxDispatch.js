import { useContext } from "react";
import ReduxContext from "../contexts/reduxContext";

export default function useReduxDispatch(){
    const store = useContext(ReduxContext);
  
    return store.dispatch;
  }
  