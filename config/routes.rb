Rails.application.routes.draw do

  get '/games', to: 'pages#gameshub'
  get '/games/hangman', to: 'pages#hangman'
  get '/games/pokeclimb', to: 'pages#pokeclimb'
  get '/games/ekans', to: 'pages#pokesnake'

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end

  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end

  devise_for :users, :controllers => {:registrations => "registrations"}
  root to: 'pages#index'

end
