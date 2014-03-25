require 'test_helper'

class ContactsControllerTest < ActionController::TestCase
  setup do
    @contact = contacts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:contacts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create contact" do
    assert_difference('Contact.count') do
      post :create, contact: { city: @contact.city, company_id: @contact.company_id, country: @contact.country, created_by: @contact.created_by, description: @contact.description, dont_call: @contact.dont_call, email: @contact.email, know_from: @contact.know_from, mobile_number: @contact.mobile_number, modified_by: @contact.modified_by, name: @contact.name, newslatter: @contact.newslatter, office_number: @contact.office_number, postalcode: @contact.postalcode, street: @contact.street, surname: @contact.surname, user_id: @contact.user_id }
    end

    assert_redirected_to contact_path(assigns(:contact))
  end

  test "should show contact" do
    get :show, id: @contact
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @contact
    assert_response :success
  end

  test "should update contact" do
    patch :update, id: @contact, contact: { city: @contact.city, company_id: @contact.company_id, country: @contact.country, created_by: @contact.created_by, description: @contact.description, dont_call: @contact.dont_call, email: @contact.email, know_from: @contact.know_from, mobile_number: @contact.mobile_number, modified_by: @contact.modified_by, name: @contact.name, newslatter: @contact.newslatter, office_number: @contact.office_number, postalcode: @contact.postalcode, street: @contact.street, surname: @contact.surname, user_id: @contact.user_id }
    assert_redirected_to contact_path(assigns(:contact))
  end

  test "should destroy contact" do
    assert_difference('Contact.count', -1) do
      delete :destroy, id: @contact
    end

    assert_redirected_to contacts_path
  end
end
