window.onload = function() {
    var postdescs = document.getElementsByClassName('post-desc');

    var i;
    for(i = 0; i < postdescs.length; i++){
        var length = postdescs[i].innerHTML.length;
        postdescs[i].innerHTML = postdescs[i].innerHTML.slice(0, length-536);
    }
}

function trashModal(){
    document.getElementById('deleteModal').style.display = "block";
}

function noButton(){
    document.getElementById('deleteModal').style.display = "none";
}

function morePostDetails(){
    location.href = "post.html";
}