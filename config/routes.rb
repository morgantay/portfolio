Rails.application.routes.draw do
  get 'pages', to: 'pages#index', as: :root
end
