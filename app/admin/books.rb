ActiveAdmin.register Book do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :author, :stock, :price, :image
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :author, :stock, :price, :image]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
  permit_params :title, :author, :price, :image 

 
  
end
