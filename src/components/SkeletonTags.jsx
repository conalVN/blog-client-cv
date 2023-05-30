import { memo } from "react";
import { ThreeDots } from "react-loader-spinner";

function SkeletonTags() {
  return (
    <ThreeDots
      height="40"
      width="80"
      radius="9"
      color="#fb923c"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default memo(SkeletonTags);
