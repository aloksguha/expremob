/**
 * Created by aguha on 29-09-2014.
 */


define([], function(){
    var PodFactory = function () {

        this.createPod = function (podJSON) {
            var pod ={};

            if(podJSON){
                pod.HTMLnode = document.createElement("DIV");
                pod.HTMLnode.id = podJSON.podName;
                pod.HTMLnode.height = "50px";
                pod.HTMLnode.width = "50px";
                pod.HTMLnode.style.border = "solid 1px red"

            }

            pod.getNode = function(){
                return pod.HTMLnode;
            }

            pod.setNode = function(node){
                pod.HTMLnode = node;
            }


            return pod;
        }


    }
})




