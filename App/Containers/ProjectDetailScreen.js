import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

export class ProjectDetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Detalhes',
  }

  componentWillMount() {
  }

  render() {
    const project = this.props.project

    return (
      <View>
        <Text>Detalhes: {project.attributes.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.project.projectSelected
  };
}

export default connect(mapStateToProps, null)(ProjectDetailScreen);