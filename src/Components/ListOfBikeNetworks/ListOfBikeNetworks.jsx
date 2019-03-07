import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ListBikes from '../ListBikes/ListBikes';
import Loader from 'react-loaders';
import Api from '../../Utils/api';

function ListOfBikeNetworks(props) {
        const [show, setShow] = useState(false);
        const [data, setData] = useState([]);
        const [href, setHref] = useState();

        useEffect(() => {
            if(show && href) {
                Api.get(`${href}`).then(response => {                   
                    setData(response.data);
                })
            }
        })

        return (<div>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Network Details</Modal.Title>
                </Modal.Header>
                {data && data.network ?
                    <Modal.Body>{ props.getDisplayedData(data.network) } </Modal.Body> :
                    <div>Loading...<Loader type="line-scale" active /></div>}
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListBikes items={props.items} setShow={setShow} setHref={setHref} rowClicked={props.rowClicked} />
        </div>)

}



export default ListOfBikeNetworks;