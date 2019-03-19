// document.getElementById("info-field");
// var myContent = document.getElementById("info-field");
// var myP = myContent.getElementsByTagName("p");

// console.log(myP);

// var elem = document.getElementById('title');
// elem.onclick = function(){
//     alert('I was clicked');
// }; // Every time user clicks on title, alert will pop up

// var para = document.getElementsByTagName('p');
// for (var i = 0; i < para.length; i++) {
//     console.log(i);
//     para[i].addEventListener('click', function(e){
//         console.log('I was clicked' + e.target.id) ;
//     });
// }


// $('#row-phone input')
//$("tbody tr:nth-child(2)")
//$("section")
//$("input[placeholder=Email]")


//adding Peter to the list
//.append adds the the end of selected elements
$("tbody").append(` 
    <tr class="row" id="row-3">
    <td>Peter</td>
    <td>123456789</td>
    <td>peter@gmail.com</td>
    </tr>
`);

//Add button to clear

$("#row-submit").append(`<input type="reset" value="clear" id="clear-input" class="clear"/>`)


//Change the title

$("#header").html('<h1>Jordans Contact list</h1>')


//Change text color

$("#contact-list").css('color', 'red')
//.css is a method call (highlighted in yellow). 
//this is a Jquery method, saying dcument.getelementbyid(#IDclasslist).style.color="red";



$('#row-name').on('keydown', function(e){
    var input = e.target.value; //e.target.value are the characters that user puts into input
    if (input.length > 9){ //check if length is over 9
        $(this).css('border','solid 2px red'); //changes css. If over 10 letters, borders light up red
    }else{
        $(this).css('border','solid 1px black');
    }
    });


$('#row-phone').on('keydown', function(e){
    var input = e.target.value;
    if(input.length < 6 || input.length > 16 || isNaN(input)){
        $(this).css('border', 'solid 2px red');
    }else{
        $(this).css('border', 'solid 1px black');
    }
});

$('#form1').on('click', 'row',function(e){
    var rowElements = $(this).children(); //declare variables, store children of clicked element in variable
    var updateformElements = $('update-form input').slice(0, rowElements.legnth); //get all elements (currently empty) from the array (update-form input) --> store values in new variable, updateFormElements
    for (var i = 0; i < rowElements.length; i++) {
        $(updateformElements[i]).val($(rowElements[i]).html()); //use the loop to iterate over each element in the new array, assign the values from the rowElements into updateFormElements using .val()
        // set the value of each element in the set of matched elements from rowElements
    }
    $('#update-form').prop('#row-name', $(this).attr('#row-phone'));

});




// let rowIdCounter = $('#form1 t body').find('tr').length; //see how many rows there are on table

// //all form submit
// $('#form1').submit(function (e){ //when the contact form is submitted, do this
// e.preventDefault(); //stops from reloading page
// var formId = e.target.id;
// var name = e.target.name.value;
// var phone = e.target.phone.value; //get all information that user filled out, store into newly defined variables
// var email = e.target.email.value;
// //the to be inserted new information

// const row = $(`
//     <tr class ="row">
//     <td>${name}</td>
//     <td>${phone}</td>
//     <td>${email}</td>
//     </tr>`
// );

// if(formId === 'create-form') { //if the form that is submitted is called 'create-form do this:
// $(row).attr("id",`row-${rowIdCounter++}`); //increase the number in row-id
// $('tbody').append(row); //append the object that was created (in row) to the 'tbody'
// $(this).find('.clear').click(); //clear the information from the inputs (reset input fields)
// } else {
// $(row).attr("id",$(this).prop('row-id'));
// // if you want to update a contact, find the relevant row and replace that row with updated information. 
// $('#'+$(this).prop('row-id')).replaceWith(row);
// // logic above pushes the information created in row over the attribute that was previously selected
// }
// alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
// });
