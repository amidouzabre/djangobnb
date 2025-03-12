import Image from "next/image";
import Category from "./Category";

import icn_piscine from "@/public/icn_piscine.jpg"
import icn_beach from "@/public/icn_beach.jpg"
import icn_campagne from "@/public/icn_campagne.jpg"

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 gap-1">
            <Category key="1" img={icn_piscine.src} title="Piscine"/>
            <Category key="2" img={icn_beach.src} title="Beach"/>
            <Category key="3" img={icn_campagne.src} title="Campagne"/>
            <Category key="4" img={icn_piscine.src} title="Piscine"/>
            <Category key="5" img={icn_beach.src} title="Beach"/>
            <Category key="6" img={icn_campagne.src} title="Campagne"/>
        </div>
    )
}

export default Categories;