import { memo } from "react";
import { ThreeCircles } from "react-loader-spinner";

function LoadingPage() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-alpha z-50">
      <ThreeCircles
        height="100"
        width="100"
        color="#fb923c"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}

export default memo(LoadingPage);
