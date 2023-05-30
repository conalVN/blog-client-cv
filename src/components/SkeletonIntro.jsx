import { memo } from "react";

function SkeletonIntro() {
  return (
    <div className="flex gap-2 px-4 h-[40vh] md:h-[70vh] max-h-[400px]">
      <div className="flex-6 h-full">
        <div className="relative h-full rounded-md animate-skeleton-image">
          <div className="absolute bottom-10 left-4 h-20 w-3/4 rounded-md">
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
      <div className="hidden md:inline flex-4 h-full">
        <div className="flex flex-col gap-2 h-full">
          <div className="relative w-full h-1/2 animate-skeleton-image rounded-md">
            <div className="absolute w-3/4 h-20 bottom-4 left-4 rounded-md">
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
          <div className="relative w-full h-1/2 animate-skeleton-image rounded-md">
            <div className="absolute w-3/4 h-20 bottom-4 left-4 rounded-md">
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
      </div>
    </div>
  );
}

export default memo(SkeletonIntro);
