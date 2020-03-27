function data(){

	let valor = document.getElementById("fizzBuzzNumber").value;
	console.log(valor);

	let display = document.querySelector('.resultsSection');


	for (let i = 1; i <= valor; i++){

		let valor = i%3;
		let valor1 = i%5;
		if (valor == 0){

			display.innerHTML +=
		`
			<button id="buttons">fizz
		`;

		}else if (valor1 == 0){

			display.innerHTML +=
		`
			<button id="buttons">buzz
		`;

		}
		else{

			display.innerHTML +=
		`
			<button id="buttons">`+ i + `</button>
		`;
		}
	}

	
	
}

function another(){

	console.log("WORKS");
}



function init(){

 		submitBtn.addEventListener('click',(event)=>{
 		data();
		event.preventDefault();
		

	});

 		
}
