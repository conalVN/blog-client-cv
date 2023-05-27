import { memo } from "react";

function SkeletonNew() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-40 flex justify-center gap-4">
        <div className="w-1/2 h-full animate-skeleton-image rounded-md"></div>
        <div className="w-1/3 h-full rounded-md">
          <div className="animate-pulse space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-40 flex flex-row-reverse justify-center gap-4">
        <div className="w-1/2 h-full animate-skeleton-image rounded-md"></div>
        <div className="w-1/3 h-full rounded-md">
          <div className="animate-pulse space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(SkeletonNew);
