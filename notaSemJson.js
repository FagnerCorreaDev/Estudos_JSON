let clientName = "Fagner"
let age = 37
let products = ["Mouse", "Teclado", "Monitor"]
let productsPrices = ["29.50", "290.99", "1099.99"]

generateBill(clientName, age, products, productsPrices)

function generateBill(clientName, age, products, productsPrices) {
    console.log("O comprador é: " + clientName)
    console.log("A idade é: " + age)
    console.log("---------------------------------")
    console.log("O produto é: " + products[0])
    console.log("O preço é: " + productsPrices[0])
}