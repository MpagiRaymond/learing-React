<?php
require 'conn.php';
$query = "SELECT * FROM VOTERS";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $query = array();
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}