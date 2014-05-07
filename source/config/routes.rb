HealthAware::Application.routes.draw do
  resources :goals, :only => [:create,:edit,:update,:new,:destroy]
  resources :users, :only => [:new,:create,:show, :edit, :update]
  resources :sessions, :only => [:create,:new]
  resources :foods, :only => [:create]
  resources :baskets, :only => [:show, :index, :destroy]
  resources :basket_foods, :only => [:create, :destroy, :show]
  delete '/logout' => 'sessions#destroy', :as => 'logout'
  root :to => "home#index"
end

