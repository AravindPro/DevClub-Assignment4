let url = "https://api.covid19api.com/summary" //Location of data

//Get JSON in coviddata

promiseData = fetch(url)
	.then((res) =>  res.json())
	.then((content) => {return content;})

//Console out the data once
promiseData.then(data => {

	//Get all countries
	let countries = Array()
	for(let i=0; i<data['Countries'].length; i++){
		countries.push(data['Countries'][i]['Country'])
	}

	//Get the new cases, deaths, etc...
	let newcases = Array()
	for (let i = 0; i < data['Countries'].length; i++){
		newcases.push(data['Countries'][i]['TotalConfirmed'])
	}

	let newdeaths = Array()
	for (let i = 0; i < data['Countries'].length; i++) {
		newdeaths.push(data['Countries'][i]['NewDeaths'])
	}

	let totalcases = Array()
	for (let i = 0; i < data['Countries'].length; i++) {
		totalcases.push(data['Countries'][i]['NewConfirmed'])
	}

	let totaldeaths = Array()
	for (let i = 0; i < data['Countries'].length; i++) {
		totaldeaths.push(data['Countries'][i]['NewDeaths'])
	}


	//Graph this
	new Chart("new-case", {
		type: "bar",
		data: {
			labels: countries,
			datasets: [{
				backgroundColor: 'red',
				data: newcases
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: "New Covid-Cases Today"
			}
		}
	});


	new Chart("new-death", {
		type: "bar",
		data: {
			labels: countries,
			datasets: [{
				backgroundColor: 'red',
				data: newdeaths
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: "New Covid-Cases Today"
			}
		}
	});


	new Chart("total-case", {
		type: "bar",
		data: {
			labels: countries,
			datasets: [{
				backgroundColor: 'red',
				data: totalcases
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: "New Covid-Cases Today"
			}
		}
	});


	new Chart("total-death", {
		type: "bar",
		data: {
			labels: countries,
			datasets: [{
				backgroundColor: 'red',
				data: totaldeaths
			}]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: "New Covid-Cases Today"
			}
		}
	});

	//
})
//Bar-Graph
/*
promiseData.then((data) =>{
	let countries = data['Countries'];
	let activecases = 
})
*/

//Chart
/*
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
*/