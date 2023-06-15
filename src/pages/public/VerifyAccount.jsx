import { memo, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import { LoadingData } from "../../components";

function VerifyAccount() {
  const [searchParams] = useSearchParams();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosConfig
      .get("/api/user/verify", { params: { token: searchParams.get("token") } })
      .then((data) => {
        setMsg(data?.data?.message);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [searchParams]);
  return (
    <div className="w-full h-screen overflow-hidden">
      <section className="w-1/4 h-auto shadow rounded-md p-4 mt-10 mx-auto flex items-center justify-center gap-4">
        {loading ? (
          <LoadingData />
        ) : (
          <span className="material-symbols-outlined text-green-500">
            check
          </span>
        )}
        <span>{msg ? msg : "Please confirm your email"}</span>
        <Link to="/login" className="underline text-orange-500">
          Sign in
        </Link>
      </section>
    </div>
  );
}

export default memo(VerifyAccount);
