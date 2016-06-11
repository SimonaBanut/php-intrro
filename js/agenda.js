console.debug('1) loading agenda');

function getRow(person) {
    var row = '<tr>'+
        '<td>' + person.firstname + '</td>'+
        '<td>' + person.lastname + '</td>'+
        '<td>'+ person.telephone +'</td>'+
        '<td><button data-id="' + person.id + '">x</button></td>' +
        '</tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"

   }).done(function(dateleDePeServer) {
    console.debug ('3)ajax done', dateleDePeServer);
    showContacts(dateleDePeServer)
});

function removeContact (id){
    $.ajax({
        url: "js/mocks/remove-contact.json",
        type: 'POST',
        data: {
            id: id
        }

    }).done(function(dateleDePeServer) {
         showContacts(dateleDePeServer)
    });

}
console.debug ('2) after ajax')

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
$('#agenda').on('click', 'button', function(){
    var id=$(this).data('id');
    console.info('remove this', this);
    removeContact(id);
})