import Image from "next/image";

import beach_01 from "@/public/beach_01.jpg"
import profile_img from "@/public/user.jpeg"
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

export default function PropertyDetailPage () {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full mb-4 h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    src={beach_01}
                    alt="Beach house"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom 
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src={profile_img}
                            alt="Profile image"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />

                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis voluptates fugit laboriosam sapiente mollitia, ex placeat vero necessitatibus odit ullam cupiditate animi commodi repellat. Ullam odit repudiandae aliquid repellat.
                    </p>

                </div>


                <ReservationSideBar />


            </div>
        </main>
        
    )
}