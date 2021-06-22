import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state, ownProps) => {
  return {
    basics: state.person.basics,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
