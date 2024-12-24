import React from "react";
import Ankit from "./assets/about-img.jpg";
import { FaPhoneVolume, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-5">
      <div className="max-w-full mx-auto sm:pl-28 p-8 font-mono shadow shadow-gray-600 rounded-lg ">
        <div className=" sm:flex gap-10 ">
          <div className="flex-3">
            <img
              src={Ankit}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto border-2 border-lime-800 shadow-lg shadow-lime-400 object-center"
            />
          </div>
          <div className="sm:flex-1 ">
            <h1 className="text-3xl font-bold text-gray-800 mt-4">
              Ankit Singh
            </h1>
            <p className="text-gray-600 italic">
              Web Developer | Full Stack Developer | MERN Stack Developer
            </p>
            <p className="flex gap-1 items-center hover:text-orange-600">
              <FaPhoneVolume />
              <a href="tel:+917042525596">+91-7042525596</a>
            </p>
            <p className="flex gap-1 items-center hover:text-orange-600">
              <IoMdMailUnread />
              <a href="mailto:ankitkmr2657@gmail.com">@-Mail</a>
            </p>
            <p className="flex gap-1 items-center hover:text-orange-600">
              <FaLinkedin />
              <a href="http://">@-LinkedIn</a>
            </p>
            <p className="flex gap-1 items-center hover:text-orange-600">
              <FaLocationDot />
              Dasna, Ghaziabad, UP, INDIA (201015)
            </p>
          </div>
        </div>

        <section className="mt-8 sm:px-6 py-2">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-700 mt-4 max-w-5xl">
            Hi! I'm Ankit Kumar, a passionate web developer with experience in
            building modern, responsive, and user-friendly applications. My
            expertise lies in crafting seamless user interfaces using React and
            implementing robust backend solutions with Node.js. I thrive on
            solving complex problems and turning ideas into reality through
            code.
          </p>
        </section>

        <section className="mt-8 text-gray-700  sm:px-5 py-2">
          <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          <h3 className="text-2xl font-semibold ">Sedulous Softtech.</h3>
          <h3 className="text-xl font-medium ">
            Full Stack Developer Intern | MERN Stack
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-4 max-w-5xl space-y-2">
            <li>
              Worked extensively on the E-Kart project, focusing on both
              frontend and backend development using the MERN stack.
              (Contributed to 70% of the development work, including API
              development, database management, and backend integration).
            </li>
            <li>
              Designed and implemented responsive user interfaces with React.js
              and Tailwind CSS, improving UI responsiveness by 40% and enhancing
              the overall user experience.
            </li>
            <li>
              Developed and managed MongoDB databases and built over 10 RESTful
              APIs, optimizing system performance and reducing response time by
              30%.
            </li>
            <li>
              Implemented key features like product management, cart
              functionality, and payment systems, boosting user transaction
              efficiency by 20%.
            </li>
          </ul>
        </section>

        <section className="mt-8  sm:px-6 py-2">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <a
            href="https://github.com/Akki0121"
            className="text-2xl text-gray-700 mt-4 max-w-5xl"
          >
            1.User Dashboard (React.js & Tailwind CSS)
          </a>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
            <li>
              <span className="font-semibold">Frontend Development:</span> Built
              a responsive and dynamic User Dashboard, improving interface
              responsiveness by 35%.
            </li>
            <li>
              <span className="font-semibold">State Management:</span> Leveraged
              <span className="font-semibold"> React Context API </span>for
              effective global state management, reducing unnecessary re-renders
              by 20%.
            </li>
            <li>
              <span className="font-semibold">Performance Optimization:</span>{" "}
              Optimized for large datasets, reducing page load time by 25% and
              boosting overall performance.
            </li>
          </ul>
          <a
            href="https://github.com/Akki0121"
            className="text-2xl text-gray-700"
          >
            2.Calculator with Dark mode (HTML & CSS)
          </a>
          <ul className="list-disc list-inside text-gray-700 max-w-5xl space-y-1">
            <li>
              Designed and developed a functional calculator using{" "}
              <span className="font-semibold">HTML, CSS, and JavaScript,</span>{" "}
              enabling users to perform basic arithmetic operations seamlessly.
            </li>
            <li>
              Implemented dark and light themes, improving accessibility and
              enhancing user experience by 50% based on usability testing
              feedback.
            </li>
            <li>
              Optimized the UI for responsiveness, ensuring smooth operation
              across devices, including mobile and desktop.
            </li>
            <li>
              Incorporated modular JavaScript for clean, maintainable code,
              reducing debugging time by 30%.
            </li>
          </ul>
        </section>

        <section className="mt-8  sm:px-6 py-2">
          <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Frontend Development: HTML, CSS, JavaScript, React</li>
            <li>Backend Development: Node.js, Express.js</li>
            <li>Database Management: MongoDB</li>
            <li>Version Control: Git, GitHub</li>
            <li>Other Tools: Vite, Webpack, RESTful APIs</li>
          </ul>
        </section>

        <section className="mt-8  sm:px-6 py-2">
          <h2 className="text-4xl font-bold text-gray-800">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>I love photography and capturing the beauty of nature.</li>
            <li>I enjoy experimenting with new cuisines.</li>
            <li>
              My favorite way to relax is by reading tech blogs or watch sci-fi
              movies.
            </li>
          </ul>
        </section>

        <div className="sm:mt-8">
          <h3 className="text-lg font-bold text-gray-800">
            Let's Collaborate!
          </h3>
          <p className="text-gray-700 mt-2">
            Feel free to reach out to me for collaboration, freelance work, or
            just to connect. I'd love to hear from you!
          </p>
          <a
            href="mailto:ankitkmr2657@gmail.com"
            className="inline-block bg-orange-700 text-white py-3 px-6 rounded-lg mt-4 hover:shadow-lg hover:shadow-orange-400"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";

// export default function About() {
//   return (
//     <div className="py-16 bg-white">
//       <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//         <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//           <div className="md:5/12 lg:w-5/12">
//             <img
//               src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//               alt="image"
//             />
//           </div>
//           <div className="md:7/12 lg:w-6/12">
//             <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//               React development is carried out by passionate developers
//             </h2>
//             <p className="mt-6 text-gray-600">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
//               omnis voluptatem accusantium nemo perspiciatis delectus atque
//               autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
//               consequatur! Officiis id consequatur atque doloremque!
//             </p>
//             <p className="mt-4 text-gray-600">
//               Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
//               expedita at? Asperiores nemo possimus nesciunt dicta veniam
//               aspernatur quam mollitia.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
