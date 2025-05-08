import skills from "../_data/skills.json";
import SkillCard from "./SkillCard";

/**
 * Renders a list of skill cards.
 *
 * @component
 */

const SkillsList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} icon={skill.icon} bgcolor={skill.bgcolor} />
      ))}
    </div>
  );
};

export default SkillsList;
