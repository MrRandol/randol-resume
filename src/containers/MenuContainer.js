import { connect } from 'react-redux'
import Menu from '../components/Menu'
var object = require('lodash/fp/object');

const mapStateToProps = (state, ownProps) => {
  var categories = object.keys(state.person)
  return {
    categories: categories,
    color: state.app.color
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
