import React from 'react'
import todo from '../assets/todo.png';
import cartapi from '../assets/cartapi.png';
import ecommerce from '../assets/ecommerce.png';
import table from '../assets/table.png';
 function Project() {
  return (
    <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-blue-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://amanjaiswal0919.github.io/TodoList/"
                        className="w-full h-full">
                        <img src={todo}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
"https://amanjaiswal0919.github.io/TodoList/">
                            TODOLIST
                        </a>
                    </h2>
                    <p>
                        
A simple Todo Application featuring an input field for adding tasks to a list. Users can delete individual tasks and also clear the entire list at once.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://amanjaiswal0919.github.io/CartApi/"
                       className="w-full h-full">
                        <img src={cartapi}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://amanjaiswal0919.github.io/CartApi/">
                            CARTAPI
                        </a>
                    </h2>
                    <p>
                      
A Cart Application fetching data from an API, showing color images, image links, and titles. Users can select items from a range of 1 to 5000.
                    </p>
                </div> 
            </div>
            
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://amanjaiswal0919.github.io/EcommFrontend/"
                       className="w-full h-full">
                        <img src={ecommerce}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://amanjaiswal0919.github.io/EcommFrontend/">
                            E-CommerceFrontend
                        </a>
                    </h2>
                    <p>
Creating an e-commerce website using React and Tailwind CSS involves setting up a React project, styling components with Tailwind CSS, managing state, integrating APIs for data fetching, and implementing features like product listings, cart management, and checkout.
                    </p>
                </div> 
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://amanjaiswal0919.github.io/TanstackTable/"
                       className="w-full h-full">
                        <img src={table}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href=
"https://amanjaiswal0919.github.io/TanstackTable/">
                            TanstackTable
                        </a>
                    </h2>
                    <p>
                    In React, utilized TanStack Table to display user data fetched from API. Enabled sorting, filtering, and pagination for seamless user experience.
                    </p>
                </div> 
            </div>
        </section>
  )
}
export default Project