var keys = document.querySelectorAll('.all-buttons');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++){

	keys[i].onclick = function(e){

		var input = document.querySelector('#screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		console.log(inputVal);


		if(btnVal == 'CLR') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			// equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(lastChar =='+'|| lastChar =='-' || lastChar =='*'||lastChar =='/'||lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}

		else if(btnVal == '.') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			if(lastChar!= '.') {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		else{
			input.innerHTML+=btnVal;
		}

	}

}