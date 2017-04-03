(function() {
    'use strict';

    angular
        .module('dsfdas', [])
        .controller('HeaderController', function Header() {

        	const vm = this;

            vm.user = {
		      firstName: 'Jake',
		      lastName: 'Boyles'
		  	}

		  	vm.sayHello = function(){
		  		return `${vm.user.firstName} ${vm.user.lastName}`;
		  	}

		  	vm.items = [
		      { id: 1, name: 'Widgets', count: 23 },
		      { id: 2, name: 'Unicorns', count: 0 },
		      { id: 3, name: 'Foobars', count: 15 },
		      { id: 4, name: 'Tacos', count: 1435 }
		    ];


        });
})();