import ExperienceCard from "./ExperienceCard";
import experiences from "../_data/experiences.json";

/**
 * Represents a list of experience cards.
 *
 * This component maps over the experiences data and generates
 * an ExperienceCard for each entry.
 *
 * @component
 */

const ExperienceList = () => (
  <div className="row">
    {experiences.map((exp) => (
      <ExperienceCard
        key={exp.id}
        role={exp.role}
        company={exp.company}
        duration={exp.duration}
        description={exp.description}
        image={exp.image}
        color={exp.bgcolor}
      />
    ))}
  </div>
);

export default ExperienceList;
