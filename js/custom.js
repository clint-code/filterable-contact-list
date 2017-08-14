//Get input element
let filterInput = document.getElementById('filterInput');

//add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  //get the value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  //console.log(filterValue);

  //get names ul
  let ul = document.getElementById('names');

  //get li's from ul
  //querySelectorAll is a function that selects everything based on the class name
  let li = ul.querySelectorAll('li.collection-item');

  let header = ul.querySelectorAll('h5.collection-header');

  //loop through collection-item li
  for (let i = 0; i<li.length; i++){
    //this gets the current length of the name typed
    let a = li[i].getElementsByTagName('a')[0];
    //let collectionHeader = li[].getElementsByTagName()[0];

    //if matched
    //this grabs whatever is inside the a tag, converts the text to uppercase
    //this checks that one of the letters matches with whatever is in the names
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display='';
    }else {
      li[i].style.display='none';
    }
  }

}
