/**
 * Created by aguha on 28-09-2014.
*/
var login = function(){
        var userID = document.getElementById('userId');
        var password = document.getElementById('userpassword');


       // console.log(userID.value+ '  '+password.value);

        var loginObj = {};
        loginObj.username =   userID.value;
        loginObj.password = password.value;

        //hitServer(loginObj);
       // successCallback();

    };


   function successCallback(){
       document.getElementById("mainAppDiv").innerHTML = "";
       var factory = new PodFactory()
       for(var i=0;i<10;i++){
           var pod = factory.createPod({'id':'+i+', 'podName':'myPod_'+i});
           document.getElementById("mainAppDiv").appendChild(pod.getNode());
       }
   }




    function hitServer(loginObject){
        $.ajax({
            type: "POST",
            url: "http://expres-stag.herokuapp.com/auth/signin",
            data: loginObject,
            success: function(data){
                console.log(data);

            },
            failure: function(error){
                alert("Login failed");

                //document.getElementById("mainAppDiv").innerHTML += "<p>invalid username / password</p>"
            }
        });
    };


var PodFactory = function () {

    this.createPod = function (podJSON) {
        var pod ={};

        if(podJSON){
            pod.HTMLnode = document.createElement("DIV");


            pod.HTMLnode.id = podJSON.podName;
            pod.HTMLnode.style.height = "85px";
            pod.HTMLnode.style.width = "85px";
            pod.HTMLnode.style.border = "solid 1px red";
            pod.HTMLnode.style.borderRadius = "5px";
            pod.HTMLnode.style.background = "grey";
            pod.HTMLnode.innerHTML = podJSON.podName;
            pod.HTMLnode.style.margin = "20px 20px 20px 20px ";
            pod.HTMLnode.style.float = "center";

            pod.HTMLnode.onclick = function(){
                alert('clicked.. '+pod.HTMLnode.id);
//                if(pod.HTMLExpandNode.hidden){
//                    pod.HTMLExpandNode.hidden = false;
//                }
//                else {
//                    pod.HTMLExpandNode.hidden = true;
//                }

            }
        }

        pod.getNode = function(){
            return pod.HTMLnode;
        }

        pod.getExpandedNode = function(){
            return   pod.HTMLExpandNode;
        }

        pod.setNode = function(node){
            pod.HTMLnode = node;
        }


        return pod;
    }


}


