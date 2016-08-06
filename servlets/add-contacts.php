<?php
include ("functions.php");

$conn = getconnection();

$nume = $_POST["firstName"];
$prenume = $_POST["lastName"];
$telefon = $_POST["phone"];

$insertcontact = pg_query_params($conn, "INSERT INTO \"Agenda\" (nume, prenume, telefon) VALUES ($1, $2, $3)", array ($nume, $prenume, $telefon)) ;

pg_close($conn);



?>