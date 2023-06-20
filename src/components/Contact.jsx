import { memo, useEffect, useState } from "react";
import { InputField, Button } from "../components";
import image from "../source/images/contact.png";
const REGEXT_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    setValidEmail(REGEXT_EMAIL.test(email));
  }, [email, name]);
  const handleSubmit = () => {};
  return (
    <div className="flex">
      <div className="flex-6 flex flex-col gap-4 w-full p-10">
        <h2 className="text-2xl font-bold">
          A front-end web development newsletter that sparks joy
        </h2>
        <p className="w-full text-lg">
          My goal with this blog is to create helpful content for front-end web
          devs, and my newsletter is no different! I'll let you know when I
          publish new content, and I'll even share exclusive newsletter-only
          content now and then.
        </p>
        <span className="mb-4">No spam, unsubscribe at any time.</span>
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <InputField
            label="First Name"
            styles="p-1 border-b border-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email"
            styles="p-1 border-b border-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            title="Subscribe"
            styles={`text-white py-2 px-4 rounded-lg font-bold ${
              name && validEmail ? "bg-orange-500" : "bg-orange-300"
            }`}
          />
        </form>
      </div>
      <div className="flex-4">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default memo(Contact);
