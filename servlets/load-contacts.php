<?php
include ("functions.php");

// citim date din baza de date
$conn = getconnection();

$record = getcontacts($conn);
pg_close($conn);

echo json_encode($record);

//var_dump(pg_fetch_all($result)); //convertim baza de date in array
//$filename = "../js/mocks/load-contacts.json";//in acest fisier se tin datele
//$allContactsStr = file_get_contents($filename);//iau jsonul din fis loadcontacts
//echo $allContactsStr;

?>


