import ListBikes from '../src/Components/ListBikes/ListBikes';
import React from 'react'
import { shallow } from 'enzyme'

const sample_data = [{
    "company": [
        "Nextbike GmbH"
    ],
    "href": "/v2/networks/norisbike-nurnberg",
    "id": "norisbike-nurnberg",
    "location": {
        "city": "Nürnberg",
        "country": "DE",
        "latitude": 49.4479,
        "longitude": 11.0814
    },
    "name": "NorisBike"
},
{
    "company": [
        "Nextbike GmbH"
    ],
    "href": "/v2/networks/sz-bike-dresden",
    "id": "sz-bike-dresden",
    "location": {
        "city": "Dresden",
        "country": "DE",
        "latitude": 51.0535,
        "longitude": 13.7387
    },
    "name": "sz-bike"
},
{
    "company": [
        "Nextbike GmbH"
    ],
    "href": "/v2/networks/facherrad-karlsruhe",
    "id": "facherrad-karlsruhe",
    "location": {
        "city": "Karlsruhe",
        "country": "DE",
        "latitude": 49.0102,
        "longitude": 8.41827
    },
    "name": "Fächerrad"
}];

const setDataMock = () => {};
const setShow = () => {};

describe('ListBikes', () => {
  test('should display all bike networks', () => {     
    const wrapper = shallow(<ListBikes items={sample_data}/>);
    //console.log("Wrapper find",wrapper.find('tr.bike-networks'));
    expect(wrapper.find('tr.bike-networks')).toHaveLength(sample_data.length);
  });
  test('clicking on a network calls rowClicked', () => {
    const wrapper = shallow(<ListBikes items={sample_data} setShow={setShow} setData={setDataMock}/> );
    wrapper.find('tr.bike-networks').first().simulate('click');
    await Promise.resolve();
    //expect(wrapper.find('tr.bike-networks')).toHaveLength(sample_data.length);
  })

});

