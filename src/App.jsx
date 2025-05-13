import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='w-full px-20'>
      {/* <Nav/> */}
      <section id='about-me' className='flex items-center w-full py-10'>
        <div className='w-[40%] h-[500px] flex justify-center items-center'>
          <div className='w-[300px] h-[300px] rounded-full overflow-hidden'>
            <img className='w-full hiddenpy-10' src="/dp.jpeg" alt="profile image" />
          </div>
        </div>
        <div className="w-[60%]">
          <h3 className=' my-3 '>A Fullstack Web Developer</h3>
          <h2 className=' my-3 text-5xl text-white'>Ajiboye Samuel</h2>
          <p className=' my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores facilis qui reprehenderit cum nobis voluptates quidem cupiditate praesentium mollitia? Architecto a placeat assumenda, commodi blanditiis esse mollitia corporis. Nesciunt!</p>
          <a href=""><button className='hover:bg-blue-700 rounded-4xl py-2 px-3 border-3 border-white transition 1s'>Contact</button></a> 
        </div>
      </section>

      <section id='Skills' className='py-10'>
        <h2 className='mb-3 text-3xl'>Skills</h2>
        <ul className='flex gap-2'>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
          <li className="bg-blue-700 rounded-2xl py-2 px-3 flex">HTML</li>
        </ul>
      </section>

      <section id='Hobbies' className='py-10'>
      <h2 className='mb-3 text-3xl'>Hobbies</h2>
        <ul>
          <li>Gaming</li>
          <li>Football</li>
          <li>Browsing lit designs</li>
        </ul>
      </section>

      <section id='passions' className='py-10'>
      <h2>Passion</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab fuga nostrum eos facere quaerat distinctio molestias ut veritatis mollitia neque alias consequatur voluptatum, doloremque perferendis ipsam in pariatur voluptatem?
      </section>

      <section id='academic-background' className='py-10'>
        <h2>Academic Background</h2>
        <p></p>
      </section>
    </div>
    
  )
}

export default App