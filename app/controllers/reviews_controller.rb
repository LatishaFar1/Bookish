class ReviewsController < ApplicationController


    def index 
        reviews = Review.all 
        render json: reviews  
    end 


    def create
        review = Review.create(review_params)
        review.book_id = book.id 
        review.user_id = current_user.id
        render json: review 
    end 


    private
    def review_params
        params.permit(:comment, :book_id)
    end 
end
