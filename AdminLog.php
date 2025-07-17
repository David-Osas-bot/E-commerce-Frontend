<?php
// include_once("AdminLog.php");
if(isset($_POST["submit"]))
{
        
    $username = $_POST["username"];
    $password = $_POST["password"];

    $connect = mysqli_connect("localhost", "root", "", "admininfo");


    if(!$connect)
    {
        die(" could not connect to the Database");
    }
    else
    {
        echo"Database connected successfully !!!";
    }


    $sql = "insert into admininfo (username, password)
            values('$username', '$password')";

    //mysqli_query($connect, $sql)
    if(mysqli_query($connect, $sql))
    {
        echo"Data inserted successfully!!!"
    }
    else{
        echo"Data failed to be insert"
    }

}

?>