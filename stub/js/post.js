var saveState=0;

 // To switch the mode between save and edit
function postEdit(){
        if(saveState==0){
                        document.getElementById("editButton").innerHTML="Save";
                        saveState=1;
        }else{
                        document.getElementById("editButton").innerHTML="Edit";
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

