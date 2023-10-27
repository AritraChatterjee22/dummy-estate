import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h2 className='text-3xl font-bold mb-4 text-slate-800'>Discover Dummy Estate</h2>
      <p className='mb-4 text-slate-700'>"Dummy Estate" is a showcase of full-stack development prowess, combining the power of the MERN stack with an array of impressive features. Crafted from scratch, this real estate platform offers a seamless user experience with advanced functionalities.</p>
      <ul>
        <li className='mb-4 text-slate-700'>
          <strong>Custom REST API:</strong> Built from the ground up, the custom REST API ensures fast and accurate data delivery.
        </li>
        <li className='mb-4 text-slate-700'>
          <strong>Security First:</strong> We implement JWT authentication and Google Auth for double-layered security.
        </li>
        <li className='mb-4 text-slate-700'>
          <strong>Firebase Integration:</strong> Property image storage made easy with Firebase, ensuring image security and accessibility.
        </li>
        <li className='mb-4 text-slate-700'>
          <strong>State Management:</strong> Leveraging Redux and Redux Persist for smooth user experiences, including data persistence.
        </li>
        <li className='mb-4 text-slate-700'>
          <strong>CRUD and Search:</strong> Enjoy full CRUD capabilities to manage property listings, and easily find properties with advanced search filters.
        </li>
      </ul>
      <p className='mb-4 text-slate-700'>Explore Dummy Estate's responsive design, user-friendly interface, and real-time updates, making it your ultimate real estate destination. It's not just a website; it's a testament to full-stack excellence in the world of real estate. Start your journey today.</p>
    </div>
  )
}
