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
    get 'signup', to: 'devise/registrations#new'

    authenticated do
      root to: 'pages#index'
    end

    unauthenticated  do
      root to: 'devise/sessions#new'
    end
  end

  devise_for :users, :controllers => {:registrations => "registrations"}

  resources :users
end
