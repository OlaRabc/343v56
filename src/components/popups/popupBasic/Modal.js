import React, { useRef, useEffect, useState } from 'react';
import reactDom from 'react-dom';
import './Modal.css';
import useWindowDimensions from '../../../utli/windowDimensions';
import { usePopupPlacerX, usePopupPlacerY } from '../../../utli/popupPlacer';

const Modal = ({
    open,
    children,
    onClose,
    posX,
    posY
}) => {
    const elementRef = useRef(null);
    const [ popupDimensions, setPopupDimensions] = useState({width: 0, height: 0});
  
    useEffect (() => {
        if(elementRef.current && open) {
                setPopupDimensions({
                    width: elementRef.current.clientWidth,
                    height: elementRef.current.clientHeight
                })
        }
        if(!open) {
            setPopupDimensions({
                width: 0,
                height: 0
            })
        }
    }, [open]);

    const { windowHeight, windowWidth } = useWindowDimensions();
    const modalPosX = usePopupPlacerX(posX, windowWidth, popupDimensions.width);
    const modalPosY = usePopupPlacerY(posY, windowHeight, popupDimensions.height);

    let styles;
    if(posX!=null && posY!=null) {
        styles = {
            top: modalPosY + 'px',
            left: modalPosX + 'px'
        }
    } else {
        styles = {
            top: windowHeight/2 + 'px',
            left: windowWidth/2 + 'px'
        }
    }

    if(!open) return null
    return reactDom.createPortal(
        <>
        <div
        className='overlay-styles'
        onClick={onClose}/>
        <div className='modal-styles' style={styles} ref={elementRef}>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;