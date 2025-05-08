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
        transition: "0.4s ease-in-out",
      }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="skill-text"
        initial={{ x: 0 }}
        whileHover={{ x: -30 }}
        transition={{ duration: 0.3 }}
      >
        <h5 className="mb-0 fw-bold">{name}</h5>
      </motion.div>

      <motion.div
        className="skill-icon"
        initial={{ x: 0, scale: 1 }}
        whileHover={{ x: -90, scale: 1.3 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
