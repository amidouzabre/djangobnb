import Image from "next/image";
import icn_category from "@/public/icn_category.jpg"


const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-50 hover:opacity-100">
                <Image
                    src={icn_category}
                    alt="Category - Beach"
                />
            </div>
        </div>
    )
}

export default Categories;