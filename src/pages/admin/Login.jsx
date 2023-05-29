import { memo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "../../components";
import axiosConfig from "../../axiosConfig";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
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

  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      axiosConfig
        .post(`/api/user/login`, { email, password })
        .then((data) => {
          if (data.status === 200) {
            navigate(`/system`);
            toast.success(data?.data?.message);
          }
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
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-4/5 md:w-1/2 lg:w-1/3 p-4 rounded-md border border-gray-500"
      >
        <h2 className="text-center text-4xl uppercase py-2">Login Panel</h2>
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
        <button
          type="submit"
          className="bg-orange-400 text-white w-max px-8 py-2 mx-auto rounded-md"
        >
          Login
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
