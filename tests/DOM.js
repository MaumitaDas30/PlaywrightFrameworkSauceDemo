
!


console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.URL);
console.log(document.baseURI);

//direct DOM methods:

//getElementById()= id value as argument > 


let ele1=document.getElementById("h21")
console.log(ele1)

//getElementByClassName --> class value as argument --> string format
//returns --> HTML collection of all elements which match the class

let ele2=document.getElementByClassName("head1")
console.log(ele2)

//getElementByTagName --> tagname as argument --> string format
//return -->  HTML collection of all elements which match the tagname

let ele3=document.getElementByTagName("h3")
console.log(ele3)


//querySelector() --> argument --> id, class,tagname, *
//return --> the 1st matched element based on the selector
//the selector sysmbl is compulsory

let ele4= document.querySelector(".head1")
console.log(ele4)


//querySelectorAll()--> argument --> id, class, tagname, *
//return all the matched elements based on the 
// selector in nodelist format that selector symbol is compulsory

let ele5=document.querySelectorAll(".head1")
console.log(ele5)

