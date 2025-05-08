import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import SkillsList from "../../components/SkillsList";

/**
 * Represents the project page component.
 * Displays a list of projects and allows users to view the creator's work.
 *
 * @component
 */

const Skills = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Main project Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Skills" description="Technologies I work with" />

        <div className="row">
          {/* Display the list of skills */}
          <SkillsList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Skills;
