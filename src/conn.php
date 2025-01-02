<?php
   $dbhost = "localhost";
   $dbusername = "root";
   $dbpwd = "";
   $dbname = "POLLS";

   $conn = mysqli_connect($dbhost, $dbusername, $dbpwd, $dbname);
   if(!$conn->connect_error){
    die("Error");
   }