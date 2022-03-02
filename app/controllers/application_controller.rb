class ApplicationController < ActionController::Base

    include ActionController::Cookies
    include ActionView::Layouts
    skip_before_action :verify_authenticity_token  

    def current_user
        @current_user ||= User.find(session[:user_id])
    end 

end
