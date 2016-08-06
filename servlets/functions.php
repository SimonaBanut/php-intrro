<?php

//functie de conectare la baza de date

function getconnection () {
    //connect to a database named "mary" on the host "sheep" with a username and password
    return pg_connect("host=54.93.65.5 port=5432 dbname=4_Simona user=fasttrackit_dev password=fasttrackit_dev");
}

//functie de aducere date din DB

function getcontacts ($conn){

    $result = pg_query($conn, 'select * from "Agenda"');

    $record = array();

    while ($row = pg_fetch_array($result)) {
        $person = array(
            "id" => $row ["id"],
            "firstName" => $row ["nume"], //firstName este numele campului din json
            "lastName" => $row ["prenume"],
            "phone" => $row ["telefon"]
        );

        $record [] = $person;
    }
    return ($record);

}

?>