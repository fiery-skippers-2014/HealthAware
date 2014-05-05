HealthAware::Application.routes.draw do
  root :to => "home#index"
  resources :goals, :only => [:create,:edit,:update,:new,:destroy]
  resources :users, :only => [:new,:create,:show, :edit, :update]
  resources :sessions, :only => [:create,:new]
  resources :foods, :only => [:create]
  resources :baskets, :only => [:show,:index]
  delete '/logout' => 'sessions#destroy', :as => 'logout'
end

