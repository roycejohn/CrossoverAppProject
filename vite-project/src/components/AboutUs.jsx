

import { useState } from 'react';
import aboutUsImage from '../assets/aboutUsImage.jpg'


const AboutUs = () => {
  const [message, setMessage] = useState('');


  return (
    <div>
        <section className='about-row flex'>
            <div className="w-1/2">
                <img className="w-full h-full object-cover "
                 src={aboutUsImage} 
                 alt="aboutUsImage"  
                 />
            </div>
            <div className="w-1/2 flex flex-col">
                <div className='h-3/6 bg-yellow-500 flex-grow flex justify-center   items-center'>
                    <div className="aboutUs">
                        <h2 className="text-3xl font-bold mb-4 p-2">About Us</h2>
                        <p className="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris auctor, consequat urna vel, aliquam felis.</p>
                        <p className="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris auctor, consequat urna vel, aliquam felis.</p>
                        <p className="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris auctor, consequat urna vel, aliquam felis.</p>
                    </div>
                </div>
            </div>
           
        </section>
      
      

        <form onSubmit='' className="p-12 bg-black">
            <div className='flex justify-center'>
                <h1 className='font-semibold text-4xl text-yellow-500'> SAY HELLO</h1>
            </div>
            <div className='message-details'>
                <div className='mt-4 flex justify-center'>
                    <label htmlFor="name" className="block text-yellow-500"></label>
                    <input 
                        type="text" 
                        id="name" 
                        value='' 
                        placeholder='Name' 
                        onChange='' 
                        className="border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-2/6" 
                    />
                </div>
                <div className="mt-4 flex justify-center">
                    <label htmlFor="email" className="block text-yellow-500"></label>
                    <input 
                        type="email" 
                        id="email" 
                        value='' 
                        onChange='' 
                        placeholder='E-mail' 
                        className="border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-2/6" 
                    />
                </div>
                <div className="mt-4 flex justify-center">
                    <label htmlFor="message" className="block text-yellow-500"></label>
                    <textarea 
                        id="message" 
                        value='' 
                        onChange='' 
                        placeholder='Message' 
                        className="border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-2/6 h-72" 
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">Send Message</button>
                </div>

            </div>
            
      </form>
    </div>
  );
};

export default AboutUs