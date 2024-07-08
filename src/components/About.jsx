import React from 'react'

 function About() {
  return (
    <section
    id="about"
    className="px-10 w-full flex flex-col lg:flex-row py-20 
               align-center bg-emerald-200 max-w-5xl mx-auto">
    <div className="flex-1">
        <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
            alt="About"
            className="w-full h-full bg-cover"/>
    </div>
    <div className="flex-1 flex flex-col justify-center
                    items-center gap-5 px-6">
        <div>
            <h2 className="text-center text-blue-500
                           text-5xl font-bold">
                About Me :
            </h2>
        </div>
        
        <p>
           My Name is Aman Jaiswal I am from Delhi and I have done B.Tech in Electronics and Communication Engineering from
           Guru Gobind Singh Indraprastha University My CGPA Score is 
           8.5 and I love to Play Cricket and Making Videos on my Youtube Channel.
        </p>
    </div>
</section>
  )
}
export default About