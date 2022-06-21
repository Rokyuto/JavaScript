<?php 
if(isset($_POST['studentName'])){
    $name = $_POST['studentName'];
    $password = $_POST['studentPassword'];

    $concx = mysqli_connect("localhost","root","","school_students");
    $sql="INSERT INTO `school_students`(`id`, `StudentNum`, `password`) VALUES ('[value-1]','$name','$password')";

    $result = mysqli_query($concx,$sql);

    if($result == true) {
        echo "<h3>Student inserted successfully</h3>";
    }

}

?>