let product = [
    {
        id: 111,
        name: "Plain",
        price: 40,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/97.jpg"
    },
    {
        id: 112,
        name: "Paper Roast",
        price: 65,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/98.jpg"
    },
    {
        id: 113,
        name: "Onion Roast",
        price: 80,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/99.jpg"
    },
    {
        id: 114,
        name: "Egg Parotta",
        price: 55,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/100.jpg"
    },
    {
        id: 115,
        name: "Plain Omelette",
        price: 25,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/101.jpg"
    },
    {
        id: 116,
        name: "Kadai Fry",
        price: 150,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/102.jpg"
    },
    {
        id: 117,
        name: "Egg Veechu",
        price: 65,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/103.jpg"
    },
    {
        id: 118,
        name: "Egg Roast",
        price: 65,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/104.jpg"
    },
    {
        id: 119,
        name: "Paper Roast",
        price: 55,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/98.jpg"
    },
    {
        id: 120,
        name: "Paper Roast",
        price: 75,
        qty: 1,
        image: "https://www.tutorjoes.in/public/js_program/12_cart/images/103.jpg"
    },
];

let viewrcord = () => {
    let tbl = "";
    product.map((val) => {
        return tbl += `
        <div style="border: 9px solid white; background-color: white; border-radius: 10px;">
        <img style="object-fit:cover; width: 210px; height: 200px; border-radius: 10px;"
            src="${val.image}" alt="">
        <span style="font-size: 18px; color: #ff4757; font-weight: 600;">${val.name}</span><br>
        <span>Rs.${val.price}</span>
        <span style="margin: 0 30% 0 25%"></span>
        <button onclick="addcart(${val.id})" style="border-radius: 10px; background-color: #2ed573;">
                                <img style="padding: 5px; width: 32px; border-radius: 5px;"
                                    src="img/shopping-cart (1).png">
                            </button>
    </div>
        `
    });
    document.getElementById('product').innerHTML = tbl;
}
viewrcord();


let cart = [];
const addcart = (id) => {
    let allcart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    let dubcart = allcart.find((val) => {
        return val.id == id;
    });
    if (dubcart) {
        alert('Item All Ready Exist...');
        return false;
    }

    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
        product.map((val) => {
            if (val.id == id) {
                cart.push(val);
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        let old = JSON.parse(localStorage.getItem('cart'));
        product.map((val) => {
            if (val.id == id) {
                old.push(val);
            }
        });
        localStorage.setItem('cart', JSON.stringify(old));
    }
    alert('Product Successfully add in cart');
    viewrcord();
    viewcart();
}

// viewcart product
const viewcart = () => {
    let allredord = JSON.parse(localStorage.getItem('cart'));
    let tbl = "";
    let sum = 0;
    allredord.map((val) => {
        sum = sum + val.price * val.qty;
        return tbl += `
        <div style="border: 9px solid white; background-color: white; border-radius: 10px;" class="d-flex justify-content-between">
        <img style="object-fit:cover; width: 90px; height: 90px; border-radius: 10px;"
            src="${val.image}" alt="">
        <div style="margin-left : 10px">
        <span style="font-size: 18px; color: #ff4757; font-weight: 600;">${val.name}</span><br>
        <span>Rs : ${val.price}</span><br>
        <span><input style="width:50px;" type="number" id="qty_${val.id}" onchange="editcart(${val.id})" value="${val.qty}"/></span>
        </div>
        <div><br>
        <span>Total : ${val.price * val.qty}</span><br>
        <button onclick="delet(${val.id})" style="border : none; background-color : #ffff; justify-contant: end;">
                                <img style="padding: 5px; width: 36px; border-radius: 5px;"
                                    src="img/delete.png">
                            </button>
        </div>
    </div>  
        `
    });
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('finaltotal').innerHTML = `Final Total : ${sum}`;

}
viewcart();

// delet cart product
const delet = (id) => {
    let allredord = JSON.parse(localStorage.getItem('cart'));
    let deletr = allredord.filter((item) => {
        return item.id != id;
    })
    localStorage.setItem('cart', JSON.stringify(deletr));
    alert('Product Successfully remove in cart');
    viewcart();
}

// edite cart product
const editcart = (id) => {
    let editid = document.getElementById(`qty_${id}`).value;
    let cartdata = JSON.parse(localStorage.getItem('cart'));
    cartdata.map((item) => {
        if (item.id == id) {
            item.qty = editid;
        }
    });
    localStorage.setItem('cart', JSON.stringify(cartdata));
    console.log(cartdata);
    viewrcord();
    viewcart();
}

//place order
const placeorder = () => {
    alert('Order Succusessfully Placed..')
}
