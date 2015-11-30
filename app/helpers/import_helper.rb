module ImportHelper
  def fields(category)
    case category
    when 'companies'
      return %w(name address phone www email legal_form street postcode city country krs decription nip
                regon progress type_of_training trade electronic_invoice tag_list wojewodztwo)
    when 'contacts'
      return %w(name surname mobile_number office_number street postalcode city country dont_call
                newslatter know_from description email work_in_company)
    end
  end
end
