require 'spec_helper'
  feature 'A new user' do
    let!(:user){FactoryGirl.create :user}
    scenario "able to sign up", js: true do
        visit new_user_path
        click_on "Sign Up"
        fill_in "Username", with: user.username
        fill_in "Email", with: user.email
        fill_in "Password", with: user.password
        fill_in "Password confirmation", with: user.password
        page.select 'Protein', :from => 'goal_nutrient_id'
        fill_in "goal_target", with: 50
        click_on "Submit"
        expect(page).to have_content "#{user.username}"
    end
end
