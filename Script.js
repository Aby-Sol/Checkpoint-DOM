// Selecting elements
let Cart = document.getElementById("Cart-container");
let Box = document.getElementsByClassName("Item");
let DeleteAll = document.getElementById("DeleteAllButton");
let TotalPrice = document.getElementById("PrixTotal");
let Total = 0;

// Function to update total price
function updateTotal() {
    TotalPrice.innerHTML = Total.toFixed(3) + " Dt"; // Display only 3 digits after the comma
}

// Loop through each item in the cart
for (let i = 0; i < Box.length; i++) {
    let bx = Box[i];
    let Quantity = parseInt(bx.getElementsByClassName("count")[0].innerHTML);
    let Qt = bx.getElementsByClassName("count")[0];
    let Minus = bx.getElementsByClassName("minus")[0];
    let Plus = bx.getElementsByClassName("plus")[0];
    let Delete = bx.getElementsByClassName("Delete")[0];
    let text = bx.getElementsByClassName("priceofone")[0].innerHTML;
    let Price = parseFloat(text.substring(0, (text.length - 3)));
    let PricePerItem = bx.getElementsByClassName("price")[0];

    Total += Price * Quantity;
    updateTotal();

    // Adding event to the (+) button
    Plus.addEventListener("click", () => {
        Quantity += 1;
        Qt.innerHTML = Quantity;
        PricePerItem.innerHTML = (Price * Quantity).toFixed(3);
        Total += Price;
        updateTotal();
    });

    // Adding event to the (-) button
    Minus.addEventListener("click", () => {
        if (Quantity > 1) {
            Quantity -= 1;
            Qt.innerHTML = Quantity;
            PricePerItem.innerHTML = (Price * Quantity).toFixed(3);
            Total -= Price;
            updateTotal();
        }
    });

    // Adding event to the "delete" button
    Delete.addEventListener("click", () => {
        bx.remove();
        Total -= Price * Quantity;
        updateTotal();
    });

    // Adding event to the "delete all" button
    DeleteAll.addEventListener("click", () => {
        bx.remove();
        Total = 0;
        TotalPrice.innerHTML = Total.toFixed(3) + " Dt"
        
    });
}

// Adding toggle function to the "Favorite" button
$(".heart.fa").click(function () {
    $(this).toggleClass("fa-heart fa-heart-o");
});
