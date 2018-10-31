# frozen_string_literal: true

Bartcrm::Application.routes.draw do
  get 'dashboard/index'
  resources :roles

  root 'companies#index'
  resources :products
  resources :documents
  get 'raports/index', as: 'raports'
  get 'raports/calls'
  resources :leads
  resources :participants
  resources :trainings

  resources :manager
  devise_for :users,
             controllers: { registrations: 'registrations' },
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout'
             }
  resources :users

  get '/changelog', to: 'static#changelog'
  get 'static/contact'

  resources :companies do
    collection { post :import }
    resources :contacts
    get :autocomplete_company_city, on: :collection
  end
  get 'companies/configuration'
  get 'company/:id/fullshow' => 'companies#fullshow', as: :fullshow
  get 'company/:id/fulledit' => 'companies#fulledit', as: :fulledit

  get 'settings/index'
  get 'settings/main'
  resources :schedules
  resources :calls
  resources :notes
  resources :imports
  resources :contacts
end
