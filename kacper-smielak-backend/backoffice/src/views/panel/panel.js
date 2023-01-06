import "./panel.scss";
import React, { createRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Panel = () => {
  const redirectTo = useNavigate();
  const token = sessionStorage.getItem("token");
  const categoryRef = createRef();
  const messageRef = createRef();

  useEffect(() => {
    if (!token) {
      redirectTo("/");
    }
  }, [token, redirectTo]);

  const [important, setImportant] = useState(false);

  const handleImportant = () => {
    setImportant(!important);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    redirectTo("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postApi = await axios
      .post("api/posts", {
        category: categoryRef.current.value,
        text: messageRef.current.value,
        important: important.value,
        token: token,
      })
      .catch((err) => err.response);
    if (!postApi.data.success) {
      console.log("no simea");
    }
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="form-label">
          Category:
          <input type="text" name="category" ref={categoryRef} />
        </label>
        <label className="form-label">
          Message:
          <input type="text" name="text" ref={messageRef} />
        </label>
        <div>
          <p>Is important?</p>
          <input
            type="checkbox"
            defaultChecked={important}
            onChange={handleImportant}
          />
        </div>
        <div className="post">
          <button type="submit" className="form-btn">
            Send
          </button>
        </div>
      </form>
      <div className="logout">
        <button onClick={logout} className="form-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Panel;
