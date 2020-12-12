import React from 'react';
import logo from '../logo.svg';
function Profile(props){
    return (
    <div className="Comment">
      <div className="UserInfo">
          <img src={props.children} alt="anything"/>
        <div className="fullname">
          {props.FullName}
        </div>
      </div>
      <div className="bio">
        {props.Bio}
      </div>
      <div className="profession">
        {props.Profession}
      </div>
      <button onClick={() => props.handleName(`My name is `+ props.FullName)}>OK</button>
    </div>
    );
}
Profile.defaultProps = {
    FullName : "Default name",
    Bio: "Bio",
    Profession : "Profession",
    children: logo
}

export default Profile;