HealthAware::Application.routes.draw do
  resources :goals, :only => [:create,:new,:destroy]
  get 'users/chart', :to => 'users#chart'
  resources :users, :only => [:new,:create,:show,:edit, :update]
  resources :sessions, :only => [:create,:new]
  resources :foods, :only => [:create, :destroy]
  resources :baskets, :only => [:show]
  resources :basket_foods, :only => [:destroy]
  delete '/logout' => 'sessions#destroy', :as => 'logout'


  root :to => "home#index"
end

