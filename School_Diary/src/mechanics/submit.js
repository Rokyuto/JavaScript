export function f_studentSubmitCheck(){
    console.log("TEST")
    f_saveStudent()
}

function f_saveStudent(){
    var studentName = document.getElementById("studentName").value;
    var studentPassword = document.getElementById("studentPassword").value;

    var httpr = new XMLHttpRequest();
    httpr.open("POST","./sql/get_data.php",true);
    httpr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    httpr.onreadystatechange = function(){
        if(httpr.readyState==4 && httpr.status==200){
            console.log(httpr.responseText);
        }
    }
    httpr.send("name="+studentName+"password="+studentPassword);
}