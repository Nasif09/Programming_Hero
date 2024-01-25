import React from 'react';
import { useHistory } from "react-router-dom";
  
const friend = (props) => {
    const {id, name, email} = props.friend;
    const history = useHistory();

    const friendStyle = {
      border: '1px solid purple',
      margin: '20px',
      padding: '20px',
      borderRadius: '20px'
}
const handleClick = (fid) => {
  history.push(`/friend/${id}`);
}

    return (
        <div style={friendStyle}>
          <h1>Name: {name}</h1>
          <p>email : {email}</p>
          {/* <p><Link to={`/friend/${id}`}><button>Details</button></Link></p> */}
          
          <button type="button" onClick={handleClick}>
            Go home
          </button>
        </div>
    );
};

export default friend;