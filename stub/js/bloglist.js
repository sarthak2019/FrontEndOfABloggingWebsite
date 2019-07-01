//When the window loads the below function will clip the conents of all the post description and will display the clipped content in the bloglist.html page.
window.onload = function () {
    var postdescs = document.getElementsByClassName('post-desc');

    var i;
    for (i = 0; i < postdescs.length; i++) {
        var length = postdescs[i].innerHTML.length;
        postdescs[i].innerHTML = postdescs[i].innerHTML.slice(0, length - 536);
    }
}

//When the user clicks on the trash icon the delete modal will be visible.
function trashModal() {
    document.getElementById('deleteModal').style.display = "block";
}

//When the user clicks on the No button present in the delete modal the delete modal will disappear and the bloglist page will appear again as it is.
function noButton() {
    document.getElementById('deleteModal').style.display = "none";
}

//When the user clicks on ... icon then then it will redirect to a new page called as "post.html".
function morePostDetails() {
    location.href = "post.html";
}