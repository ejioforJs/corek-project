import React from 'react'
import CardComponents from '../homeScreenComp/CardComponents'
import ChooseUsComponents from '../homeScreenComp/ChooseUsComponents'
import Herosection from '../homeScreenComp/Herosection'
import SkillInstructorComponent from '../homeScreenComp/SkillInstructorComponent'
import TopCategoriesComponent from '../homeScreenComp/TopCategoriesComponent'
import TopCoursesComponent from '../homeScreenComp/TopCoursesComponent'

const Homescreen = () => {
  return (
    <div>
      <Herosection />
      <CardComponents />
      <ChooseUsComponents />
      <TopCategoriesComponent />
      <TopCoursesComponent />
      <SkillInstructorComponent />
    </div>
  )
}

export default Homescreen
