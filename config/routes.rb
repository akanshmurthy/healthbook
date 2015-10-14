Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'login', to: 'sessions#new'
  get 'signup', to: 'users#new'
  resources :users, only: [:create, :new, :index]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :posts
  end
end
