import { memo } from "react";
import { Banner, Services } from "../../components";
function Home() {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Banner />
      <Services />
    </div>
  );
}

export default memo(Home);
