HealthAware::Application.routes.draw do
  resources :goals, :only => [:create,:new,:destroy]
  get 'users/chart', :to => 'users#chart'
  resources :users, :only => [:new,:create,:edit, :update]
  resources :sessions, :only => [:create,:new]
  resources :foods, :only => [:create, :destroy]
  resources :baskets, :only => [:show]
  delete '/logout' => 'sessions#destroy', :as => 'logout'
  root :to => "home#index"
end

