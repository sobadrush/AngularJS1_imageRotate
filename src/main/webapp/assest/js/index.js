var myApp = angular.module('myApp', []);

myApp.controller('firstController', ['$scope', function($scope){

    $scope.init = function () {
        // alert('init');
        $scope.imgList = [{ id : 'pic001' , name:'魔人普烏' , url: 'http://s3-ap-northeast-1.amazonaws.com/topicks/article_thumb/25629_original.jpg'}]
        $scope.rotDegree = +0;
    };
    $scope.init();

    $scope.doRotate = function (_deg) {
        console.log("=============== doRotate =================") 
        $scope.rotDegree = parseInt($scope.rotDegree) + parseInt(_deg);
        $scope.rotDegree = $scope.rotDegree >= 360 ? 0 : $scope.rotDegree;
    };

    $scope.doFileReader = function () {
        console.log("=============== doFileReader =================") 
        
        let imgTagList = document.getElementsByClassName('myImage');
        console.log("imgTagList >>> ", imgTagList);
        console.log("imgTagList[0] >>> ", imgTagList[0]);

        // console.log( 'getBase64Image >>> ' , getBase64Image(imgTagList[0]) );
        if(window.FileReader) {  
            var fr = new FileReader();  
            fr.readAsDataURL(imgTagList[0].src);
        }  
        else {  
            alert("Not supported by your browser!");  
        }  
    };

    function getBase64Image(img) {
        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        img.setAttribute("crossOrigin",'Anonymous');

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to
        // guess the original format, but be aware the using "image/jpg"
        // will re-encode the image.
        var dataURL = canvas.toDataURL("image/jpg");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

}]);




