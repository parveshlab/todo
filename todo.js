
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange= function(){ 
    var data = JSON.parse(this.responseText) 
    console.log(data); 
    var output =`<thead> 
    <tr> 
    <th >No.</th> 
    <th>Todo item</th> 
    <th >Status</th> 
    <th >Actions</th> 
    </tr> </thead>` 
    for(i=0;i<data.length;i++){ 
        var checkbox 
        if(data[i].completed===true){ 
            console.log('1'); 
            checkbox = 'checked disabled' 
        }else{
             checkbox='' 
            } output +=` <tr> 
            <th scope="row">${data[i].id}</th> 
            <td>${data[i].title}</td> 
            <td>${data[i].completed}</td> 
            <td> <input type="checkbox" class="todo-checkbox" onclick="handleCheck()" ${checkbox}> 
            </tr>` 
        
        
        }
        document.getElementById('tr').innerHTML=output; 
    } 
    xhttp.open("get","https://jsonplaceholder.typicode.com/todos ",true)
    xhttp.send();


    var checked = 0
    function changeCheckCount(){
        return new Promise((resolve)=>{
            checked++
            if(checked==5)
            resolve()
        })
    }


    function handleCheck(){
        changeCheckCount().then(()=>alert("congratulations! You Are Completed Five Tasks."));
    }