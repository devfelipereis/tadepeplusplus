import React from 'react'
import { Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

const ProjectCard = (props) => {

  const project = props.project.attributes

  return (
    <Card
      title={project.name}
      image={{ uri: 'https://www.shareicon.net/download/2016/07/07/792273_school_512x512.png' }}>
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor='#F7B15A'
        fontFamily='Lato'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Visualizar'
        onPress={props.handleButtonClick} />
    </Card>
  )
}

export default ProjectCard