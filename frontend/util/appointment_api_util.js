export const createAppointment = appointment => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/appointments',
            data: { appointment }
        })
    )
}