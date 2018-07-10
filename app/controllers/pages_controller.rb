class PagesController < ApplicationController

  def index
    @messages = Message.all
    @users = User.all
  end

  def hangman
    @score = current_user.hangman_score
  end
end
