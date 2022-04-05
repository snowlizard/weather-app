import { connect } from 'react-redux';
import Weather from './weather';

const mapStateToProps = (store) => {
    return {
        city: store.city
    }
}
export default connect(mapStateToProps)(Weather);