/**
 * Created by aguha on 28-09-2014.
 */

function login(){
  var userID = document.getElementById('userId');
  var password = document.getElementById('userpassword');


  alert(userID);

    var loginObj = {};
    loginObj.username =   userID.value;
    loginObj.password = password.value;

    hitServer(loginObj);

}

function hitServer(loginObject){
    $.ajax({
        type: "POST",
        url: "http://expres-stag.herokuapp.com/auth/signin",
        data: loginObject,
        success: function(data){
            console.log(data);
            document.getElementById("mainAppDiv").innerHTML = "User logged in"
        },
        failure : function(error){
            console.log(error);
            document.getElementById("mainAppDiv").innerHTML += "<p>try again</p>"
        }
    });
}
