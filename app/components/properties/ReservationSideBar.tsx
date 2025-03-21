import { Button } from "@/components/ui/button";

export default function ReservationSideBar () {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-sm">
            <h2 className="mb-5 text-2xl">$200 per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs" htmlFor="guest">
                    Guests
                </label>
                <select className="w-full -ml-1 text-xm" name="guest" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className="w-full cursor-pointer mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Book
            </div>
            <Button className="w-full">Click Me</Button>
            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Django fee</p>
                <p>$40</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$840</p>
                
            </div>

        </aside>
    )
}