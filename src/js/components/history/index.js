import { connect } from 'react-redux'
import History from './history'

const mapStateToProps = (store) => {
    return {
        history: store.history
    }
}

export default connect(mapStateToProps)(History);