# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140716121317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "trackable_id"
    t.string   "trackable_type"
    t.integer  "owner_id"
    t.string   "owner_type"
    t.string   "key"
    t.text     "parameters"
    t.integer  "recipient_id"
    t.string   "recipient_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "activities", ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type", using: :btree
  add_index "activities", ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type", using: :btree
  add_index "activities", ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type", using: :btree

  create_table "businesses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "calls", force: :cascade do |t|
    t.string   "subject"
    t.string   "call_type"
    t.datetime "time"
    t.integer  "user_id"
    t.integer  "company_id"
    t.integer  "contact_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "calls", ["company_id"], name: "index_calls_on_company_id", using: :btree
  add_index "calls", ["contact_id"], name: "index_calls_on_contact_id", using: :btree
  add_index "calls", ["user_id"], name: "index_calls_on_user_id", using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.string   "www"
    t.string   "email"
    t.string   "legal_form"
    t.integer  "phone",              limit: 8
    t.integer  "fax",                limit: 8
    t.string   "street"
    t.string   "postcode"
    t.string   "city"
    t.string   "country"
    t.integer  "krs",                limit: 8
    t.text     "description"
    t.integer  "nip",                limit: 8
    t.integer  "regon",              limit: 8
    t.string   "progress"
    t.string   "type_of_training"
    t.string   "trade"
    t.boolean  "electronic_invoice"
    t.string   "wojewodztwo"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "business_id"
  end

  add_index "companies", ["business_id"], name: "index_companies_on_business_id", using: :btree
  add_index "companies", ["user_id"], name: "index_companies_on_user_id", using: :btree

  create_table "contacts", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.integer  "mobile_number"
    t.integer  "office_number"
    t.string   "street"
    t.string   "postalcode"
    t.string   "city"
    t.string   "country"
    t.boolean  "dont_call"
    t.string   "newslatter"
    t.integer  "created_by"
    t.integer  "modified_by"
    t.string   "know_from"
    t.text     "description"
    t.string   "email"
    t.integer  "user_id"
    t.integer  "company_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "business_id"
  end

  add_index "contacts", ["business_id"], name: "index_contacts_on_business_id", using: :btree
  add_index "contacts", ["company_id"], name: "index_contacts_on_company_id", using: :btree
  add_index "contacts", ["user_id"], name: "index_contacts_on_user_id", using: :btree

  create_table "documents", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "company_id"
    t.integer  "contact_id"
    t.integer  "lead_id"
    t.integer  "training_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "data_file_name"
    t.string   "data_content_type"
    t.integer  "data_file_size",    limit: 8
    t.datetime "data_updated_at"
    t.integer  "product_id"
  end

  add_index "documents", ["company_id"], name: "index_documents_on_company_id", using: :btree
  add_index "documents", ["contact_id"], name: "index_documents_on_contact_id", using: :btree
  add_index "documents", ["lead_id"], name: "index_documents_on_lead_id", using: :btree
  add_index "documents", ["product_id"], name: "index_documents_on_product_id", using: :btree
  add_index "documents", ["training_id"], name: "index_documents_on_training_id", using: :btree
  add_index "documents", ["user_id"], name: "index_documents_on_user_id", using: :btree

  create_table "imports", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "base_file_name"
    t.string   "base_content_type"
    t.integer  "base_file_size",    limit: 8
    t.datetime "base_updated_at"
    t.string   "header",                      default: [], array: true
  end

  add_index "imports", ["user_id"], name: "index_imports_on_user_id", using: :btree

  create_table "leads", force: :cascade do |t|
    t.string   "status"
    t.integer  "amount"
    t.integer  "user_id"
    t.integer  "company_id"
    t.integer  "training_id"
    t.integer  "contact_id"
    t.integer  "note_id"
    t.integer  "schedule_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "product_id"
  end

  add_index "leads", ["company_id"], name: "index_leads_on_company_id", using: :btree
  add_index "leads", ["contact_id"], name: "index_leads_on_contact_id", using: :btree
  add_index "leads", ["note_id"], name: "index_leads_on_note_id", using: :btree
  add_index "leads", ["product_id"], name: "index_leads_on_product_id", using: :btree
  add_index "leads", ["schedule_id"], name: "index_leads_on_schedule_id", using: :btree
  add_index "leads", ["training_id"], name: "index_leads_on_training_id", using: :btree
  add_index "leads", ["user_id"], name: "index_leads_on_user_id", using: :btree

  create_table "notes", force: :cascade do |t|
    t.text     "text"
    t.string   "action_type"
    t.integer  "user_id"
    t.integer  "company_id"
    t.integer  "contact_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "training_id"
    t.integer  "product_id"
  end

  add_index "notes", ["company_id"], name: "index_notes_on_company_id", using: :btree
  add_index "notes", ["contact_id"], name: "index_notes_on_contact_id", using: :btree
  add_index "notes", ["product_id"], name: "index_notes_on_product_id", using: :btree
  add_index "notes", ["training_id"], name: "index_notes_on_training_id", using: :btree
  add_index "notes", ["user_id"], name: "index_notes_on_user_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.integer  "price"
    t.datetime "start"
    t.datetime "end"
    t.string   "code"
    t.integer  "user_id"
    t.integer  "business_id"
    t.text     "description"
    t.string   "stage"
    t.string   "place"
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "products", ["user_id"], name: "index_products_on_user_id", using: :btree

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "schedules", force: :cascade do |t|
    t.string   "action_type"
    t.string   "subject"
    t.datetime "time"
    t.integer  "company_id"
    t.integer  "contact_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "training_id"
    t.integer  "product_id"
  end

  add_index "schedules", ["company_id"], name: "index_schedules_on_company_id", using: :btree
  add_index "schedules", ["contact_id"], name: "index_schedules_on_contact_id", using: :btree
  add_index "schedules", ["product_id"], name: "index_schedules_on_product_id", using: :btree
  add_index "schedules", ["training_id"], name: "index_schedules_on_training_id", using: :btree
  add_index "schedules", ["user_id"], name: "index_schedules_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "trainings", force: :cascade do |t|
    t.string   "topic"
    t.integer  "price"
    t.datetime "start"
    t.datetime "end"
    t.string   "training_code"
    t.integer  "user_id"
    t.text     "description"
    t.string   "stage"
    t.string   "place"
    t.integer  "company_id"
    t.integer  "business_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "category"
  end

  add_index "trainings", ["company_id"], name: "index_trainings_on_company_id", using: :btree
  add_index "trainings", ["user_id"], name: "index_trainings_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password"
    t.string   "name"
    t.string   "surname"
    t.string   "email"
    t.integer  "phone"
    t.integer  "role_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "crypted_password"
    t.string   "salt"
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "business_id"
  end

  add_index "users", ["business_id"], name: "index_users_on_business_id", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
