const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kkal: 200,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kkal: 300,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kkal: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    }
}

const btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}
function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        parentId = parent.getAttribute('id'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].kkalSumm
}

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return "rgb(" + r + "," + g + "," + b + ")"
}

const timer = document.querySelector('.header__timer-extra'),
    lvl = document.querySelector('.header__timer')
function time() {
    if (timer.innerHTML < 80) {
        timer.innerHTML++
        lvl.style.color = color()
        setTimeout(() => {
            time()
        }, 50);
    } else if (timer.innerHTML < 100) {
        timer.innerHTML++
        lvl.style.color = color()
        setTimeout(() => {
            time()
        }, 150);
    }
}
time()

const info = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    view__close = document.querySelector('.view__close')
for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('dblclick', function () {
        view.classList.add('active')
        img(this)
    })
}
function img(el) {
    const parent = el.closest('.main__product'),
        img = parent.querySelector('.main__product-img'),
        imgAtt = img.getAttribute('src'),
        viewImg = document.querySelector('.view img')
    viewImg.setAttribute('src', imgAtt)
}

view__close.addEventListener('click', () => {
    view.classList.remove('active')
})



const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out')


addCart.addEventListener('click', () => {
    receipt.style.display = 'block'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '20%'
    }, 500);

    const objValue = Object.values(product)
    let text = ''
    objValue.forEach((item, i) => {
        if (item.amount > 0) {
            text += `    
            <div class="receipt_product">
                <span>${i + 1}</span>
                <div class="product_name">${item.name}</div>
                <div class="product_amount">${item.amount} X ${item.price}</div>
                <div class="product_price">= ${item.Summ}</div>
            </div>`
        }
    })
    receiptWindowOut.innerHTML = text

})
