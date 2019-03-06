import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ListBikes from '../ListBikes/ListBikes';
import Loader from 'react-loaders';
import Table from "react-bootstrap/Table";


function ListOfBikeNetworks(props) {
        const [show, setShow] = useState(false);
        const [data, setData] = useState([]);

        const getDisplayedData = (data) => {
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

        return (<div>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Network Details</Modal.Title>
                </Modal.Header>
                {data && data.network ?
                    <Modal.Body>{ getDisplayedData(data.network) } </Modal.Body> :
                    <div>Loading...<Loader type="line-scale" active /></div>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListBikes items={props.items} setShow={setShow} setData={setData} />
        </div>)

}



export default ListOfBikeNetworks;