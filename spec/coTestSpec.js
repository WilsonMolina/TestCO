const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {	
		
	it("test Super Sale descuento doble en el precio por cada dia", function() {
		const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
		const products = coTest.updatePrice();
		expect(products[0].price).equal(4);
   	});
	
	
  	it("test Super Sale su precio nunca es negativo", function() {
		const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
		const products = coTest.updatePrice();
			for (let i = 1; i <= 30; i += 1) {
		   		const products = coTest.updatePrice();
		   		if(products[0].sellIn<0){
			   		expect(products[0].price).equal(0);
		   		}
			}
		
   	});
   	
   	it("test Special Full Coverage precio 0 cuando no hay mas dias", function() {
		const coTest = new CarInsurance([ new Product("Special Full Coverage", 5, 49) ]);
		const products = coTest.updatePrice();
			for (let i = 1; i <= 30; i += 1) {
		   		const products = coTest.updatePrice();
		   		if(products[0].sellIn<0){
			   		expect(products[0].price).equal(0);	
		   		}		   				   		
			}		
   	});
   	
   	
   	it("test Mega Coverage nunca cambia su precio", function() {
		const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);
		const products = coTest.updatePrice();
			for (let i = 1; i <= 30; i += 1) {
		   		const products = coTest.updatePrice();	   				   		
			}		
			
			expect(products[0].price).equal(80);	
			
   	});
   	   	
  
});
