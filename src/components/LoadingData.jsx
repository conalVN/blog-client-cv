import { memo } from "react";
import { Oval } from "react-loader-spinner";

function LoadingData() {
  return (
    <Oval
      height={20}
      width={20}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}

export default memo(LoadingData);
