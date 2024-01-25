import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const details = () => {
    const  { fid } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${fid}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>Detais : {fid}</p>
            <h3>{friend.name}</h3>
        </div>
    );
};

export default details;