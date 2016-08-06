<?php
include ("functions.php");

$conn = getconnection();
$id = $_POST["id"];

$deletecontact = pg_query($conn, 'delete from "Agenda" where id = ' . $id);

$record = getcontacts($conn);

pg_close($conn);

echo json_encode($record);
?>