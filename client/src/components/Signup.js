import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup({setUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password 
          }),
        })
        .then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
            navigate("/");
          }
        });
      }



  return (
    <div>Signup</div>
  )
}
