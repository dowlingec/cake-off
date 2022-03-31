let cakeName = document.getElementById('cake-name')
let cakeImg = document.getElementById('cake-image')
let cakeDesc = document.getElementById('cake-description')
let reviewList = document.getElementById('review-list')

let dummy = document.getElementById('dummy')
dummy.remove()
let dummy2 = document.getElementById('dummy')
dummy2.remove()

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
    
}
request()