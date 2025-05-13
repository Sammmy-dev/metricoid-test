import React from 'react'

const App = () => {
  return (
    <div className='w-full px-20 max-md:px-5'>
      <section id='about-me' className='flex items-center w-full py-10 max-lg:flex-col'>
        <div className='w-[40%] max-lg:w-full h-[500px] flex justify-center items-center'>
          <div className='w-[300px] h-[300px] max-sm:w-[250px] max-sm:h-[250px] rounded-full overflow-hidden'>
            <img className='w-full hiddenpy-10' src="/dp.jpeg" alt="profile image" />
          </div>
        </div>
        <div className="w-[60%] max-lg:w-full">
          <h3 className=' my-3 '>A Fullstack Web Developer</h3>
          <h2 className=' my-3 text-5xl text-white'>Ajiboye Samuel</h2>
          <p className=' my-3 '>MERN Stack Developer with hands-on experience building scalable web applications using MongoDB, Express.js, React, and Node.js. Skilled in developing full-stack solutions from concept to deployment, integrating RESTful APIs, and creating responsive, user-friendly interfaces. Passionate about clean code, performance optimization, and delivering impactful digital products. Strong collaborator with a focus on continuous learning and staying updated with modern web technologies.</p>
          <a href="https://wa.me/+2349154173193"><button className='hover:bg-blue-700 rounded-4xl py-2 px-3 border-3 border-white transition 1s cursor-pointer'>Contact</button></a> 
        </div>
      </section>

      <section id='Skills' className='py-10'>
        <h2 className='mb-3 text-3xl'>Skills</h2>
        <hr className='w-[200px] mb-4'/>
        <ul className='flex flex-wrap gap-2 text-blue-700'>
          <li className="tag">HTML</li>
          <li className="tag">CSS</li>
          <li className="tag">JavaScript</li>
          <li className="tag">React</li>
          <li className="tag">MongoBD</li>
          <li className="tag">Next.js</li>
          <li className="tag">Express.js</li>
        </ul>
      </section>

      <section id='Hobbies' className='py-10'>
      <h2 className='mb-3 text-3xl'>Hobbies</h2>
      <hr className='w-[200px] mb-4'/>
        <ul className='text-lg'>
          <li>Gaming</li>
          <li>Football</li>
          <li>Browsing lit designs</li>
        </ul>
      </section>

      <section id='passions' className='py-10'>
      <h2 className='mb-3 text-3xl'>Passion</h2>
      <hr className='w-[200px] mb-4'/>
        <p>Building responsive, Well optimized web applications with precision and creativity, hence making every pixel awesome.</p>
      </section>

      <section id='academic-background' className='py-10'>
        <h2 className='mb-3 text-3xl'>Academic Background</h2>
        <hr className='w-[200px] mb-4'/>
          <p>Osun State University (Building) </p>
      </section>
    </div>
    
  )
}

export default App