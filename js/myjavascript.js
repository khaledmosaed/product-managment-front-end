var nameInput = document.getElementById('name');
var priceInput = document.getElementById('price');
var skuInput = document.getElementById('sku');
var notesInput = document.getElementById('description');
var notesInput = document.getElementById('notes');
var imgInput = document.getElementById('img');
document.querySelector('form.form-horizontal').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

     var name= (nameInput.value);
     var price = (priceInput.value);
     // change string to int
     price = parseInt(price)

     var sku = (skuInput.value);
     var description = (notesInput.value);
     var notes= (notesInput.value);
     var img =(imgInput.src);

    var product=  { "name": name ,
                   "price": price,
                   "sku" :sku ,
                   "description":description ,
                   "notes":notes,
                   "img":img    }

        console.log(product) ;
    addProduct(product)
});



var addProduct  =  function(product){

    // Sending and receiving data in JSON format using POST motho



    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3033/insrtProd";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("product added data: ", response);
        }
    };
    var data = JSON.stringify(product) ;
    xhr.send(data);

};

