import {Skeleton} from 'antd';

export default function SkeletonLoading({loop}:{loop:number}) {
    return <div className={"space-y-1"}>
        {
            new Array(loop).fill(0).map((_, index) => <Skeleton key={index}/>)
        }
    </div>
}
