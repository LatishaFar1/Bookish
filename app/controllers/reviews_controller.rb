class ReviewsController < ApplicationController
    before_action :find_book

    def index
        reviews = Review.all
        render json: reviews 
    end 


    def create
     @review = current_user.reviews.build(review_params)
        if @review.save
            render json: @review, status: :created
        else
            render json: {error: @review.errors.full_messages}
        end 
    end 

    private

    def review_params
        params.permit(:comment, :book_id)
    end 

    def find_book
        @book = Book.find_by(id: params[:id])
    end
    
end
