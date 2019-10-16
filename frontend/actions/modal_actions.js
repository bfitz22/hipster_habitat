export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_SEARCH_MODAL = "OPEN_SEARCH_MODAL";

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const openSearchModal = listings => {
    return {
        type: OPEN_SEARCH_MODAL,
        listings
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};