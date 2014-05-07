require 'spec_helper'

describe GoalsController do
  let!(:goal){FactoryGirl.create :goal}
  let!(:user){FactoryGirl.create :user}
    context "#create" do
      it "should add a new user goal, no FDA set" do
      ApplicationController.any_instance.stub(:current_user).and_return(user)
      expect {
      post :create, :goal => goal.attributes.merge(nutrient_id: goal.nutrient.id), :limit => {"limit"=>"Maximum"}
      }.to change {Goal.count}.by(1)
      end
      it "should add a new user goal, FDA set" do
      ApplicationController.any_instance.stub(:current_user).and_return(user)
      expect {
      post :create, :goal => goal.attributes.merge(nutrient_id: goal.nutrient.id), :limit => {"limit"=>"Maximum"},:amount => "FDA"
      }.to change {Goal.count}.by(1)
      end
    end
end
