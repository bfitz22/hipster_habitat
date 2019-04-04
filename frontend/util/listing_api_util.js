export const fetchListings = () => (
    $.ajax({
        method: 'GET',
        url: 'api/listings'
    })
);

export const fetchMapListings = (data) => (
    $.ajax({
        method: 'GET',
        url: 'api/listings',
        data
    })
);

export const fetchListing = id => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${id}`
    })
);