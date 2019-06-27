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
