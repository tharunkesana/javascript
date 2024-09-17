function grade(){
    let marks;
    let result;

    if (marks>90){
       result = "excellent";
    }
    else if (marks >=70){
        result = "good";
    }
    else if (marks<50){
        result = "average"
    }
     
    return result;

}


