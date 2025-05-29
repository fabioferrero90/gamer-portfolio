import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'Styles/NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="page-container">
            <main className="h-[100vh] select-none">
                <div className="death-background h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-end">
                        <p className="text-red-500 text-9xl pb-12 text-center">You Died</p>
                    </div>
                    <span className="text-lg text-white">
                        Or maybe this part is not complete.
                    </span>
                    <button
                        className="bg-yellow-100 text-black font-bold p-3 rounded-2xl mt-4 cursor-pointer"
                        onClick={() => navigate("/main-menu")}
                    >
                        <span>Back to the main menu</span>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default NotFound