class RoomsController < ApplicationController
  before_action :authenticate_user!
  def show
    @users = User.all
    @messages = Message.all
  end
end
