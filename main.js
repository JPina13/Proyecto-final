var respuElemen = document.querySelector('.result');


var word = 'polvo';
var wordArray = word.toUpperCase().split('');
console.log(wordArray);

/*var actualRow = document.querySelector('.row');

wordArray.forEach(() => {
		actualRow.innerHTML += `<input type="text maxlength="1" class="square focus">`
});

var focusElement = document.querySelector('.focus')
consolo.log(focusElement);
focusElement.focus();*/

var squares = document.querySelectorAll('.square');
squares = [...squares];

var wordInput = []

//Recojer lo ingresado en los inputs
squares.forEach(element =>{
	element.addEventListener('input', event=>{
		wordInput.push(event.target.value.toUpperCase());
		if(event.target.nextElementSibling){
			event.target.nextElementSibling.focus();
		}else{
//CAMBIAR ESTILOS SI LA LETRA EXISTE
			var existedId = wordExist(wordArray, wordInput);
			existedId.forEach(element =>{
				squares[element].classList.add('yellow');
			});
//CAMBIAR ESTILOS CUANDO ES CORECTA LA LETRA Y POSICION
			var iqualsElements = comparative(wordArray, wordInput);
			console.log(iqualsElements);
			iqualsElements.forEach(element => {
				squares[element].classList.add('green');
			})
			if (iqualsElements.length == wordArray.length) {
				respuElemen.innerHTML = `
				<p>Ganaste!</p>
				<button class="button">Reiniciar</button>`
			}
//CAMBIAR DE FILA
			
			/*var restartBtn = document.querySelector('.button')
			restartBtn.addEventListener('click', ()=>{
				location.reload();
			});*/
		}
		
	});
});



//FUNCIONES------------------------------
//comparar lo escrito con la palabra original.
function comparative(array1, array2){
	var iqualsId = []
	array1.forEach((element, index)=>{
		if (element == array2[index]) {
			console.log(`El ${index} si es iguales`);
			iqualsId.push(index);
		}else{
			console.log(`El ${index} no es iguales`);
		}
	});
	return iqualsId;
}

function wordExist(array1, array2){
	var existedElemn = []
	array2.forEach((element, index)=>{
		if (array1.includes(element)){
			existedElemn.push(index)
		}
	});
	return existedElemn;
}