
import React from 'react';
import './styles.css';
import profilePic from './Dummy_profile_pic.jpg'


function AccountSetting({ userData }) {
    return (
      <div className='account-setting'>
       <div className='account-settings'>
         <h2>Account Settings</h2>
          <hr/>
           </div>
           <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />   
        {userData ? (
          <div>
            <p>Full Name: {userData.fullName}</p>
            <p>Email: {userData.email}</p>
            <p>Lorem ipsum dolor sit Amet, conseterttrrerree and ajdnd fdsksd <br/> Phone Number: {userData.phoneNumber}
            &nbsp; Eltir sed, DIAm Nonumy <br/> EIRMOD Tempor Invidunt and Company Name: {userData.companyName}<br/>
           labore Et Dolore Magna Aliquyam Erat sed Diam</p>
          
          </div>
        ):(<p>please log in </p>)}
      </div>
      </div>
    );
  }



export default AccountSetting;
