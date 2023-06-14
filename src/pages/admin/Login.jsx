import { memo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { InputText } from "../../components";
import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";

function Login({ isRegister }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleEmail() {
    if (email) {
      if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
        emailRef.current.style.borderColor = "red";
        toast.error("Email is not valid");
      } else {
        emailRef.current.style.borderColor = "green";
      }
    } else {
      emailRef.current.style.borderColor = "";
    }
  }
  // handle login
  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      axiosConfig
        .post(`/api/user/login`, { email, password }, { withCredentials: true })
        .then((data) => {
          dispatch(actions.login(true));
          // window.history.back();
          navigate("/");
          toast.success(data?.data?.message);
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          toast.error("The account password is incorrect. Please try again!");
          console.log(err);
        });
    }
  }

  // handle register
  function hanndleRegister(e) {
    e.preventDefault();
    if (email && password && username) {
      axiosConfig
        .post(`/api/user/register`, { username, email, password })
        .then((data) => {
          navigate("/login");
          toast.success("Register successful!");
          setUsername("");
          setEmail("");
          setPassword("");
          setRePassword("");
        })
        .catch((err) => {
          toast.error("The account password is incorrect. Please try again!");
          console.log(err);
        });
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={isRegister ? hanndleRegister : handleLogin}
        className="flex flex-col gap-4 w-4/5 md:w-1/2 lg:w-1/3 p-4 rounded-md shadow"
      >
        <h2 className="text-center text-4xl uppercase py-2">
          {isRegister ? "Register Account" : "Login Account"}
        </h2>
        {isRegister && (
          <InputText
            type="text"
            styles={`mb-2 p-2 border-b-2 border-gray-200`}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          ref={emailRef}
          placeholder="Enter your email"
          className="mb-2 p-2 border-b-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmail}
        />
        <InputText
          type="password"
          styles={`mb-2 p-2 border-b-2 border-gray-200`}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <InputText
            type="password"
            styles={`mb-2 p-2 border-b-2 border-gray-200`}
            placeholder="Enter your re-password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        )}
        <p className="py-2 text-end">
          <span className="">
            {isRegister ? "Đã có tài khoản?" : "Bạn chưa có tài khoản?"}
          </span>{" "}
          <Link
            to={isRegister ? "/login" : "/register"}
            className="underline text-orange-500"
          >
            {isRegister ? "Sign in" : "Sign up"}
          </Link>
        </p>
        <button
          type="submit"
          className="bg-orange-400 text-white w-max px-8 py-2 mx-auto rounded-md"
        >
          {isRegister ? "Register" : "Login"}
        </button>
        <span className="text-center py-4">
          Go to{" "}
          <Link to="/" className="underline uppercase hover:text-orange-400">
            website
          </Link>
        </span>
      </form>
    </div>
  );
}

export default memo(Login);
