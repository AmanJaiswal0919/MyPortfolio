import React from 'react'
import todo from '../assets/todo.png';
import cartapi from '../assets/cartapi.png';
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
                        This is a project built on react which tracks your progess in dsa 
                        and stores that in the local storage.
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
                        15 puzzle game is basically a tile-based game in which there are 16 tiles
                        out of which 1 tile is left empty and the remaining tiles are filled with
                        numbers from 1 to 15 in random order. The user has to arrange all the tiles 
                        in numerical order with the rule that they can only move the tile that is 
                        a direct neighbor of the empty tile.
                    </p>
                </div>
            </div>
        </section>
  )
}
export default Project