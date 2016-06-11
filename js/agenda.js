console.debug('loading agenda');

function getRow(person) {
    var firstname = person.firstname;
    var lastname = person.lastname;
    var row = '<tr><td>' + firstname + '</td><td>' + lastname + '</td><td>0723569874</td></tr>';
    return row;
}
var contacts = [
    {firstname:'SimionS',lastname: 'Matei'},
    {firstname:'Mocan', lastname:'Nicu'},
    {firstname:'Hader',lastname: 'Ramona'}
    //['popescu','elena'],
    //['bighe','george']
];

for (var i = 0; i < contacts.length; i++) {
    var person = contacts[i];
    $('#agenda tbody').append(getRow(person));
}