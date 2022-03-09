Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope :api do 

  resources :books do 
    resources :reviews 
  end 
  resources :users
  



  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
