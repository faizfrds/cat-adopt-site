"use client";

import { useRouter } from "next/navigation";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}


const ListItem: React.FC<ListItemProps> = ({image, name, href}) => {

    const router = useRouter();

    const onClick = () =>{
        //add authentication before push
        router.push(href);
    }

    return (
        <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 transiton pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                
            </div>

        </button>
      );
}
 
export default ListItem;