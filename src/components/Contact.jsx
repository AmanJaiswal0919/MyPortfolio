import React from 'react'

 function Contact() {
  return (
    <section id="contact"
    className="my-40 align-center max-w-5xl mx-auto p-3">
<h2 className="text-5xl font-bold text-blue-500 text-center">
   Contact
</h2>
<div className="flex  gap-5 justify-center 
           my-10 flex-wrap">
   <a rel="noreferrer"
      target="_blank"
      className="text-center hover:underline"
      href=
"https://mail.google.com/">
       Gmail:
       <span className="font-bold">
       abhijaiswal1909@gmail.com

       </span>
   </a>

   <a rel="noreferrer"
      target="_blank"
      className="text-center hover:underline"
      href=
"https://www.linkedin.com/in/aman-jaiswal-290628208/">
       LinkedIn:
       <span className="font-bold">
           Aman Jaiswal
       </span>
   </a>
   <a rel="noreferrer"
      target="_blank"
      className="text-center hover:underline"
      href=
"https://github.com/dashboard">
       Github:
       <span className="font-bold">
       AmanJaiswal0919
       </span>
   </a>
  
   <a rel="noreferrer"
      target="_blank"
      className="text-center hover:underline"
      href=
"amanjaiswal">
       PhoneNo.:
       <span className="font-bold">
           9953636027
       </span>
   </a>
</div>
</section>
  )
}
export default Contact