const input = prompt("Enter a Word:");

if (input !== null) {  
    const output = input
        .split("")                        
        .map((char, index) => `${index}${char}`) 
        .join("")                         
        .toUpperCase();                 

   
    document.getElementById("result").innerText = output;
}