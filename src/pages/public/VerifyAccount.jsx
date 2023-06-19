import { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosConfig from "../../axiosConfig";

function VerifyAccount() {
  const { token } = useParams();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosConfig
      .get(`/api/user/verify/${token}`)
      .then((data) => {
        setMsg(data?.data?.message);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [token]);
  return (
    <div className="w-full h-screen overflow-hidden">
      <section className="w-max h-auto shadow rounded-md p-4 mt-10 mx-auto flex items-center justify-center gap-4">
        <span>{msg ? msg : "Please confirm your email"}</span>
        <Link to="/login" className="underline text-orange-500">
          Sign in
        </Link>
      </section>
    </div>
  );
}

export default memo(VerifyAccount);
