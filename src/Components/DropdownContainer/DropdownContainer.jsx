import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {group_by} from '../../Utils/const';

export default function DropdownContainer(props){
    return (<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {group_by.find(group=>(group.key===props.groupBy)).value}
        </Dropdown.Toggle>

        <Dropdown.Menu> 
            {group_by.map((group, index)=>
                <Dropdown.Item key={index} eventKey={group.key} onSelect={(eventKey)=>{props.dropDownChange(eventKey)}}>{group.value}</Dropdown.Item>
            )}
        </Dropdown.Menu>
    </Dropdown>)
}