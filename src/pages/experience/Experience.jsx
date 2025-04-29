import React from 'react'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import ExperienceList from '../../components/ExperienceList'

const Experience = () => {
  return (
    <>
      {/* Main project Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Experience" description="Explore my professional journey" />


        <div className="row">
          {/* Display the list of projects */}
          <ExperienceList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Experience