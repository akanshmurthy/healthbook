require 'rails_helper'

describe Post do
  context "presence validation" do
    let(:incomplete_post) { Post.new() }
    it "validates presence of required fields" do
      expect(incomplete_post).not_to be_valid
    end
  end

  context "association validation" do
    it { should have_many(:comments) }
    it { should belong_to(:user) }
  end
end

