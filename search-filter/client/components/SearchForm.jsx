import React, {useState, useEffect} from 'react';
import Table from './Table';
import { Users } from "../components/users";
import styles from "../styles/SearchForm.module.css";
import axios from "axios";

function SearchForm(props) {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await axios.get(`http://localhost:3060?q={query}`)
        setData(res.data);
      };
      fetchUsers()
    }, [query]);

  const keys = ["first_name", "last_name", "eamil"];

  // console.log(Users[0].first_name);
  // console.log(Users[0]["email"]);
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))

  const search = (data) => {
    return (
        data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
        )
    );
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  )
}

export default SearchForm;