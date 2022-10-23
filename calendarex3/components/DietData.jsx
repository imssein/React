import axios from 'axios';
import moment from 'moment';
import React, {useState, useEffect} from 'react';

function DietData(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9090/v1/api/diets', {
            headers: {
                Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoeXVuQGdtYWlsLmNvbSIsImlhdCI6MTY2MzY0ODUyNCwiZXhwIjoxNjYzNjU0NTI0fQ.9j49IOtKrEh61q8wva-yO60g5FdzI4KVFSRcK6Br_VlkLyANz6Si4tq799bKYLovo0XGrcuQ_dUiKUDrx15Krw"
            }
        }).then(function(response) {
            console.log(response);
            setData(response)
        })
    })


    return (
        <div>
            
        </div>
    );
}

export default DietData;