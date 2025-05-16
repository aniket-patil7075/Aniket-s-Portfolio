import { motion } from "framer-motion";

/**
 * Interactive skill card like a project card.
 *
 * @component
 * @param {string} name - Skill name.
 * @param {string} icon - Icon image URL.
 * @param {string} bgcolor - Background color of the card.
 */

const SkillCard = ({ name, icon, bgcolor }) => {
  return (
    <motion.div
      className="skill-card d-flex align-items-center justify-content-between p-4 rounded text-white m-2"
      style={{
        backgroundColor: bgcolor,
        width: "280px",
        height: "120px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="skill-text"
        variants={{
          initial: { x: 0 },
          hover: { x: -20 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h5 className="mb-0 fw-bold">{name}</h5>
      </motion.div>

      <motion.div
        className="skill-icon"
        variants={{
          initial: { x: 0, scale: 1 },
          hover: { x: -40, scale: 1.3 },
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          right: "20px",
          top: "13%",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: "150px",
            height: "100px",
            objectFit: "contain",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
