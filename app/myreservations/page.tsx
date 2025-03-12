import Image from "next/image";

export default function MyReservationPage () {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">My reservations</h1>
            <div>
                <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                src='/beach_01.avif'
                                alt="Piscine house"
                                loading="lazy"
                                fill={true}
                                className="hover:scale-110 object-cover transition h-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-3 space-y-2">  
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p><strong>Check in date : </strong>14/02/2024</p>
                    </div>

                </div>
            </div>
        </main>
    )
}