# frozen_string_literal: true

module CompaniesHelper
  def fields
    %w[name address phone www email legal_form street postcode city country krs decription
       nip regon progress type_of_training trade electronic_invoice tag_list wojewodztwo]
  end
end
