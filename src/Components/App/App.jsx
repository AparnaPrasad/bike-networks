import React, { Component } from 'react';
import './app.scss';
//import Loader from 'react-loader-spinner';
import Api from '../../Utils/api';
import { connect } from 'react-redux';
import { fetchBikesNetwork } from '../../Actions/bikes';
import DisplayGroupedBikeNetworks from '../DisplayGroupedBikeNetworks/DisplayGroupedBikeNetworks';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import { group_by } from '../../Utils/const';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Loader from 'react-loaders';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groupBy: group_by[0].key
        }
    }

    componentDidMount(){
        const { fetchBikesNetwork } = this.props;
        fetchBikesNetwork();
    }

    getBikeNetworkComponent() {
        if (this.props.loading) {
            
            return ( <div>
                Loading...
                <Loader type="line-scale" active />
                </div> )
        }
        return this.props.error ? <div>Error displaying data</div> : <DisplayGroupedBikeNetworks groupBy={this.state.groupBy} listOfItems={ this.state.groupBy === 'city' ? this.props.cityList : this.props.countryList }/>;

    }

    dropDownChange(eventKey) {
        this.setState({
            groupBy: eventKey,
        });
    }

    render() {
       return (
            <div>
                <h1>Bike networks</h1>
                <DropdownContainer
                    groupBy={ this.state.groupBy }
                    dropDownChange={ this.dropDownChange.bind(this) }/>
                {this.getBikeNetworkComponent()}
            </div>
        );
    }
}
function mapStateToProps({ country, city, bikes }) {
    return {
        countryList: country.countryList,
        cityList: city.cityList,
        loading: bikes.loading,
        error: bikes.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBikesNetwork: () => dispatch(fetchBikesNetwork()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
