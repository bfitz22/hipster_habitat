export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_OBJECT_MODAL = "OPEN_OBJECT_MODAL";

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const openObjectModal = objects => {
    return {
        type: OPEN_OBJECT_MODAL,
        objects
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};