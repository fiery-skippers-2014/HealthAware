require 'spec_helper'

describe UsersController do
    let!(:user_attr){FactoryGirl.attributes_for :user}
      let!(:new_goal){FactoryGirl.attributes_for :goal}

  context '#new' do
    it "should return the sign up page" do
      get :new
      expect(response).to be_success
    end
    context '#create' do
      it "should create a new user with valid params" do
      expect {
        post :create, :user => user_attr
        }.to change {User.count}.by(1)
      end


    end
  end
end