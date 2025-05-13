import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='w-full px-40'>
      {/* <Nav/> */}
      <section id='about-me' className='flex items-center w-full py-10'>
        <div className='w-[50%] h-[500px] flex justify-center items-center'>
          <div className='w-[300px] h-[300px] rounded-full overflow-hidden'>
            <img className='w-full' src="/dp.jpeg" alt="profile image" />
          </div>
        </div>
        <div className="w-[50%]">
          <h3>A Fullstack Web Developer</h3>
          <h2>Ajiboye Samuel</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores facilis qui reprehenderit cum nobis voluptates quidem cupiditate praesentium mollitia? Architecto a placeat assumenda, commodi blanditiis esse mollitia corporis. Nesciunt!</p>
          <a href=""><button className='p-5'>Contact</button></a> 
        </div>
      </section>

      <section id='Skills' className='flex'>
        <h2>Skills</h2>
        <div className='bg-blue-300 p-5'>HTML</div>
      </section>

      <section id='Hobbies'>
      <h2>Hobbies</h2>
        <ul>
          <li>Gaming</li>
          <li>Football</li>
          <li>Browsing lit designs</li>
        </ul>
      </section>

      <section id='passions'>
      <h2>Passion</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab fuga nostrum eos facere quaerat distinctio molestias ut veritatis mollitia neque alias consequatur voluptatum, doloremque perferendis ipsam in pariatur voluptatem?
      </section>

      <section id='academic-background'>
        <h2>Academic Background</h2>
        <p></p>
      </section>

      <section id='work-experience'></section>

      <section id='certification'></section>

    </div>
    
  )
}

export default App