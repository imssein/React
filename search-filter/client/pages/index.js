import React, {useState, useEffect} from 'react';
import Table from '../components/Table';
import { Users } from "../components/users";
import styles from "../styles/SearchForm.module.css";
import axios from "axios";

export default function Home() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const res = await axios.get(`http://localhost:3060?q={query}`)
        setData(res.data);
      };
      // 글자수가 0, 2개 미만일 때 계속 데이터를 받아오지 않도록
      if(query.length === 0 || query.length > 2) fetchUsers();
    }, [query]);


  // const keys = ["first_name", "last_name", "eamil"];

  // console.log(Users[0].first_name);
  // console.log(Users[0]["email"]);
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))

  // const search = (data) => {
  //   return (
  //       data.filter((item) =>
  //       keys.some((key) => item[key].toLowerCase().includes(query))
  //       )
  //   );
  // };
    if(!query){
      return (
        <div>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Search..."
            className="search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <p>검색중</p>
        </div>
      )
    }
  else{

  
  return (
    <div>
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
    <div>
    <Table data={data} />
    </div>
    </div>
  )
  }
}
