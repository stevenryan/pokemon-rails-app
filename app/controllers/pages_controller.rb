class PagesController < ApplicationController

  def index
    @messages = Message.all
    @users = User.all
    @user = User.find(params[:id])
  end

end
