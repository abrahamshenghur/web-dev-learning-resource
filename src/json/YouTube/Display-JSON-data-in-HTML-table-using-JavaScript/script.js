fetch("products.json")
.then(function(response) {
    return response.json()
})
.then(function(products) {
    let placeholder = document.querySelector("#data-output")
    let output = ""
    for(let product of products) {
        output += `
            <tr>
                <td> <img src='${product.image}'</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.inventory}</td>
                <td>${product.productCode}</td>
            <tr>
        `
    }

    placeholder.innerHTML = output
})