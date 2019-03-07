import React, {Component} from "react";
import { connect } from "react-redux";

class DisplayCountries extends Component {

    render(){
        return (<div>
            {this.props.items.map((item, index)=>{
                return <div key={index}>
                    {item.name}
                </div>
            })}
        </div>)

    }

}

function mapStateToProps({country}) {
    return {
        countryList: country.countryList
    }
}


export default connect(mapStateToProps)(DisplayCountries);