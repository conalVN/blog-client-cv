import { memo } from "react";

function SkeletonPost() {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full my-4">
      <div className="flex md:flex-m lg:flex-1 flex-col gap-2 border border-orange-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="h-40 w-full animate-skeleton-image rounded-md"></div>
        <div className="animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-m lg:flex-1 flex-col gap-2 border border-orange-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="h-40 w-full animate-skeleton-image rounded-md"></div>
        <div className="animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 flex-col gap-2 border border-orange-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="h-40 w-full animate-skeleton-image rounded-md"></div>
        <div className="animate-pulse space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SkeletonPost);
