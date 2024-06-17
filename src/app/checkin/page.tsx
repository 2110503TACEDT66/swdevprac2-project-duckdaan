'use client'
import Checkin from "@/components/CheckIn";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



function page() {
    
    return (
    <div className='h-[90vh] w-full'>
        <Checkin />
    </div>
    )
}

export default page

