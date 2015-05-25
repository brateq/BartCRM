#= require jquery
#= require jquery_ujs
#= require turbolinks
#= require twitter/bootstrap
#= require jquery.turbolinks
#= require select2
#= require moment
#= require bootstrap-datetimepicker
#= require autocomplete-rails
#= require_tree .

### quick select element ###

### form validation ###

isNotEmpty = (field) ->
  if field.value == ''
    errorInfo field, 'empty'
    false
  else
    errorInfo field, 'ok'
    true

isANumber = (field) ->
  if isNotEmpty(field) == true
    if isNaN(field.value)
      errorInfo field, 'NaN'
    else
      errorInfo field, 'ok'
  return

isEmail = (field) ->
  if isNotEmpty(field) == true
    atPosition = field.value.indexOf('@')
    dotPosition = field.value.lastIndexOf('.')
    if atPosition < 1 or dotPosition + 1 == field.value.length or atPosition + 3 > dotPosition
      errorInfo field, 'wrongEmail'
    else
      errorInfo field, 'ok'
  return

errorInfo = (field, status) ->
  switch status
    when 'ok'
      document.getElementById('i' + field.name).innerHTML = ''
    when 'empty'
      document.getElementById('i' + field.name).innerHTML = 'Don\'t let me be empty!'
    when 'NaN'
      document.getElementById('i' + field.name).innerHTML = 'This is not a number!'
    when 'wrongEmail'
      document.getElementById('i' + field.name).innerHTML = 'This is not a valid email'
  return

Init = ->
  person = document.getElementById('person')

  person.onblur = ->
    isNotEmpty this
    return

  account = document.getElementById('account')

  account.onblur = ->
    isANumber this
    return

  email = document.getElementById('email')

  email.onblur = ->
    isEmail this
    return

  return

$(document).ready ->
  $('select#simple-example').select2()
  return

### show / hide button ###

$(document).ready ->
  $('button.add').click ->
    if $('#' + @dataset.add).is(':visible')
      $(this).html 'add'
    else
      $(this).html 'hide'
    $('#' + @dataset.add).toggle 400
    return
  return
window.onload = Init