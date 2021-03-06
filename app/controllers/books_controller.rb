class BooksController < ApplicationController

    def index 
        books = Book.all 
        render json: books, include: [:reviews]
    end 

    def show 
        book = Book.find(params[:id])
   
        render json: book, include: [:reviews]
    end 


    def create
        book = Book.create(book_params)
        render json: book 
    end 

    # def destroy
    #     book = Book.find_by(:id params[:id])
    #     book.destroy
    #     render json: {message: "Book deleted"}
    # end 

    private 

    def book_params
        params.permit(:title, :author, :stock, :image)
    end 

    

end
