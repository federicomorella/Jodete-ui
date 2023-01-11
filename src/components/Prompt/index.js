import {React,useState} from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/***********************************
 *  Modal dialog for value input
 * @param message 
 * @param callback 
 * @returns 
 */
export function Prompt({message, callback}){

  const [value,setValue]=useState('')
  const [show, setShow] = useState(true)
  
  const close=(value)=>{
    callback(value)
    setShow(false)
  }
  
  return (
    <>
      <Modal show={show} onHide={()=>close(null)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <Form.Label>{message}</Form.Label>
              <Form.Control type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>                
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={()=>close(null)}>
              Cancelar
              </Button>
              <Button variant="primary" onClick={()=>close(value)}>
              Aceptar
              </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}
