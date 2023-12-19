import React from 'react';
import appStore from '../../store/appStore';

const Modal = () => {
    const { childrenModal, toggleIsShowModal } = appStore();
    return (
        <div
            onClick={() => toggleIsShowModal({ isShowModal: false, childrenModal: null })}
            className="absolute top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,.5)] inset-0 flex justify-center items-center z-[999]"
        >
            {childrenModal}
        </div>
    );
};

export default Modal;
