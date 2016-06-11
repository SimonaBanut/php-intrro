console.debug('loading agenda');

function getRow(person){
    var firstname=person[0];
    var lastname=person[1];
    var row = '<tr><td>'+firstname+'</td><td>'+ lastname +'</td><td>0723569874</td></tr>';
    return row;
}
var contacts=[
    ['Simion','Matei'],
    ['Mocan','Nicu'],
    ['Hader','Ramona']
    //['popescu','elena'],
    //['bighe','george']

];
for (var i=0; i<contacts.length; i++)
    {
        var person=contacts[i];
        $('#agenda tbody').append(getRow(person));}