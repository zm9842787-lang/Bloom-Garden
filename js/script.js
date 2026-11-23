// Bloom & Garden

const orderButtons = document.querySelectorAll(".order-button");
const productSelect = document.getElementById("product");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {

        const flowerCard = button.closest(".flower-card");
        const flowerName = flowerCard.querySelector("h3").textContent.trim();

        productSelect.value = flowerName;

    });
});

console.log("Bloom & Garden is ready!"); 
// Order Form
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value;

    alert("Thank you " + customerName + "! Your order has been received.");

    orderForm.reset();
});