class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo
end
