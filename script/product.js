const url = window.location.search
const id = new URLSearchParams(url).get("product-id")
const $picture = document.querySelector(".picture")
const $title = document.querySelector(".product-title")
const $text = document.querySelector(".product-text")
const $price = document.querySelector(".product-price")
const $rating = document.querySelector(".product-rating")
const $count = document.querySelector(".product-count")
const $category = document.querySelector(".product-category")

const loadData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => displayData(data))
}
loadData()

const displayData = (data) => {
    console.log(data)
    $picture.src = data.image
    $category.innerHTML = data.category
    $title.innerHTML = data.title
    $price.innerHTML = data.price + '$'
    $text.innerHTML = data.description
    $rating.innerHTML = 'Rating:' + ' ' + data.rating.rate
    $count.innerHTML = 'Count:' + ' ' + data.rating.count
}