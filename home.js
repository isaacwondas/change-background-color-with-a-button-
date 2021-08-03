 //challenge 1:your Age in days


 function Ageindays(){
    var birthyear = prompt('what year were you born... Good friend?');
    var AgeindaysS = (2021 - birthyear) * 365; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' +AgeindaysS + ' days old');
    h1.setAttribute('h1', 'age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


    //var h1 = document.createElement('h1');
   // var textAnswer = document.createTextNode('you are ' + AgeindaysS + ' days old!');  
    //h1.setAttribute('id', 'Ageinday');
    //h1.appendChild(textAnswer);
    //document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}

//challenge 2: image Generate 

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-box-gen');
    image.src = "https://media.tenor.com/images/6b9784a001c9964a2c5a64e9db078594/tenor.gif";
    div.appendChild(image);
}
    
const students = [
    {
        name: "isaac",
        age: 20,
    },
    {
        name: "wondas",
        age: 30,
    },

]

const student = students.find( stu =>{
    return stu.name == "isaac"
})

let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_span.innerText = "JAvascrit";

my_element.appendChild(my_span);
console.log(my_element);
 
getnewDate()

function getnewDate() {
    document.getElementsByClassName("time").innerHTML = new Date();
}

const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    const cost = document.querySelector("input");
    let tip = (cost.value* 0.15).toFixed(2);
    let temp =`<h1> you should tip $${tip} on 
    $${cost.value} </h1>`; 
    output.innerHTML  = temp;
})
  
