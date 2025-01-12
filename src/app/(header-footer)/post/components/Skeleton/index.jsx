import {Skeleton} from "antd";

export const PostListSkeleton = () => {
  return <div className="rounded-xl border-[1px] border-[#ccc] p-[12px] cursor-pointer">
    <Skeleton />
  </div>
}

export const TopViewSkeleton = () => {
  return <div>
    <Skeleton />
  </div>
}
