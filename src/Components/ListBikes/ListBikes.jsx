import React, {useState, useEffect} from "react";
import {table_fields} from '../../Utils/const';
import Table from 'react-bootstrap/Table';

export default function ListBikes(props){

    const table_fields_keys = Object.keys(table_fields);
    
    return (<div>
        <Table bordered hover>
            <thead>
            <tr className='table-header'>
                {table_fields_keys.map((field, index)=>(
                      <th key={index}>{field}</th>
                ))}            
            </tr>
        </thead>
            <tbody>
                {props.items.map((item, index)=>{
                return <tr key={index} className='bike-networks' onClick={()=>{props.setShow(true); props.setHref(item.href)}}>
                    {table_fields_keys.map((field, index)=>(
                      <td key={index}>{(field === table_fields.city || field===table_fields.country) ? (item.location?item.location[field]:undefined): item[field] }</td>
                    ))}
                </tr>
            })}
            </tbody>
        </Table>
    </div>);
}

