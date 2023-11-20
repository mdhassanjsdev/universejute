import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <footer class="text-gray-600 body-font bg-[#1f4144] border-t border-[#477175]">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center justify-around -mb-10 -mx-4">
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="font-semibold text-[#a4d852] tracking-widest text-sm mb-5">Get to know us</h2>
                            <nav class="list-none mb-10 space-y-4">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">About US</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Product</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Our Story</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Contact US</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="font-semibold text-[#a4d852] tracking-widest text-sm mb-5">Quick Connect</h2>
                            <nav class="list-none mb-10 space-y-4">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="font-medium text-[#a4d852] tracking-widest text-sm mb-5">Featured Products</h2>
                            <nav class="list-none mb-10 space-y-4">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="font-medium text-[#a4d852] tracking-widest text-sm mb-5">General Contact Info</h2>
                            <nav class="list-none mb-10 space-y-4">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-b border-[#477175] bg-[#12373a]">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label className="leading-7 text-sm text-gray-100">Subscribe Our Newsletter</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-transparent rounded border border-gray-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <button className="inline-flex text-slate-900 border-1 border-gray-300 py-2 px-6 focus:outline-none bg-[#a4d852] rounded">Subscribe</button>
                            
                        </div>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a className="text-gray-500">
                                <svg fill="#3b5998" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="#00aced" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="#8e44ad" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="#00aced" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="bg-[#12373a]">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-200 text-sm text-center sm:text-left">© 2023 UniverseJute —
                            <a href="https://twitter.com" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">@UniverseJute</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-200 text-sm">Website Design and Maintenance by UniverseJute</span>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer