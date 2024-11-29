var bookmarkName = document.getElementById('bookmarkName')
var bookmarkLink = document.getElementById('bookmarkLink')
var addBtn = document.getElementById('addBtn')
var linkList= [];

if(localStorage.getItem('links') == null) {
linkList= JSON.parse(localStorage.getItem('links')) ;
}else{
    linkList= [];
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
    console.log(linkList)
}

// display \\

function displayLink(){
    var cartoona=``
    for (var i=0;i<linkList.length;i++){
        cartoona+= ` <tr >
                        <td>${i+1}</td>
                        <td>${linkList[i].bookmarkName}</td>
                        <td><button class="btn btn-info "><i class="fa-regular fa-eye"></i> Visit</button></td>
                        <td><button class="btn btn-danger" onclick="clearForm()"><i class="fa-solid fa-trash"></i> Delete</button></td>
                    </tr>`
    }
    document.getElementById('content').innerHTML = cartoona
    
}

function clearForm(){
    document.getElementById('content').innerHTML =''
   
}