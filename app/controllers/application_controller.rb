class ApplicationController < ActionController::Base

    include ActionController::Cookies
    include ActionView::Layouts
    skip_before_action :verify_authenticity_token  

end
