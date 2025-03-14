"use client"

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";

const LoginModal = () => {

    const LoginModal = useLoginModal()

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in.</h2>
            <form action="">
                <input placeholder="Your email address" type="email" className="w-full h-[54px] border border-gray-300 px-4 rounded-md " />
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