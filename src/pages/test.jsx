import React, { useState } from "react";

export default function Test() {
  const [data, setData] = useState({
    name: "",
    pass: "",
  });
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(false);
  function handleLogin(e) {
    e.preventDefault();
    let name = localStorage.getItem("name");
    let pass = localStorage.getItem("pass");
    if (name !== data.name) alert("Wrong name");
    else if (pass !== data.pass) alert("Wrong pass");
    else {
      setData({
        name: "",
        pass: "",
      });
      alert("Logged in");
      setUser(true);
    }
  }
  function handleSignup(e) {
    e.preventDefault();
    localStorage.setItem("name", data.name);
    localStorage.setItem("pass", data.pass);
    setData({
      name: "",
      pass: "",
    });
    setLogin(true);
  }
  return (
    <div>
      {!user ? (
        !login ? (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="border-2"
            />
            <br />
            <input
              type="text"
              name="pass"
              value={data.pass}
              onChange={(e) => {
                setData({ ...data, pass: e.target.value });
              }}
              className="border-2"
            />
            <br />
            <button className="border-2" type="submit">
              SignUp
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              className="border-2"
            />
            <br />
            <input
              type="text"
              name="pass"
              value={data.pass}
              onChange={(e) => {
                setData({ ...data, pass: e.target.value });
              }}
              className="border-2"
            />
            <br />
            <button className="border-2" type="submit">
              LogIn
            </button>
          </form>
        )
      ) : (
        <div>
          <p>Hello {localStorage.getItem("name")}</p>
        </div>
      )}
    </div>
  );
}
