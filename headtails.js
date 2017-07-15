#!/usr/bin/env node

var fs = require('fs');
var chalk = require('chalk');
var figlet = require('figlet');
var path = require('path');

var bannerHeading = "Heads / Tails"

figlet(bannerHeading,{font:"Standard"},function(err,data){
	if(err){
		console.log(err);
		return;
	}
	console.log(chalk.blue(data));
	console.log(chalk.yellow('Flipping a coin made easy!'))
	console.log('\nCoin Toss resulted in:');
	flip();
});


function flip(){
	var flip = Math.floor(Math.random() * 10);
	if(flip % 2 == 0){
		speak('Tails');
	}
	else{
		speak('Heads');
	}
}

function speak(flipText){
	figlet(flipText,{font:"Standard"},function(err,data){
		if(err){
			console.log(err);
			return;
		}
		if(flipText === "Tails"){
			console.log(chalk.cyan(flipText));
		}
		else{
			console.log(chalk.magenta(flipText));
		}

	});
}