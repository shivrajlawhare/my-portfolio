import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white p-4">
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">Contact</p>
          <p className="py-6">Submit below form to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/pboxdzda" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <input type="email" name="email" placeholder="Enter your email" className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md px-6 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-300 ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
