import React, {Component} from "react";
import { connect } from "react-redux";
import ListOfBikeNetworks from '../ListOfBikeNetworks/ListOfBikeNetworks';
import { both_key, city_key } from '../../Utils/const';
import Table from 'react-bootstrap/Table';

class DisplayGroupedBikeNetworks extends Component {
    constructor(props){
      super(props) ;
      this.getDisplayedData = this.getDisplayedData.bind(this);
    }
    getDisplayedData(data) {
        return (
            <div>
                <h3>{data.name}</h3>
                <Table bordered hover>
                    <thead>
                    <tr className='table-header'>
                        <th>Empty slots</th>
                        <th>Free bikes</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.stations.map((station, index)=>
                            <tr key={index}>
                                <td>{station.empty_slots}</td>
                                <td>{station.free_bikes}</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }



    render(){
        return (<div>
            {this.props.listOfItems.map((item, index)=>{
                return <div key={index}>
                    <h3>{item}</h3>
                    {this.props.groupBy!==both_key?<ListOfBikeNetworks items={this.props.bikeList.filter((bike)=>{
                       return bike.location[this.props.groupBy]===item
                    })} getDisplayedData={this.getDisplayedData}  />: <DisplayGroupedBikeNetworks groupBy={city_key} bikeList={this.props.bikeList} listOfItems={this.props.countryWiseCity[item]}/>}
                    </div>
            })}
        </div>)
    }

}

function mapStateToProps({bikes, city, country}) {
    return {
        bikeList:bikes.bikeList,
        cityList: city.cityList,
        countryList: country.countryList,
        countryWiseCity: country.countryWiseCity
    }
}

export default connect(mapStateToProps)(DisplayGroupedBikeNetworks);