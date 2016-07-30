<?php include ("header-tpl.php"); ?>

<?php //Save contact if necessary
if (isset($_POST["firstName"])) {
    $filename = "js/mocks/load-contacts.json";//in acest fisier se tin datele
    $allContactsStr = file_get_contents($filename);//iau jsonul din fis loadcontacts
    $allContacts = json_decode($allContactsStr); //il transform intr-un array, decodez

    $lastcontact = $allContacts[count($allContacts)-1];//aduce ultimul json ca sa ia ID-ul

    echo "add firstname:" . $_POST["firstName"];

    $newperson = array(
        "id" => $lastcontact->id +1,
        "firstName" => $_POST["firstName"],
        "lastName" => $_POST["lastName"],
        "phone" => $_POST["phone"]
    );
//    echo "<br> ";
//    echo json_encode($newperson);


    $allContacts[] = $newperson; //adaug linia noului membru
    file_put_contents($filename, json_encode($allContacts,JSON_PRETTY_PRINT)); //duc inapoi continutul in fisier

}
?>

<div id="breadcrumb">HOME : welcome home</div>

<h1>Agenda</h1>
<form action="" method="POST">
    <input type="text" id ="firstName" name="firstName" placeholder="Nume" required="required">
    <input type="text" name="lastName" placeholder="Prenume">
    <input type="text" name="phone" placeholder="telefon">
    <button>Adauga</button>
</form>
<br>
    <table id="agenda">
        <thead>
            <tr>
                <th><b>Nume</b></th>
                <th>Prenume</th>
                <th>Telefon</th>
                <th width="100"></th>
            </tr>
         </thead>
        <tbody></tbody>

    </table>
<?php include ("footer.php"); ?>