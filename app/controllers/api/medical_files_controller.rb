class Api::MedicalFilesController < ApplicationController

    def index
      @medical_files = MedicalFile.where("medical_files.user_id = ?", current_user.id)
      render json: @medical_files
    end

    def create
      @medical_file = MedicalFile.new(file_params)
      @medical_file.user_id = current_user.id
      if @medical_file.save
        render json: @medical_file
      else
        render @medical_file.errors.full_messages
      end
    end

    def show
      @medical_file = MedicalPost.find(params[:id])
      render json: @medical_file
    end

    def destroy
      @medical_file = MedicalPost.find(params[:id])
      @medical_file.destroy
      render json: @medical_file
    end

    private

    def file_params
      params.require(:medical_file).permit(:title, :url_string, :user_id)
    end
end
