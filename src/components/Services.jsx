import { memo } from "react";
import { services } from "../utils/constant";
import Service from "./Service";

function Services() {
  return (
    <div className="my-4">
      <h2 className="text-4xl text-center font-bold font-logo py-6">
        Our Features & Services
      </h2>
      <div className="flex justify-center gap-4">
        {services?.map((service) => {
          return <Service data={service} key={service?.title} />;
        })}
      </div>
    </div>
  );
}

export default memo(Services);
