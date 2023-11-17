import React, { useState } from "react";
import axios from "axios";
import styles from "./login.module.css";
// import Loading from "../loading/loading";

// "http://192.168.0.14:5000/api/login";
// ("/api/login");

function Login() {
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
//   const [loading, setLoading] = useState(false);

  const handleuser_idChange = (event) => {
    setUser_id(event.target.value);
  };

  const handleuser_pwChange = (event) => {
    setUser_pw(event.target.value);
  };
  const toSignup = () => {
    document.location.href = "/signup";
  };
  // const queryParams = `?user_id=${user_id}&user_pw=${user_pw}`;

  const handleLogin = () => {
    // setLoading(true);
    axios
      .post("http://localhost:5000/api/login", null,{
        params:{
          user_id : user_id,
          user_pw, user_pw,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.success);
        if (res.data.success === true) {
        //   setLoading(false);

          console.log(res.data.data[0].user_id);
          console.log(res.data.data[0].user_name);
          
          sessionStorage.setItem("user_id", res.data.data[0].user_id);
          sessionStorage.setItem("student_name", res.data.data[0].student_name);
          sessionStorage.setItem(
            "student_grade",
            res.data.data[0].student_grade
          );
          alert("로그인 성공");
          // document.location.href = "/";
        } else {
        //   setLoading(false);
          alert("아이디나 비번이 다릅니다");
        }
      })
      .catch((err) => {
        // setLoading(false);
        alert("아이디나 비번이 다릅니다");
      });
  };

  return (
    <div className={styles.loginwrap}>
      <img src="https://d1d7cbmyyzpb0j.cloudfront.net/images/plumcommerce.png" alt="" />
      <div>
        <input
          className={styles.loginform}
          type="text"
          id="user_id"
          name="user_id"
          placeholder="아이디"
          value={user_id}
          onChange={handleuser_idChange}
        />
      </div>
      <div>
        <input
          className={styles.loginform}
          type="password"
          id="user_pw"
          name="user_pw"
          placeholder="비밀번호"
          value={user_pw}
          onChange={handleuser_pwChange}
        />
      </div>
      <div>
        <button className={styles.buttonform} onClick={handleLogin}>
          로그인
        </button>
      </div>
      <div>
        <button className={styles.buttonform} onClick={toSignup}>
          회원가입
        </button>
      </div>
      {/* <Loading loading={loading} /> */}
    </div>
  );
}

export default Login;