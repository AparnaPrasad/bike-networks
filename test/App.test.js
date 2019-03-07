import App from '../src/Components/App/App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot
  })
})

/*it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});*/