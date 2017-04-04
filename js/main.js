(function() {
    'use strict';

    angular
        .module('taco', [])
        .controller('HeaderController', function Header() {

        	const vm = this;
			vm.tax = 1.0575;
			vm.items = 
		     [
				{ "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31, },
				{ "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0, },
				{ "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0, },
				{ "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0, },
				{ "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10, },
				{ "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50, },
				{ "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0, },
				{ "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150, },
				{ "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11, },
				{ "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0, },
				{ "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1, },
				{ "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12, }
				];

				vm.update = function(valid) {
					console.log(valid);
					if (valid) {
							vm.items.push({"name": vm.item.name, "price": vm.item.price, "quantity": vm.item.quantity, "color": vm.item.color, "discount": vm.item.discount,});
							vm.item = {};
					} else {
						alert('Finish the form!');
					}
				}
				vm.changeQuantity = function(item,upOrNot){
					if(upOrNot) {
						item.quantity++;
					} else {
						item.quantity--;
					}
				}

				vm.getPrice = function(item){
					return((item.price-item.discount)*vm.tax).toFixed(2);
				}
        });
})();
