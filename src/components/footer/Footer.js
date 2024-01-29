import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                <div className='flex justify-center'>
                    
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2023 Mussell Shop | All Rights Kinda Reserved</p>
                    <a href='https://www.linkedin.com/in/parassat-zhalgabayev-b10a25294/'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Created by Parassat
                    </a>
                </div>
            </div>
        </footer>
    )
}
