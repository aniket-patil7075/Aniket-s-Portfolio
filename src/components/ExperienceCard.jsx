import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "./Image";

/**
 * Represents an experience card component.
 *
 * @component
 * @param {string} role - The role held in the experience.
 * @param {string} company - The company name.
 * @param {string} duration - Time period of the experience.
 * @param {string} description - What the user did.
 * @param {string} image - The image/logo of the company.
 * @param {string} color - Background color for the card.
 */

const ExperienceCard = ({ role, company, duration, description, image, color }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="experienceCard mb-4 p-4 rounded d-flex flex-column flex-md-row align-items-center"
      style={{ backgroundColor: color }}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4 }}
    >
      <div className="col-md-3 d-flex justify-content-center mb-3 mb-md-0">
        <Image src={image} alt={`${company} logo`} className="img-fluid" style={{ maxHeight: "80px" }} />
      </div>
      <div className="col-md-9 text-md-start text-center">
        <h5 className="mb-1">{role} at <strong>{company}</strong></h5>
        <small className="text-muted">{duration}</small>
        <p className="mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
