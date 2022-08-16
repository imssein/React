import React from 'react';

function Table({data}) {
    if(data){
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
            
        </table>
       
    )
            }
            else{
                console.log("대기")
            }
}

export default Table;