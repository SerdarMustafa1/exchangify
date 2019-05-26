import { get } from 'axios';

// get(
// 	'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=USD&symbols=EUR&format=1'
// ).then(resp => {
// 	console.log(resp.data.rates.EUR);
// 	document.querySelector('.usd2eur').innerHTML =
// 		'$1 = € ' + resp.data.rates.EUR;
// });

// get(
// 'https://data.fixer.io/api/convert?access_key=c7221b2f700e035f99cd06ccb3a521a5'& from = USD
//     & to = EUR
//     & amount = 25)

// function getFromCurr(selectCurrency) {
// 	let baseCurrency = document.querySelector('#from');
// 	console.log(getFromCurr.value);
// }

$('#from').change(function() {
	console.log($(this).val());
});

$('#to').change(function() {
	console.log($(this).val());
});
//// const submitHandler = e => {
//  //   	e.preventDefault();

//    // 	const [amountVal, fromVal, toVal] = [...e.target.elements].map(
//     	//	el => el.value
//     //	);

//   //  	if (amountVal === '') {
//     //		return alert('Please insert amount');
// //    	}

////     	if (fromVal === toVal) {
////     		return alert('Fun Fact: You need to select 2 different currencies!');
////     	}
//  //   	makeHttpRequest(
//    // 		'https://data.fixer.io/api/latest?access_key=c7221b2f700e035f99cd06ccb3a521a5&base=USD&symbols=EUR',
//     	//	response => {
//     	//		const dataToShow = response.rates[toVal] * amountVal;
//     	//		resultEl.textContent = dataToShow.toFixed(3);
//     	//		symbolEl.value = toVal;
//     	//	}
//  //   	);
// //    };
