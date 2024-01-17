# frozen_string_literal: true

module Api
  module V1
    class ArticlesController < ApiController
      before_action :set_article, only: %i[show update destroy]

      def index
        @pagy, @articles = pagy(Article.all.order(created_at: :desc), page: params[:page])

        render json: { message: 'Articles listed', data: @articles, pagination: @pagy }, status: :ok
      end

      def show
        if @article.present?
          render json: { message: 'Article retrieved', data: @article }, status: :ok
        else
          render json: { message: 'Article not found' }, status: :not_found
        end
      end

      def create
        @article = Article.new(article_params)

        if @article.save
          render json: { message: 'Article created', data: @article }, status: :created
        else
          render json: @article.errors, status: :unprocessable_entity
        end
      end

      def update
        if @article.update(article_params)
          render json: { message: 'Article created', data: @article }, status: :ok
        else
          render json: @article.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @article.destroy
        render json: { message: 'Article deleted' }, status: :ok
      end

      private

      def article_params
        params.require(:article).permit(:title, :body, :category_id, :image_url)
      end

      def set_article
        @article = Article.find_by(id: params[:id])
      end
    end
  end
end
