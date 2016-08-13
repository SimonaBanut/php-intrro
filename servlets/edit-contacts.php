<?php
include ("functions.php");

$conn = getconnection();

$id = $_POST["id"];
$nume = $_POST["firstName"];
$prenume = $_POST["lastName"];
$telefon = $_POST["phone"];

$resql ='update "Agenda" set nume=$1, prenume=$2, telefon=$3 where id=$4';

$insertcontact = pg_query_params($conn, $resql, array ($nume, $prenume, $telefon, $id) );

pg_close($conn);



?>