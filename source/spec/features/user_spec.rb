require 'spec_helper'

feature 'sign up' do
  scenario "be able to sign up"
  visit new_user_path
  fill_in
end
