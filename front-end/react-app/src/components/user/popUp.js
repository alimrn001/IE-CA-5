import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


const PopUp1 = props => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div>
        <button className="btn pay-button vertical-center" onClick={open} type="submit">
        Pay now!
        </button>
        <Modal>
            <div className="popup">
                <h2 className='mb-5'>Your Cart</h2>
                <ul>
                    {
                        props.cartCommodities.map( item => (
                            <li className=' text-brown p-2'>
                                {item.productName}
                            </li>
                        ))
                    }
                </ul>
                <div className='d-flex'>
                    <div className='col-8 p-2'>
                        <input className="form-control code-holder" id="code" placeholder="Code" required>
                    </input>
                    </div>
                    <div className='col-4 p-2'>
                        <button className='btn btn-primary btn-cart-nv'>Submit</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='text-brown col-9 p-2'>
                        total
                    </div>
                    <div className='text-red col-3 p-2'>
                        12314$
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='col-4 p-2'>
                        
                    </div>
                    <div className='col-4 p-2'>
                        <button  onClick={close} className='close-btn'>Close</button>
                    </div>
                    <div className='col-4 p-2'>
                        <button className='btn btn-primary btn-cart-nv'>Buy!</button>
                    </div>
                </div>


{/* 
                <p>This is a customizable modal.</p>
                <button onClick={close}>CLOSE</button> */}
            </div>
        </Modal>


      {/* <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
      <button onClick={open}>OPEN</button>
      <Modal>
        <div>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal> */}
    </div>
  );
};

export default PopUp1;