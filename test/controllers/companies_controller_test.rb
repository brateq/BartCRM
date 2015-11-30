require 'test_helper'

class CompaniesControllerTest < ActionController::TestCase
  setup do
    @company = companies(:one)
  end

  test 'should get index' do
    get :index
    assert_response :success
    assert_not_nil assigns(:companies)
  end

  test 'should get new' do
    get :new
    assert_response :success
  end

  test 'should create company' do
    assert_difference('Company.count') do
      post :create, company: { city: @company.city, contact_id: @company.contact_id, country: @company.country, decription: @company.decription, electronic_invoice: @company.electronic_invoice, email: @company.email, krs: @company.krs, legal_form: @company.legal_form, name: @company.name, nip: @company.nip, phone: @company.phone, postcode: @company.postcode, progress: @company.progress, regon: @company.regon, street: @company.street, trade: @company.trade, type_of_training: @company.type_of_training, user_id: @company.user_id, www: @company.www }
    end

    assert_redirected_to company_path(assigns(:company))
  end

  test 'should show company' do
    get :show, id: @company
    assert_response :success
  end

  test 'should get edit' do
    get :edit, id: @company
    assert_response :success
  end

  test 'should update company' do
    patch :update, id: @company, company: { city: @company.city, contact_id: @company.contact_id, country: @company.country, decription: @company.decription, electronic_invoice: @company.electronic_invoice, email: @company.email, krs: @company.krs, legal_form: @company.legal_form, name: @company.name, nip: @company.nip, phone: @company.phone, postcode: @company.postcode, progress: @company.progress, regon: @company.regon, street: @company.street, trade: @company.trade, type_of_training: @company.type_of_training, user_id: @company.user_id, www: @company.www }
    assert_redirected_to company_path(assigns(:company))
  end

  test 'should destroy company' do
    assert_difference('Company.count', -1) do
      delete :destroy, id: @company
    end

    assert_redirected_to companies_path
  end
end
