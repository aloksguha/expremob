/**
 * Created by aguha on 28-09-2014.
 */
//var localStore = require("localStore");
function login(){
  var userID = document.getElementById('userId');
  var password = document.getElementById('userpassword');


  console.log(userID.value+ '  '+password.value);

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
            //localStore.setStoreValue("Oauthtoken",data.oauthToken);
            //console.log(localStore.getStoreValue("Oauthtoken"));
            document.getElementById("mainAppDiv").innerHTML = "User logged in"
        },
        failure : function(error){
            console.log(error);
            document.getElementById("mainAppDiv").innerHTML += "<p>invalid username / password</p>"
        }
    });
}
