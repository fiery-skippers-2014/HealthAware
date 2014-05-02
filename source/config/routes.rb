HealthAware::Application.routes.draw do

  root :to => "home#index"
  resources :users, :only => [:new,:create,:show]
  resources :sessions, :only => [:create,:new]
  resources :foods, :only => [:create]
  delete '/logout' => 'sessions#destroy', :as => 'logout'
end

