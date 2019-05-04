export const fetchListings = () => {
    return(
        $.ajax({
            method: 'GET',
            url: 'api/listings'
        })
    )
};

export const fetchMapListings = (filters) => {
    debugger
    return (
    $.ajax({
        method: 'GET',
        url: `api/listings`,
        filters
    })
    )
};

export const fetchListing = id => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${id}`
    })
);

export const createListing = (listing) => {
    return(
        $.ajax({
            method: 'POST',
            url: 'api/listings',
            data: { listing }
        })
    )
}