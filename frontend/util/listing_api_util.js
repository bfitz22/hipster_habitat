export const fetchListings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/listings'
    })
);

export const fetchMapListings = (filters) => {
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