
window.addEventListener("load", function(e){
	e.preventDefault;
	init();
	let createDiv = document.getElementById("goalCreateForm");
	createDiv.createGoalButton.addEventListener("click", function(e){
		e.preventDefault
		createGoalObject();
	});
});

function init(){
	console.log("Yer damn right I loaded.");
	getAllGoals();
};

function getAllGoals(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/goals");
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status < 400){
				let data = xhr.responseText;
				let allGoals = JSON.parse(data);
				displayAllGoals(allGoals);
			}
			else{
				let divError = document.getElementById("goalList");
				divError.textContent = "Error loading goals - sorry about that!";
			}
		}
	}
	xhr.send();
};

function displayAllGoals(allGoals){
	let goalListDiv = document.getElementById("goalList");
	let goalTable = document.createElement("table");
	goalListDiv.appendChild(goalTable);
	
	allGoals.forEach(function(value, index, array) {
		let tableRow = document.createElement("tr");
		goalTable.appendChild(tableRow);
		tableRow.addEventListener("click", function(e){
			e.preventDefault;
			getOneGoal(value.id)});

		let td = document.createElement("td");
			td.textContent = value.name;
			tableRow.appendChild(td);
		let td1= document.createElement("td");
			td1.textContent = value.description;
			tableRow.appendChild(td1);
		let td2 = document.createElement("td");
			td2.textContent = value.stickerUrl;
			tableRow.appendChild(td2);
		let td3 = document.createElement("td");
			td3.textContent = value.achieved;
			tableRow.appendChild(td3);
		let td4 = document.createElement("td");
			td4.textContent = value.category;
			tableRow.appendChild(td4);
	});
};

function createGoalObject(){
	let form = document.goalCreateForm;
	let goal = {};
	goal.name = form.name.value;
	goal.description = form.description.value;
	goal.stickerUrl = form.stickerUrl.value;
	goal.achieved = form.achieved.value;
	goal.category = form.category.value;
	createGoal(goal);
}

function createGoal(goal){
	let xhr = new XMLHttpRequest();
	let uri = "api/goals";
	xhr.open("POST", uri);
	xhr.setRequestHeader("Content-type", "application/json");
	let goalJSONYaDunStringedUp = JSON.stringify(goal);

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				let goalJSON = JSON.parse(xhr.responseText);
				displayAllGoals();
			}
			else{
				console.log("POST request failed.");
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	}
	xhr.send(goalJSONYaDunStringedUp);
};

function getOneGoal(goalId){
	console.log("In get one goal.");
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/goals/" + goalId );
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status < 400){
				let data = xhr.responseText;
				let goal = JSON.parse(data);
				displayOneGoal(goal);
			}
			else{
				let divError = document.getElementById("goalList");
				divError.textContent = "Error loading goal - sorry about that!";
			}
		}
	}
	xhr.send();
};


function displayOneGoal(goal){
	let goalDiv = document.getElementById("goalEdit");
	let h3 = document.createElement("h3");
		h3.textContent = "Update your goal:"
		goalDiv.appendChild(h3);
	let updateForm = document.createElement("form");
		goalDiv.appendChild(updateForm);
	let goalTable = document.createElement("table");
	updateForm.appendChild(goalTable);
	
	
		let tableRow = document.createElement("tr");
		goalTable.appendChild(tableRow);
		

		let td = document.createElement("td");
		tableRow.appendChild(td);
		let input = document.createElement("input");
		input.type = "text";
		input.value = goal.name;
		td.appendChild(input);
		
		let td1= document.createElement("td");
		tableRow.appendChild(td1);
		let input1 = document.createElement("input");
		input1.type = "text";
		input1.value = goal.description;
		td1.appendChild(input1);
		
		let td2 = document.createElement("td");
		tableRow.appendChild(td2);
		let input2 = document.createElement("input");
		input2.type = "text";
		input2.value = goal.stickerUrl;
		td2.appendChild(input2);
		
		let td3 = document.createElement("td");
		tableRow.appendChild(td3);
			let select = document.createElement("select");
			select.name = "achieved";
			td3.appendChild(select);
		
				let optionTrue = document.createElement("option");
				optionTrue.value = "true";
				optionTrue.text = "YES!";
				select.appendChild(optionTrue);
				
				let optionFalse = document.createElement("option");
				optionFalse.value = "false";
				optionFalse.text = "Not yet!";
				select.appendChild(optionFalse);

			
			
			
			
		let td4 = document.createElement("td");
			tableRow.appendChild(td4);
			
			let select1 = document.createElement("select");
			select1.name = "category";
			td4.appendChild(select1);
			
			let physHealth = document.createElement("option");
			physHealth.value = "physical health";
			physHealth.text = "Physical Health";
			select1.appendChild(physHealth);
			
			let mentalHealth = document.createElement("option");
			mentalHealth.value = "mental health";
			mentalHealth.text = "Mental Health";
			select1.appendChild(mentalHealth);
			
			let socialHealth = document.createElement("option");
			socialHealth.value = "social health";
			socialHealth.text = "Social Health";
			select1.appendChild(socialHealth);
			
			let spiritHealth = document.createElement("option");
			spiritHealth.value = "spiritual health";
			spiritHealth.text = "Spiritual Health";
			select1.appendChild(spiritHealth);
			
			let other = document.createElement("option");
			other.value = "other";
			other.text = "Other";
			select1.appendChild(other);

		let td5 = document.createElement("td");
			tableRow.appendChild(td5);

		let editButton = document.createElement("input");
		editButton.type = "submit";
		editButton.name = "editButton";
		editButton.value = "Update my Goal!";
		editButton.addEventListener("click", function(e){
			e.preventDefault;
			//update function
		});

		td5.appendChild(editButton);
		
		let deleteButton = document.createElement("input");
		deleteButton.type = "submit";
		deleteButton.name = "deleteButton";
		deleteButton.value = "Delete my Goal!";
		deleteButton.addEventListener("click", function(e){
			e.preventDefault;
			deleteGoal(goal.id);
		});
		td5.appendChild(deleteButton);
		
};

function updateGoal(){

};

function deleteGoal(goalId){
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/goals/" + goalId );
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 204){
				console.log("Deleted");
			}
			else{
				let divError = document.getElementById("goalList");
				divError.textContent = "Goal can't be deleted at this time - sorry!";
			}
		}
	}
	xhr.send();

};

