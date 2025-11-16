import React, { useEffect, useRef } from "react";
import { IconClose } from "../icons";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (isOpen) openDialog();
        else closeDialog();
    }, [isOpen]);

    const openDialog  = () => dialogRef.current.showModal();
    const closeDialog = () => dialogRef.current.close();

    return (
        <React.Fragment>
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                    <button autoFocus onClick={onClose} className="btn-close">
                        <IconClose />
                    </button>
                </div>
                
                <div className="body">
                    {children}
                </div>
            </dialog>
        </React.Fragment>
    );
}
