require 'spec_helper'

describe Nutrient do
  context 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:FDA_recommendation) }
  end
  context 'associations' do
    it { should have_many(:users).through(:goals)}

  end
end