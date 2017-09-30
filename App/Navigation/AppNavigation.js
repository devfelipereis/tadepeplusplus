import { StackNavigator, TabNavigator } from 'react-navigation'
import SchoolsScreen from '../Containers/SchoolsScreen'
import ProjectDetailScreen from '../Containers/ProjectDetailScreen'

const PrimaryNav = StackNavigator({
  SchoolsScreen: { screen: SchoolsScreen },
  ProjectDetailScreen: { screen: ProjectDetailScreen }
}, {
    // Default config for all screens
    initialRouteName: 'SchoolsScreen',
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#D7714B'
      }
    }
  })

export default PrimaryNav
