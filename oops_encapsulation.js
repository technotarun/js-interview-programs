(function() { 
    var x = '';

    function myFunction () {
       alert('Hello: ' + x);
    }

    x = 'Bob';
    myFunction();

    alert(typeof x);            // string
    alert(typeof myFunction);   // function
 })();

 alert(typeof x);               // undefined
 alert(typeof myFunction);      // undefined