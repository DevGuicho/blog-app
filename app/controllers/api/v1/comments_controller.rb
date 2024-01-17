# frozen_string_literal: true
module Api
  module V1
    class CommentsController < ApiController
      before_action :set_comment, only: [:show, :destroy, :update]

      def index
        @pagy, @comments = pagy(Comment.where(article_id: params[:article_id]).most_recent)

        render json: { message: 'Coments listed', data: @comments, pagination: @pagy }, status: :ok
      end

      def show
        render json: { message: 'Coment retrieved', data: @comment }, status: :ok
      end

      def create
        @article = Article.find_by(id: params[:article_id])
        @comment = @article.comments.create(comment_params)
        render json: { message: 'commente created successfully', data: @comment }, status: :created
      end

      def update
        if @comment.update(comment_params)
          render json: { message: 'comment updated successfully', data: @comment }, status: :ok
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @comment.destroy
        render json: { message: 'Comment deleted successfully', data: params[:id] }, status: :ok
      end

      private

      def set_comment
        @comment = Comment.find_by(id: params[:id])
      end

      def comment_params
        params.require(:comment).permit(:email_commenter, :body, :article_rate)
      end
    end
  end
end
