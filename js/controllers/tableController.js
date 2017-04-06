(function() {
    'use strict';
    angular
        .module('shopular', [])
        .controller('HeaderController', function(data) {

        	const vm = this;
			vm.tax = 1.0575;
			vm.itemData = data.getData();

			vm.changeQuantity = function(item,add){
				if(add) {
					item.quantity++;
				} else {
					item.quantity--;
				}
			}	

			vm.getPrice = function(item){
				return ((item.price-item.discount) * vm.tax)*item.quantity;
			}

			vm.update = function(valid){
				if(valid){
					let newItem = Object.assign({},vm.item);
					vm.itemData = data.saveItem(newItem);
					vm.item = {};
				} else {
					alert("INVALID FORM");
				}
			}
        });
})();
