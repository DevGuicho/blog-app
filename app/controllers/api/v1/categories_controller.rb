# frozen_string_literal: true
module Api
  module V1
    class CategoriesController < ApiController

      def index
        @categories = Category.all
        render json: { message: 'Categories listed', data: @categories }
      end

      def create
        @category = Category.new(category_params)

        if @category.save
          render json: { message: 'Category created', data: @category }, status: :created
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

      private

      def category_params
        params.require(:category).permit(:name)
      end
    end
  end
end
