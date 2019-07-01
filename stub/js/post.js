var saveState = 0;

// To switch the mode between save and edit for Blog Title and body
function postEdit() {
	if (saveState == 0) {
		document.getElementById("editButton").innerHTML = "Save  " + "<i class = 'fa fa-floppy-o' aria-hidden='true'></i>";
		document.getElementById("blogTitle").setAttribute("contenteditable", true);
		document.getElementById("blogText").setAttribute("contenteditable", true);
		saveState = 1;
	} else {
		document.getElementById("editButton").innerHTML = "Edit  " + "<i class='fa fa-pencil-square-o' aria-hidden='true'></i>";
		document.getElementById("blogTitle").setAttribute("contenteditable", false);
		document.getElementById("blogText").setAttribute("contenteditable", false);
		saveState = 0;
	}
}

var numberOfClicks = 0;

// To update like count
function postLiked() {
	document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up' aria-hidden='true'></i>" + "  Liked!";
	numberOfClicks += 1;
	if (numberOfClicks != 0) {
		if (numberOfClicks == 1) {
			document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
		}
		else {
			document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
		}
	}
}

// To add comments and display
var firstComment = 0;
function addComments(id) {
	var addEventName = id.value + '<br>';
	if (id.value != '') {
		var commentBox = document.getElementById('userComments');
		document.getElementById('addEventNames').innerHTML = "<div class = 'comments'>" + addEventName + "</div>" + document.getElementById('addEventNames').innerHTML;
		commentBox.value = commentBox.defaultValue;
	}
}