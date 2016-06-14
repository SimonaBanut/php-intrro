console.debug('1) loading agenda');

function getRow(person) {
    var firstName=person.firstName;
    var lastName=person.lastName;
    var phone=person.phone;
        var row = '<tr>'+
        '<td>' + firstName + '</td>'+
        '<td>' + lastName + '</td>'+
        '<td>'+ phone +'</td>'+
        '<td>' + '<button data-id= "' + person.id +'" class="editare"> Edit  </button >' +
        '<button data-id= "' + person.id  + '" class = "remove" > x</button>'+'</td>' +
        '</tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json",
    type: 'POST'
   }).done(function(contacts) {
    console.debug ('3)ajax done', contacts);
    showContacts(contacts);
});

function removeContact (id) {
    $.ajax({
        url: "js/mocks/remove-contact.json",
        type: 'POST',
        data: {
            id: id
        }

    }).done(function (contacts) {
        showContacts(contacts);
    });
}
console.debug ('2) after ajax');

var altcontact = '';
function editC(id){
    $.ajax({
        url: "js/mocks/load-contacts.json",
        type: 'POST'
            }).done(function(contacts) {
        altcontact = id;
        var personNew = contacts[id-1];
        console.debug (personNew);
        $("input [name='firstName']").val(personNew.firstName);
        $("input [name='lastName']").val(personNew.lastName);
        $("input [name='phone']").val(personNew.phone);
    });
}


function showContacts(contacts) {
    //STERGE VECHILE DATE CA SA AFISEZE CELE NOI
    $('#agenda tbody').html('');
    //AFISEAZA NOILE DATE
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

$('#agenda').on('click', 'button.editare', function(){
    var id=$(this).data('id');
    console.info('edit this', this);
    editC(id);
});

