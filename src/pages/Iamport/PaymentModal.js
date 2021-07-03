import React from 'react';
import './Payment.css';


export const PaymentModal = () => {

    // 'use strict'

    // const errMessages = document.querySelectorAll('#error');
    
    // const toggleError = () => {
    //     // Show error message
    //     errMessages.forEach((el) => {
    //     el.classNameList.toggle('hidden')
    //     })

    //     // Highlight input and label with red
    //     const allBorders = document.querySelectorAll('.border-gray-200')
    //     const allTexts = document.querySelectorAll('.text-gray-500')
    //     allBorders.forEach((el) => {
    //     el.classNameList.toggle('border-red-600')
    //     })
    //     allTexts.forEach((el) => {
    //     el.classNameList.toggle('text-red-600')
    //     })
    // }
    
    // document.getElementById('button').addEventListener('click', toggleError);

    return (

        <>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Form With Floating Labels</h1>
                    <form id="form" novalidate>
 
                        

                        <div className="relative z-0 w-full mb-5">
                            <select
                            name="select"
                            value=""
                            onclick="this.setAttribute('value', this.value);"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            >
                            <option value="" selected disabled hidden></option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                            <option value="5">Option 5</option>
                            </select>
                            <label for="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select an option</label>
                            <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </div>

                        <div className="flex flex-row space-x-4">
                            <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="date"
                                placeholder=" "
                                onclick="this.setAttribute('type', 'date');"
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="date" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
                            <span className="text-sm text-red-600 hidden" id="error">Date is required</span>
                            </div>
                            <div className="relative z-0 w-full">
                            <input
                                type="text"
                                name="time"
                                placeholder=" "
                                onclick="this.setAttribute('type', 'time');"
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="time" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
                            <span className="text-sm text-red-600 hidden" id="error">Time is required</span>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                            type="number"
                            name="money"
                            placeholder=" "
                            className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
                            <label for="money" className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Amount</label>
                            <span className="text-sm text-red-600 hidden" id="error">Amount is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                            type="text"
                            name="duration"
                            placeholder=" "
                            className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <div className="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
                            <label for="duration" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
                            <span className="text-sm text-red-600 hidden" id="error">Duration is required</span>
                        </div>

                        <button
                            id="button"
                            type="button"
                            onClick={toggleError}
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                        >
                            Toggle Error
                        </button>

                        <fieldset className="relative z-0 w-full p-px mb-5">
                            <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
                            <div className="block pt-3 pb-2 space-x-4">
                            <label>
                                <input
                                type="radio"
                                name="radio"
                                value="1"
                                className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Option 1
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="radio"
                                value="2"
                                className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Option 2
                            </label>
                            </div>
                            <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
