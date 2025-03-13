"use client";

import { Button } from "@/components/ui/button";
import CustomButton, { ButtonWithIcon } from "../buttons/CustomButton";

export default function ConversationDetail () {

    const handleClick = () => {
        console.log('Clicked');
    };

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium voluptates ex quam consequatur deleniti ipsam rerum, tenetur nesciunt reiciendis nobis quasi voluptatum, quibusdam at ullam minus quae nisi omnis.
                    </p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">Amidou ZABRE</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium voluptates ex quam consequatur deleniti ipsam rerum, tenetur nesciunt reiciendis nobis quasi voluptatum, quibusdam at ullam minus quae nisi omnis.
                    </p>
                </div>

            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />
                
                <Button variant="airbnb" onClick={handleClick}>Send</Button>
                <CustomButton label="Send" onClick={handleClick} className="bg-blue-500"/>
            </div>

        </>
    )
}