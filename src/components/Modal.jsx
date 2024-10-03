/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function Modal({ textTrigger, children, className }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div >
            {/* button trigger */}
            <button onClick={
                () => setIsOpen(!isOpen)
            }>
                {textTrigger}
            </button>

            {/* modal */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'} ${className}`}
            >

                <button
                    onClick={
                        () => setIsOpen(!isOpen)
                    }
                    className="absolute top-0 right-0 m-4"
                >
                    close
                </button>

                {children}
            </div>
        </div>
    )
}
