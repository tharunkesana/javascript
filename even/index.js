
const start = 2;
const stop = 40;

const  evenNumber = document.getElementById("evenNumber")

    for (let i = start; i <= stop; i++) {
        if( i % 2 == 0){

            const listItem = document.createElement("li");
            listItem.textContent = i;
            evenNumber.appendChild(listItem);
        }

       
        
    }





