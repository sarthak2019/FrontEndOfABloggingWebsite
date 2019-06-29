var saveState=0;

 // To switch the mode between save and edit for Blog Title and body
function postEdit(){
        if(saveState==0){
                        document.getElementById("editButton").innerHTML="Save";
             	 	document.getElementById("blogTitle").setAttribute("contenteditable",true);
			document.getElementById("blogText").setAttribute("contenteditable",true);
                        saveState=1;
        }else{
                        document.getElementById("editButton").innerHTML="Edit";
			document.getElementById("blogTitle").setAttribute("contenteditable",false);
			document.getElementById("blogText").setAttribute("contenteditable",false);
                        saveState=0;
        }
}


var numberOfClicks=0;
// To update like count
function postLiked(){
	document.getElementById("likeBlog").innerHTML = "Liked!";
	numberOfClicks += 1;
	if(numberOfClicks!=0){
		if (numberOfClicks==1){
		document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
		}
		else {
		document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
		}
	}
}


// to add comments and display
var firstComment=0;
function addComments(id){
	var addEventName = id.value +'<br>';
        if(id.value!=''){
		var commentBox = document.getElementById('userComments');
		document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';         
		commentBox.value=commentBox.defaultValue;
        }
}


