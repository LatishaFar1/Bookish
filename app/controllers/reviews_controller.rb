class ReviewsController < ApplicationController
    before_action :find_book

    def index
        reviews = Review.all
        render json: reviews 
    end 

    def new 
        review = Review.new
    end 

    def create
        @review.new(review_params)
        @review.book_id = @book.id 
        @review.user_id = current_user.id
    end 

    private

    def review_params
        params.require(:review).permit(:comment, :book_id, :review)
    end 

    def find_book
        book = Book.find_by(id: params[:book_id])
    end
end
