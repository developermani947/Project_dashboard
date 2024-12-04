// function fun() {
//     var q = document.getElementById('qty').value;
//     var a = document.getElementById('rupeeya').innerHTML;
//     var ta = document.getElementById('ta');
//     if (q != "more") {
//         ta.innerHTML = q * a;
//     }
//     else {
//         document.prompt('Enter quantity');
//         ta.innerHTML = q * a;
//     }
// }

    function fun() {
        var q = document.getElementById('qty').value;
        var a = parseFloat(document.getElementById('rupeeya').innerHTML);
        var ta = document.getElementById('totalAmount');

        if (q !== "more") {
            ta.innerHTML = q * a;
        } else {
            var userEnteredQuantity = prompt('Enter quantity');
            if (userEnteredQuantity !== null && !isNaN(userEnteredQuantity)) {
                ta.innerHTML = userEnteredQuantity * a;
            } else {
                ta.innerHTML = "Cancelled";
            }
        }
        // Update checkout total after changing the quantity
        updateCheckoutTotal();
    }

    function updateCheckoutTotal() {
        var checkoutTotal = document.getElementById('checkoutTotal');
        var totalAmount = document.getElementById('totalAmount').innerHTML;

        // Assuming some additional processing for checkout total, you can modify this as needed
        checkoutTotal.innerHTML = totalAmount;
    }

    document.getElementById('check').addEventListener('change', function () {
        // Handle checkbox change event
        alert('Checkbox changed!');
    });

    document.getElementById('btn').addEventListener('click', function () {
        // Handle Proceed to Buy button click event
        alert('Proceeding to Buy!');
    });

    document.getElementById('btn2').addEventListener('click', function () {
        // Handle EMI available button click event
        alert('EMI available!');
    });

    // Initial update of checkout total on page load
    updateCheckoutTotal();
