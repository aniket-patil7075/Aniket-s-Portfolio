// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
// import { FiArrowUpRight } from "react-icons/fi";
// import Image from "./Image";

// /**
//  * Represents a project card component.
//  *
//  * @component
//  * @param {string} title - The title of the project.
//  * @param {string} image - The image source for the project thumbnail.
//  * @param {string} color - The background color of the project card.
//  * @param {number} id - The unique identifier of the project.
//  */

// const ProjectCard = ({ title, image, color, id }) => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//     triggerOnce: true,
//   });

//   const variants = {
//     hidden: { y: "10vw", opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <Link to={`/project/${title.toLowerCase()}`} key={id} className="projectLink col-12 col-lg-6">
//       <motion.div
//         ref={ref}
//         className=""
//         variants={variants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//       >
//         <div
//           style={{ backgroundColor: color }}
//           className="projectCard d-flex align-items-center justify-content-center p-5"
//           onClick={() => {}}
//         >
//           <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
//             <h3 className="projectTitle">{title}</h3>
//             <span className="viewWork">
//               View Work <FiArrowUpRight />
//             </span>
//           </div>
//           <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
//             <Image src={image} alt="Laptop displaying the application" />
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default ProjectCard;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "./Image";

const ProjectCard = ({ title, image }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Link to={`/project/${title.toLowerCase()}`} className="project-link">
      <motion.div
        ref={ref}
        className="project-card-glass"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* TEXT */}
        <div className="project-text">
          <h3>{title}</h3>

          <span className="view-work">
            View Work <FiArrowUpRight />
          </span>
        </div>

        {/* IMAGE */}
        <div className="project-image">
          <Image src={image} alt={title} />
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;