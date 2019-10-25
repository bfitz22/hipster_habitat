json.listing do
    json.partial! '/api/appointments/appointment', appointment: @appointment
end