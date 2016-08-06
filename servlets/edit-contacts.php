<?php
include ("functions.php");

$conn = getconnection();

$nume = $_POST["firstName"];
$prenume = $_POST["lastName"];
$telefon = $_POST["phone"];

//$insertcontact = pg_query_params($conn,UPDATE Agenda SET ('nume'== $nume, 'prenume'==$prenume, 'telefon'==$telefon )) ;

pg_close($conn);



?>