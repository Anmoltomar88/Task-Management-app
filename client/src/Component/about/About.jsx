import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about-container ">
      <div className="about-content  flex-column ">
        <div className="container d-flex justify-content-center  align-items-center">
        <h1 className='h1 '>About Us</h1>
        </div>
        <p>
          Welcome to TaskHub, your ultimate companion in managing tasks efficiently and effortlessly. At TaskHub, we understand the importance of productivity and organization in today's fast-paced world, and we're here to make your life easier.
        </p>
        <p>
          Our mission is simple: to provide you with a seamless task management experience that empowers you to stay focused, organized, and in control of your tasks, projects, and goals.
        </p>
        <ul>
          <li style={{fontStyle:"italic"}} ><strong>Stay Organized:</strong> Easily create, organize, and prioritize your tasks in one centralized platform.</li>
          <li style={{fontStyle:"italic"}}><strong>Collaborate Effectively:</strong> Collaborate with team members, assign tasks, and track progress together, ensuring everyone stays on the same page.</li>
          <li style={{fontStyle:"italic"}}><strong>Access Anywhere, Anytime:</strong> Whether you're at your desk or on the go, TaskHub is accessible across all your devices, ensuring you never miss a beat.</li>
        </ul>
        <p>
          Our dedicated team is committed to continuously enhancing TaskHub to meet your evolving needs and exceed your expectations. We value your feedback and are here to support you every step of the way.
        </p>
        <p>
          Thank you for choosing TaskHub to simplify your task management journey. Let's achieve greatness together!
        </p>
        <p>
          Sincerely,<br />
          The Dots
        </p>
      </div>
    </div>
  );
}

export default About;
