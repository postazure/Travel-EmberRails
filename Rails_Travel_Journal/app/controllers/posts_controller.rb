class PostsController < ApplicationController
  def index
    render json:Post.all
  end

  def show
    render json:Post.find(params[:id])
  end

  def create
    post = Post.new(post_params)
    post.save
    render json:post
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    post.save
    render json:post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json:post
  end

  private
  def post_params
    params.require(:post).permit(
      :name, :description, :photo
    )
  end
end
