Rails.application.routes.draw do

  get '/games', to: 'pages#gameshub'
  get '/games/hangman', to: 'games#hangman'
  get '/games/pokeclimb', to: 'games#pokeclimb'
  get '/games/ekans', to: 'games#pokesnake'
  get '/games/show', to: 'pages#show'
  get '/home', to: 'pages#index'
  get '/pokemart', to: 'pages#pokemart'

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end

  devise_scope :user do
    get 'signup', to: 'devise/registrations#new'
  end

  devise_for :users, :controllers => {:registrations => "registrations"}
  root to: 'pages#index'

  resources :users
end
