function makeRequest(args){
    console.log(args);
}
var myPromise = new Promise(function(resolve,reject){
    const request = new XMLHttpRequest();
    request.open("GET", "https://github.com/ChandiniSireeshaTatikonda/Assignments-on-Html-and-CSS/blob/main/Q1.html");
    request.send();
    if(this.readyState == 4 && this.status == 200){
        resolve(request.response);
    }
    else{
        reject(request.abort);
    }
});
myPromise.then(
    function(value){ makeRequest(value);},
    function(error){ makeRequest(error);}
);


