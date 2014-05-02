require 'spec_helper'
  feature 'A new user' do
    let!(:user){FactoryGirl.create :user}
    scenario "able to sign up"
    visit new_user_path
    click_on "Sign Up"
    fill_in "Username", with: user.username
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    fill_in "Password confirmation", with: user.password
    fill_in "Nutrient", with: "protein"
    click_on "Submit"
    expect(page).to have_content "welcome #{user.username}"
end
