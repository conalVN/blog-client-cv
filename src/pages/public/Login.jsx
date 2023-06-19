import { memo, useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputField } from "../../components";
import axiosConfig from "../../axiosConfig";
import AuthContext from "../../context/AuthContext";

const REGEX_USERNAME = /^[A-z][A-z0-9-_]{3,23}$/;
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGEX_PWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login({ isRegister }) {
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [rePassword, setRePassword] = useState("");
  const [validRePwd, setValidRePwd] = useState(false);
  const [rePwdFocus, setRePwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const { updateAuth } = useContext(AuthContext);
  const userRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    setValidName(REGEX_USERNAME.test(username));
  }, [username]);
  useEffect(() => {
    setValidEmail(REGEX_EMAIL.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(REGEX_PWD.test(password));
    setValidRePwd(password === rePassword);
  }, [password, rePassword]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!REGEX_EMAIL.test(email) || !REGEX_PWD.test(password)) {
      return;
    }
    try {
      axiosConfig
        .post(`/api/user/login`, { email, password }, { withCredentials: true })
        .then((data) => {
          updateAuth(data?.data);
          navigate("/", { replace: true });
          toast.success(data?.data?.message);
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          console.log(err);
        });
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !REGEX_USERNAME.test(username) ||
      !REGEX_EMAIL.test(email) ||
      !REGEX_PWD.test(password) ||
      !validRePwd
    ) {
      return;
    }
    try {
      axiosConfig
        .post(
          `/api/user/register`,
          { username, email, password },
          { withCredentials: true }
        )
        .then((data) => {
          if (data?.data?.success) {
            toast.success(data?.data?.message);
            setSuccess(true);
            setEmail("");
            setUsername("");
            setPassword("");
            setRePassword("");
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={isRegister ? handleRegister : handleLogin}
        className="flex flex-col gap-4 w-4/5 md:w-1/2 lg:w-1/3 p-4 rounded-md shadow"
      >
        <h2 className="text-center text-4xl uppercase py-2">
          {isRegister ? "Register Account" : "Login Account"}
        </h2>
        {isRegister && (
          <InputField
            forwardedRef={userRef}
            type="text"
            id="username"
            styles={`w-full mb-2 p-2 border-b-2 ${
              !username
                ? "border-gray-200"
                : validName
                ? "border-green-500"
                : "border-red-500"
            }`}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            valid={validName}
            required
          />
        )}
        <InputField
          forwardedRef={emailRef}
          type="text"
          id="email"
          styles={`w-full mb-2 p-2 border-b-2 ${
            !email
              ? "border-gray-200"
              : validEmail
              ? "border-green-500"
              : "border-red-500"
          }`}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          valid={validEmail}
          required
        />
        <InputField
          id="password"
          type="password"
          styles={`w-full mb-2 p-2 border-b-2 ${
            !password
              ? "border-gray-200"
              : validPwd
              ? "border-green-500"
              : "border-red-500"
          }`}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          valid={validPwd}
          required
        />
        {isRegister && (
          <InputField
            id="rePassword"
            type="password"
            styles={`w-full mb-2 p-2 border-b-2 ${
              !rePassword
                ? "border-gray-200"
                : validRePwd
                ? "border-green-500"
                : "border-red-500"
            }`}
            placeholder="Enter your re-password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            onFocus={() => setRePwdFocus(true)}
            onBlur={() => setRePwdFocus(false)}
            valid={validRePwd}
            required
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
