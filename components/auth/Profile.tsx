import React from 'react'

export type ProfileProp = {
  name : string
}

const Profile = (props: ProfileProp) => {
  return <div>Private profile components and name is {props.name} </div>;
};

export default Profile