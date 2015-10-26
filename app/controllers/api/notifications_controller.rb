class Api::NotificationsController < ApplicationController
  def create
    @notification = Notification.new(notification_params)
    if @notification.save
      render json: @notification
    else
      render @notification.errors.full_messages
    end
  end

  private

  def notification_params
    params.require(:notification).permit(:body, :notifyee_id, :notifier_id)
  end
end
