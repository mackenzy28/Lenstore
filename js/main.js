$(document).ready( () => {

    function searchProducts() {
        console.log('search products');
    }

    function autoComplete(searchText) { 
        if (searchText.length >= 3) {
            fetch('https://cors-anywhere.herokuapp.com/search-results.json')
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                // Loop through data and check label property for search text
                // If search text matched any part of label, add label to a new array of match items
                // Output list of match items under the input
            })
            .catch(error => console.log(error));
        }
    }

    $('#search-products').keyup((event) => {
        searchText = event.target.value;
        console.log('search text:', searchText);

        autoComplete(searchText);
    });
});

