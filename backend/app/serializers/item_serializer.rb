class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :user_id
end
