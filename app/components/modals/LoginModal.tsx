"use client"

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../buttons/CustomButton";

const LoginModal = () => {

    const LoginModal = useLoginModal()

    const content = (
        <>
            <form action="" className="space-y-4">
                <input placeholder="Your email address" type="email" className="w-full h-[54px] border border-gray-300 px-4 rounded-md " />
                <input placeholder="Your password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-md " />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label="Submit"
                    onClick={() => console.log("Log in Test")}
                />
            </form>
        </>
    )

    return (
        
        <Modal 
            isOpen={LoginModal.isOpen}
            close = {LoginModal.close}
            label="Login in"
            content={content}
        />
        
    )
}

export default LoginModal;