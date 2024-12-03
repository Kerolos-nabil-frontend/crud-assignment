var bookmarkName = document.getElementById('bookmarkName')
var bookmarkLink = document.getElementById('bookmarkLink')
var addBtn = document.getElementById('addBtn')
var linkList= [];

if(localStorage.getItem('links')) {
linkList= JSON.parse(localStorage.getItem('links')) ;
}

function addLink(){
  
    console.log(bookmarkName.value)
    console.log(bookmarkLink.value)

    var link ={
        bookmarkName: bookmarkName.value,
        bookmarkLink: bookmarkLink.value
        
    }
    console.log(link)

    linkList.push(link)
    localStorage.setItem('links',JSON.stringify(linkList))
    displayLink()
    
}
addBtn.addEventListener('click',function(){
    addLink()
    clearForm()
})
// display \\

function displayLink(){
    var cartoona=''
    for (var i=0;i<linkList.length;i++){
        cartoona+= ` <tr >
                        <td>${i+1}</td>
                        <td>${linkList[i].bookmarkName}</td>
                        <td><button class="btn btn-info " onclick="visititem(${i})"><i class="fa-regular fa-eye"></i> Visit</button></td>
                        <td><button class="btn btn-danger" onclick="deletelink(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
                    </tr>`
    }
    document.getElementById('content').innerHTML = cartoona
    
}

function clearForm(){
    bookmarkName.value= null
    bookmarkLink.value= null
   
}


function deletelink(i){
    linkList.splice(i,1)
    localStorage.setItem('links',JSON.stringify(linkList))
    displayLink()
}


function visititem(i){
    window.open(linkList[i].bookmarkLink)
}