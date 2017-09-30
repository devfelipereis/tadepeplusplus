import React from 'react'
import { Text, View } from 'react-native'
import ProjectCard from './ProjectCard'
import { NavigationActions } from 'react-navigation'

const ProjectList = (props) => {
  const { projects, navigation, onCardButtonClick } = props

  const seeProjectDetails = (project) => {
    const projectDetailsRoute = NavigationActions.navigate({ routeName: 'ProjectDetailScreen' })
    navigation.dispatch(projectDetailsRoute)
    onCardButtonClick(project)
  }

  return <View>
    {projects ? projects.map((project) => <ProjectCard key={project.id} project={project} handleButtonClick={() => { seeProjectDetails(project) }} />)
      : <Text>Nenhum projeto encontrado</Text>}
  </View>
}

export default ProjectList