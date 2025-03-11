import Image from 'next/image'
import { FC } from 'react'

interface CategoryProps {
    img: string
    title: string
}

const Category: FC<CategoryProps> = ({ img, title }) => {
    return (
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-50 hover:opacity-100">
            <Image
                src={img}
                alt={`Category - ${title}`}
                width={20}
                height={20}
            />
            <span className="text-xs">{title}</span>
        </div>
    )
}

export default Category