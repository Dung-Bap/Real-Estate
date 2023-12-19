import { create } from 'zustand';
import Modal from '../components/modal/Modal';

const appStore = create(set => ({
    isShowModal: false,
    childrenModal: null,
    toggleIsShowModal: ({ isShowModal, childrenModal }) => set(() => ({ isShowModal, childrenModal })),
}));

export default appStore;
