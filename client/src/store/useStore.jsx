import { create } from 'zustand';

const useStore = create(set => ({
    token: null,
}));

export default useStore;
