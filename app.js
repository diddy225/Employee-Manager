const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

// PRINT
const print = function(){
  $('.content').empty();
  for (let i = 0; i < employeeList.length; i++){
    $('.content').append(`<article class='print box'>Name: ${employeeList[i].name}<br/>RM#: ${employeeList[i].officeNum}<br/>PH#: ${employeeList[i].phoneNum}</article>`);
  }
}
$('#print').on('click', function(){
  event.preventDefault();
  print();
});

//VERIFY
$('#verify').on('click', function(){
  event.preventDefault();
  $('.content').html(`<div class='verify'> <input id='input' placeholder='Enter Employee' type='text'> </input> <button onclick='verify(employeeList)'>Search</button> </div> <div class='msg'></div>`);
});

const verify = function(arr){
  let input = $('#input').val();
  let msg = '';  

  for (let i = 0; i < arr.length; i++){
    if(input === arr[i].name) {
      msg = 'EMPLOYEE FOUND!';
      break;
    } else {
      msg = 'NO EMPLOYEE FOUND!';
      }
    }
    $('.msg').html(`${msg}`);
}

//Lookup
$('#lookup').on('click', function(){
  event.preventDefault();
  $('.content').html(`<div class='lookup'> <input id='input' placeholder='Enter Employee' type='text'> </input> <button onclick='lookup(employeeList)'>Lookup</button> </div> <div class='list'></div>`);
});

const lookup = function(arr){
  let input = $('#input').val(); 
  $('.list').empty();
  for (let i = 0; i < arr.length; i++){
    if(arr[i].name === input){
      $('.list').html(`<p>Name: ${arr[i].name}<br/>RM#: ${arr[i].officeNum}<br/>PH#: ${arr[i].phoneNum}</p>`);
      break;
    } else {
      $('.list').html('NO EMPLOYEE FOUND!');
    }
  }
}

//CONTAINS
$('#contains').on('click', function(){
  event.preventDefault();
  let input = `<input id='input' placeholder='Enter Employee' type='text'> </input>`;
  let button = `<button onclick='contain(employeeList)'>Contains</button>`;
  $('.content').html(`<div class='contain'>${input} ${button}</div><div class='list'></div>`);
});

const contain = function(arr){
  let input = $('#input').val();
  let found = false;
  $('.list').empty();

  for (let i = 0; i < arr.length; i++){
    if(arr[i].name.includes(input)){
      $('.list').append(`<p>${arr[i].name}<br/>${arr[i].officeNum}<br/>${arr[i].phoneNum}</p>`);  
      found = true;
    }
  }
  if (!found || input == "") {
    $('.list').empty();
    $('.list').append(`<p>No Employee Found</p>`);
  }
}

//UPDATE
$('#update').on('click', function(){
  event.preventDefault();
  let inputName = `Name <input id='inputName' type='text' placeholder='Enter Name'></input>`;
  let inputOfficeNum = `Number <input id='inputOfficeNum' type='text'placeholder='Enter Room'></input>`;
  let inputPhone = `Phone <input id='inputPhone' type='text' placeholder='Enter Phone'></input>`;
  let button = `<button onclick='update(employeeList)'>Update</button>`;
  
  $('.content').html(`<div class='update'>${inputName}<br/>${inputOfficeNum}<br/>${inputPhone}<br/>${button}</div><div id='employee' ></div>`);
});

const update = function(arr){
  let inputName = $('#inputName').val();
  let inputOfficeNum = $('#inputOfficeNum').val();
  let inputPhone = $('#inputPhone').val();
  $('.lookup p').empty();
  let found = false;

  for (let i = 0; i < arr.length; i++){
    if (arr[i].name === inputName) {
      arr[i].officeNum = parseFloat(inputOfficeNum);
      arr[i].phoneNum = inputPhone;
      $('#employee').html(`${inputName}<br/>${inputOfficeNum}<br/>${inputPhone}<br/>Updated!`);
      found = true;
    } 
  }
  if(!found || inputName == ""){
    $('#employee').html(`<p>No Employee Found</p>`);
  }
}

//ADD
$('#add').on('click', function(){
  event.preventDefault();
  let inputName = `Name <input id='inputName' type='text' placeholder='Enter Name'></input>`;
  let inputOfficeNum = `Number <input id='inputOfficeNum' type='text' placeholder='Enter Room'></input>`;
  let inputPhone = `Phone <input id='inputPhone' type='text' placeholder='Enter Phone'></input>`;
  let button = `<button onclick='add(employeeList)'>Add</button>`;
  
  $('.content').html(`<div class='add'>${inputName}<br/>${inputOfficeNum}<br/>${inputPhone}<br/>${button}</div><div id='employee' ></div>`);
});

const add = function(){
  let inputName = $('#inputName').val();
  let inputOfficeNum = $('#inputOfficeNum').val();
  let inputPhone = $('#inputPhone').val();

  const employee = {}

  employee.name = inputName;
  employee.officeNum = inputOfficeNum;
  employee.phoneNum = parseFloat(inputPhone);
  employeeList.push(employee);
  $('#employee').html(`${inputName}<br/>${inputOfficeNum}<br/>${inputPhone}`);
}

//DELETE
$('#delete').on('click', function(){
  event.preventDefault();
  let inputName = `<input id='inputName' placeholder='Enter Employee' type='text'></input>`;
  let button = `<button onclick='remove(employeeList)'>Delete</button>`;
  let confirm = `<p id=confirm></p>`;
  $('.content').html(`<div class='delete'>${inputName} ${button}</div><br/><div class='msg'>${confirm}</div>`);
});

const remove = function(arr){
  let inputName = $('#inputName').val();
  $('#confirm').empty();
  let found = true;
  for (let i = 0; i < arr.length; i++){
    if (inputName === arr[i].name){
      arr.splice(i , 1);
      $('#confirm').append(`Employee Deleted`);
      found = true;
    }
  }
  if (!found || inputName == ""){
    $('#confirm').empty();
    $('#confirm').append('No Employee Found');
  }
}
