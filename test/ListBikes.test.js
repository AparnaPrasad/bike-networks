import ListBikes from '../src/Components/ListBikes/ListBikes';
import React from 'react'
import { shallow, mount } from 'enzyme'

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

describe('ListBikes', () => {

    let wrapper, setHrefMock, setShowMock;
    
    beforeEach(() => {
        setHrefMock = jest.fn();
        setShowMock = jest.fn();
        wrapper = shallow(<ListBikes items={sample_data} setShow={setShowMock} setHref={setHrefMock}/>);
    });

    test('should display all bike networks', () => {     
        expect(wrapper.find('tr.bike-networks')).toHaveLength(sample_data.length);
    });

    test('row should display correct data', () => {
        const firstRowColumns = wrapper.find('tr.bike-networks').at(0).find('td').map(column => column.text());
        expect(firstRowColumns.length).toBe(4);
        expect(firstRowColumns[0]).toBe(sample_data[0].id);
        expect(firstRowColumns[1]).toBe(sample_data[0].name);
        expect(firstRowColumns[2]).toBe(sample_data[0].location.city);
        expect(firstRowColumns[3]).toBe(sample_data[0].location.country);
    });

    test('clicking on a network row calls setHref', async () => {       
        const row = wrapper.find('tr.bike-networks').at(1);
        row.simulate('click');
        await expect(setHrefMock).toHaveBeenCalled();
    });

    test('clicking on a network row calls setShow', async () => {       
        const row = wrapper.find('tr.bike-networks').at(1);
        row.simulate('click');
        await expect(setShowMock).toHaveBeenCalled();
    });

});

