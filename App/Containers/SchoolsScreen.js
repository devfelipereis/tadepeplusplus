import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { fetch, projectSelected } from '../Redux/ProjectRedux'

import ProjectList from '../Components/Project/ProjectList'

export class SchoolScreen extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Escolas',
  }

  componentWillMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <View>
        <ScrollView>
          <ProjectList projects={this.props.projects} navigation={this.props.navigation} onCardButtonClick={this.props.selectProject} />
        </ScrollView>
      </View >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects: () => { dispatch(fetch()) },
    selectProject: (project) => { dispatch(projectSelected(project)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolScreen);