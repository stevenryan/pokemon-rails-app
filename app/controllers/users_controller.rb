class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @cards = Card.all
  end

  private
  def card_params
    params.require(:card).permit(:set, :number, :user_id, :imageLink)
  end
end
