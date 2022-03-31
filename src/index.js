let cakeName = document.getElementById('cake-name')
let cakeImg = document.getElementById('cake-image')
let cakeDesc = document.getElementById('cake-description')
let reviewList = document.getElementById('review-list')

let dummy = document.getElementById('dummy')
dummy.remove()
let dummy2 = document.getElementById('dummy2')
dummy2.remove()

let cakeList = document.getElementById('cake-list')
let reviewForm = document.getElementById('review-form')
console.log("form", reviewForm)

const request = async () => {
    let req = await fetch('http://localhost:3000/cakes')
    let res = await req.json()
    console.log("have yo cake,", res)

    let cake1 = res[0]
    cakeName.innerText = cake1.name
    cakeImg.src = cake1.image_url
    cakeDesc.innerText = cake1.description

    let revArray = cake1.reviews
    revArray.forEach((element) => {
        let li = document.createElement('li')
        li.innerText = element
        reviewList.append(li)
    })


    res.forEach((element) => {
        let liItem = document.createElement('li')
        liItem.innerText = element.name
        cakeList.appendChild(liItem)
    })

    
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault()
        // alert('clicky')
        let liNew = document.createElement('li')
        liNew.innerText = review.value
        reviewList.appendChild(liNew)
        review.value = ""
    })
}
request()