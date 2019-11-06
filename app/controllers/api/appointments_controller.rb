class Api::AppointmentsController < ApplicationController
    def create
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            render 'api/appointments/show'
        else
            # render json: @appointment.errors.full_messages, status: 400
            render "please sign up or login to make a booking", status: 400
        end
    end

    private

    def appointment_params
        params.require(:appointment).permit(
            :listing_id,
            :user_id, 
            :start,
            :end,
            :num_guests
        )
    end 
end