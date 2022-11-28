function studentGrade(){
	
	let grade = parseInt(document.getElementById("value").value)
	if (grade>100){
        document.getElementById("outcome").innerHTML = "Not valid"
        alert('you cannot have marks higher than 100')
       
    }


switch (true) {
	// If grading is 79 or greater
	case grade >= 79:
        return document.getElementById("outcome").innerHTML = 'Grade  A' ,document.getElementById("text").innerHTML = "You passed!";
		
	// If grading is 60 or greater
	case grade >= 60:
		return document.getElementById("outcome").innerHTML = "Grade  B";

	// If grading is 49 or greater
	case grade >= 49:
		return document.getElementById("outcome").innerHTML = "Grade  C";
		
	// If grading is 40 or greater
	case grade >= 40:
        return document.getElementById("outcome").innerHTML = 'Grade E';
		
	//// If grading less than 40 	
    case grade <40:
        return document.getElementById("outcome").innerHTML = 'Grade F';

}
}
document.getElementById("btn").addEventListener('click',studentGrade)


studentGrade()