import { memo } from "react";
import { Contact, Intro, NewFeed } from "../../components";

function LatestContent() {
  return (
    <div className="">
      <Intro />
      <NewFeed />
    </div>
  );
}

export default memo(LatestContent);
