module Api
  class ApiController < ActionController::API
    include Pagy::Backend

    after_action { pagy_headers_merge(@pagy) if @pagy }
  end
end