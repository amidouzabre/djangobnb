'use client';

interface CustomButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

export default function CustomButton({ label, onClick, className }: CustomButtonProps) {
    return (
         <div 
            onClick={onClick}
            className={`flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer py-2 px-6 bg-airbnb hover:bg-airbnb-dark transition text-white rounded-md ${className}`}
        >
            {label}
        </div>
    )
}


import { MailOpen, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ButtonWithIconProps {
    onClick: () => void;
}

export function ButtonWithIcon({ onClick }: ButtonWithIconProps) {
  return (
    <Button onClick={onClick}>
      Send Message <Send /> 
    </Button>
  )
}


