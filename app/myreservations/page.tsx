import Image from "next/image";

export default function MyReservationPage () {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My reservations</h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    
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

                    <div className=" col-span-1 md:col-span-3">  
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date : </strong>14/02/2024</p>
                        <p className="mb-2"><strong>Check out date : </strong>16/02/2024</p>
                        <p className="mb-2"><strong>Number of nights : </strong>2</p>
                        <p className="mb-2"><strong>Total price : </strong>$200</p>

                        <div className="mt-6 cursor-pointer md:inline-block block py-3 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition">
                            Go to property
                        </div>
                    </div>

                    

                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                src='/beach_03.avif'
                                alt="Piscine house"
                                loading="lazy"
                                fill={true}
                                className="hover:scale-110 object-cover transition h-full"
                            />
                        </div>
                    </div>

                    <div className=" col-span-1 md:col-span-3">  
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date : </strong>14/02/2024</p>
                        <p className="mb-2"><strong>Check out date : </strong>16/02/2024</p>
                        <p className="mb-2"><strong>Number of nights : </strong>2</p>
                        <p className="mb-2"><strong>Total price : </strong>$200</p>

                        <div className="mt-6 cursor-pointer md:inline-block block py-3 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition">
                            Go to property
                        </div>
                    </div>

                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                src='/beach_02.avif'
                                alt="Piscine house"
                                loading="lazy"
                                fill={true}
                                className="hover:scale-110 object-cover transition h-full"
                            />
                        </div>
                    </div>

                    <div className=" col-span-1 md:col-span-3">  
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date : </strong>14/02/2024</p>
                        <p className="mb-2"><strong>Check out date : </strong>16/02/2024</p>
                        <p className="mb-2"><strong>Number of nights : </strong>2</p>
                        <p className="mb-2"><strong>Total price : </strong>$200</p>

                        <div className="mt-6 cursor-pointer md:inline-block block py-3 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition">
                            Go to property
                        </div>
                    </div>

                </div>


            </div>
        </main>
    )
}