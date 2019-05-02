class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'# finish later
        else
            flash.now[:errors] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: 401
        end
    end

    def index
        @users = User.all 
    end

    private 

    def user_params
        params.require(:user).permit(:email_address, :password, :first_name, :last_name, :listings)
    end
end