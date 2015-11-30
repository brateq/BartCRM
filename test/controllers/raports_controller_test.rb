require 'test_helper'

class RaportsControllerTest < ActionController::TestCase
  test 'should get index' do
    get :index
    assert_response :success
  end

  test 'should get calls' do
    get :calls
    assert_response :success
  end
end
