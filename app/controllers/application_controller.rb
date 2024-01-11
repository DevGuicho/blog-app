class ApplicationController < ActionController::Base

  def website
    render template: 'layouts/website'
  end
end
