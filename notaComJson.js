let bill = {
    client: "Fagner",
    age: 37,
    products: {
        0: ["Mouse", 129.99],
        1: ["Teclado", 249.99],
        2: ["Monitor", 1699.99]
    },
    taxes: 29.99
}

generateBill(bill)

function generateBill() {
    console.log("O comprado é " + bill.client)
    console.log("A idade é " + bill.age)
    console.log("----------------------------------")

    for (let index in bill.products) {
        let [productName, productPrice] = bill.products[index]
        console.log("-> " + productName + " - " + productPrice)
    }
    console.log("----------------------------------")
}