import React from "react"
import ReactDOM from "react-dom"

function App() {
	cont date = new.Date();
	const hours = date.getHours();
	let timeOfDay
	
	if (hours < 12) {
		timeOfDay = "morning";
	}
	if (hours >= 12 && hours < 17) {
		timeOfDay = "afternoon";
	}
	else {
		timeOfDay = "night";
	}
	
	return (
		<h1 style={{color:red, backgroundColor: blue}}>Good {timeOfDay}!</h1>
	)
};