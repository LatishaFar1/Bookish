# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    book1 = Book.create!(title: "Edgar Allan Poe Collected Works",
        author: "Edgar Allan Poe",
        price: 5.00,
        image: "https://images-na.ssl-images-amazon.com/images/I/71lUZ4yLB8S.jpg"
    )

    book2 = Book.create!(title: "His Dark Materials",
        author: "Philip Pullman",
        price: 4.00,
        image: "https://images-na.ssl-images-amazon.com/images/I/91zAe4EXmjL.jpg"
    )

    book3 = Book.create!(title: "Kindred",
        author: "Octavia Butler",
        price: 5.00,
        image: "https://images-na.ssl-images-amazon.com/images/I/81KU7ZGvnZL.jpg"
    )

    book4 = Book.create!(title: "War and Peace",
        author: "Leo Tolstoy",
        price: 10.00,
        image: "https://images-na.ssl-images-amazon.com/images/I/51s4UBf-y8L._SX327_BO1,204,203,200_.jpg"
    )

    book5 = Book.create!(title: "Maus",
        author: "Art Spiegelman",
        price: 9.00,
        image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Maus_%28volume_1%29_cover.jpg"
    )

    book6 = Book.create!(title: "The Old Guard: Book One",
        author: "Rucka, Fernandez, Miwa, Wynne",
        price: 3.00,
        image: "https://images-na.ssl-images-amazon.com/images/I/81BhWtD1UwL.jpg"
    )

    book7 = Book.create!(title: "The Art of War",
    author: "Sun Tzu",
    price: 4.00,
    image: "https://kbimages1-a.akamaihd.net/7bed7ed8-6659-4d18-b229-8114157c30fe/353/569/90/False/the-art-of-war-2.jpg"
)

    book8 = Book.create!(title: "Children of Blood and Bone",
    author: "Tomi Adeyemi",
    price: 6.00,
    image: "https://images-na.ssl-images-amazon.com/images/I/A1e37vzc5VL.jpg"
    )
        
    book9 = Book.create!(title: "The Hobbit",
    author: "J. R. R. Tolkien",
    price: 6.00,
    image: "https://cdn.shopify.com/s/files/1/1465/9410/products/The_20Hobbit_ba868ace-b034-4550-a906-9fc204159c28_2400x.jpg?v=1573137954"
    )

    book10 = Book.create!(title: "A Discovert of Witches",
    author: "Deborah Harkness",
    price: 3.00,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Discovery_of_Witches_Cover.jpg"
    )
    
    
    puts "seeded."
AdminUser.create!(email: 'admin@example.com', password: 'password123', password_confirmation: 'password123') if Rails.env.development?