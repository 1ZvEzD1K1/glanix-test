let modal = document.querySelector('.modal')
let modalImg = document.querySelector('.modal_img')
let closeBtn = document.querySelector('.close')
let container = document.querySelector('._container')
let refreshBtn = document.querySelector('.refreshImg')

let numberOfImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => `./img/${el}.jpg`)

window.addEventListener('load', () => {
    if (localStorage.getItem('remowedImages') == null) {
        localStorage.setItem('remowedImages', '');
    }

    let total = document.querySelector('.total')
    let time = document.querySelector('.time')
    total.innerHTML = `Картинок на сторінці: ${numberOfImg.filter((el) => !isDeleted(el)).length}`
    time.innerHTML = `Поточна дата та час: ${getDate()}`

    numberOfImg.filter((el) => !isDeleted(el)).forEach(createImgBlock)
    highlightFirst();
})

window.addEventListener('resize', highlightFirst);

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

refreshBtn.addEventListener('click', () => {
    localStorage.setItem('remowedImages', '')
    container.innerHTML = ''
    numberOfImg.filter((el) => !isDeleted(el)).forEach(createImgBlock)
    document.querySelector('.total').innerHTML = `Картинок на сторінці: ${numberOfImg.filter((el) => !isDeleted(el)).length}`
    highlightFirst();
})

function isDeleted(img) {
    return localStorage.getItem('remowedImages').split(';').includes(img)
}

function createImgBlock(img) {
    let divImg = document.createElement('div')
    divImg.classList.add('image_container')
    let blockImg = document.createElement('img')
    blockImg.classList.add('grid_img')
    blockImg.setAttribute('src', img)
    blockImg.setAttribute('alt', img)
    let spanImg = document.createElement('span')
    spanImg.innerHTML = '&times;'
    spanImg.classList.add('del')
    spanImg.dataset.target = img
    divImg.appendChild(blockImg)
    divImg.appendChild(spanImg)
    container.appendChild(divImg)

    spanImg.addEventListener('click', () => {
        localStorage.setItem('remowedImages', localStorage.getItem('remowedImages') + `${spanImg.dataset.target};`)
        container.innerHTML = ''
        numberOfImg.filter((el) => !isDeleted(el)).forEach(createImgBlock)
        document.querySelector('.total').innerHTML = `Картинок на сторінці: ${numberOfImg.filter((el) => !isDeleted(el)).length}`
        highlightFirst();
    })

    blockImg.addEventListener('click', () => {
        modalImg.setAttribute('src', blockImg.getAttribute('src'))
        modal.style.display = 'block'
    })
}

function getDate() {
    let date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth() + 1).toString()
    formatedMonth = (month.length === 1) ? ("0" + month) : month
    day = date.getDate().toString()
    formatedDay = (day.length === 1) ? ("0" + day) : day,
        hour = date.getHours().toString()
    formatedHour = (hour.length === 1) ? ("0" + hour) : hour
    minute = date.getMinutes().toString()
    formatedMinute = (minute.length === 1) ? ("0" + minute) : minute
    return formatedDay + "." + formatedMonth + "." + year + " " + formatedHour + ':' + formatedMinute;
};

function highlightFirst() {
    let flexChildren = document.querySelectorAll('.image_container');
    let previousOffset = 0;
    for (let flexChild of flexChildren) {
        if (flexChild.offsetTop > previousOffset) {
            previousOffset = flexChild.offsetTop;
            flexChild.classList.add('redBorder');
        } else {
            flexChild.classList.remove('redBorder');
        }
    }
}

