

function getRow(person) {//aduce un rand pe ecran
    var firstName=person.firstName;
    var lastName=person.lastName;
    var phone=person.phone;
        var row = '<tr>'+
        '<td>' + firstName + '</td>'+
        '<td>' + lastName + '</td>'+
        '<td>'+ phone +'</td>'+
        '<td>' +
            '<button class="edit" data-id= "' + person.id +'"> Edit  </button >' +
            '<button class="remove" data-id= "' + person.id  + '"> x </button>'+
            '</td>' +
        '</tr>';
    return row;
}
function loadcontacts() {
    $.ajax({
        url: "servlets/load-contacts.php",
        cache: false,
        dataType: 'json',
        type: 'POST'
    }).done(function (contacts) {
                showContacts(contacts);
    });
}

if ('#agenda'.length){
    loadcontacts();
}

function findcontact (id){
    for (var i= 0;i < allcontacts.length; i++)
    {
        var person=allcontacts[i];
        if (person.id == id) {
            return person;
        }
    }
}

function removeContact (id) {
    $.ajax({
        url: "servlets/remove-contact.php",
        type: 'POST',
        dataType : 'json',
        data: {
            id: id
        }

    }).done(function (contacts) {
        showContacts(contacts);
    });
}


function editC(person){

        $("input[name='id']").val(person.id);
        $("input[name='firstName']").val(person.firstName);
        $("input[name='lastName']").val(person.lastName);
        $("input[name='phone']").val(person.phone);

}

var allcontacts = '';
function showContacts(contacts) {

    allcontacts = contacts;
    $('#agenda tbody').html('');
    for (var i = 0; i < contacts.length; i++) {
        var person = contacts[i];
        $('#agenda tbody').append(getRow(person));

    }
   }

//LA CLICK PE BUTTON FACE CEVA
$('#agenda').on('click', 'button.remove', function(){
    var id=$(this).data('id');
    console.info('remove this', this);
    removeContact(id);
});

$('#agenda').on('click', 'button.edit', function(){
    var id=$(this).data('id');
    var person = findcontact(id);
    editC(person);
});


