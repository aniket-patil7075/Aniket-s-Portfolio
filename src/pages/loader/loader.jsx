import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component for 'AP'.
 * Displays an animated loader with SVG icons of the letters A and P.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, [setShowLoader]);

  // Animation variants for the A and P SVG icons
  const iconVariantA = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const iconVariantP = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG for A and P */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 300"
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* A Path */}
        <motion.path
          d="M100,250 L150,50 L200,250 L180,250 L165,200 L135,200 L120,250 Z M143,180 L157,180 L150,140 Z"
          variants={iconVariantA}
          initial="hidden"
          animate="visible"
        />

        {/* P Path */}
        <motion.path
          d="M250,250 L250,50 L310,50 Q340,50 360,70 Q380,90 380,120 Q380,150 360,170 Q340,190 310,190 L280,190 L280,250 Z M280,80 L280,160 L310,160 Q325,160 335,150 Q345,140 345,120 Q345,100 335,90 Q325,80 310,80 Z"
          variants={iconVariantP}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
};

export default Loader;
