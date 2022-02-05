# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    book1 = Book.create(
        title: "Edgar Allan Poe Collected Works",
        author: "Edgar Allan Poe",
        stock: 2,
        image: "https://images-na.ssl-images-amazon.com/images/I/71lUZ4yLB8S.jpg"
    )

    book2 = Book.create(
        title: "His Dark Materials",
        author: "Philip Pullman",
        stock: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/91zAe4EXmjL.jpg"
    )

    puts "seeded."
