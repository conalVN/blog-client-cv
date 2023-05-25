import { memo } from "react";

function MenuMobile() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 shadow-md flex md:hidden items-center bg-white border-b border-orange-400 justify-between py-2 px-4">
      <span className="flex items-center justify-center">
        <span className="material-symbols-outlined">menu</span>
      </span>
      <div className="font-logo text-xl">Conal_</div>
    </div>
  );
}

export default memo(MenuMobile);
