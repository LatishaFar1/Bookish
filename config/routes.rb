Rails.application.routes.draw do

  scope :api do 
  resources :books, only: [:index, :show]
  resources :users



  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
