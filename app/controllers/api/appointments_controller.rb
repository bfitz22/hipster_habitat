class Api::AppointmentsController < ApplicationController
    def create
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            render 'api/appointments/show'
        else
            render json: @appointment.errors.full_messages, status: 400
        end
    end

    def show
        @appointment = Appointment.find(params[:id])
    end

    private

    def appointment_params
        params.require(:appointment).permit(
            :booking_id,
            :client_id, 
            :start,
            :end,
            :num_guests
        )
    end 
end