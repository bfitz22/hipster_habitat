# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email_address   :string           not null
#

class User < ApplicationRecord
    validates :session_token, :first_name, :last_name, :password_digest, presence: true
    validates :email_address, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    has_many :listings
    has_many :bookings
    has_many :reviews

    after_initialize :ensure_session_token

    def self.find_by_credentials(email_address, password)
        @user = User.find_by(email_address: email_address)
        @user && @user.is_password?(password) ? @user : nil 
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
