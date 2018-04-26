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

        // getBase64Image( imgTagList[0] , function(cbData) {
        //     console.log('cbData >>> ' , cbData);   
        // });

        // 【利用xhr發請求取得圖片】
        // toDataUrlByXHR( imgTagList[0].src , function(cbData) {
        //     console.log('cbData >>> ' , cbData);   
        // });


        requestImage( imgTagList[0].src , function(cbData) {
            console.log('cbData >>> ' , cbData);   
        });

    };


    function getBase64Image( _imgTag , callBackFn ) {
        // Create an empty canvas element
  

        // img.setAttribute("crossOrigin",'Anonymous');
        // let myImg = new Image(_imgTag.width, _imgTag.height); // 建立 <img> 標籤 ， 不受跨網域限制
        let myImg = new Image(); // 建立 <img> 標籤 ， 不受跨網域限制
        
        // myImg.crossOrigin = 'Anonymous';
        // myImg.src = _imgTag.src;
        
        // 要先确保图片完整获取到(使用jQuery套件)，这是个异步事件
        $(myImg).attr('crossOrigin','anonymous')
                .attr('src', _imgTag.src)
                .imagesLoaded( function() {
                    console.log('jQuery imgLoaded!')
                    console.log('myImg >>>', myImg);
                    //------------------------------

                    let canvas = document.createElement("canvas");
                    canvas.width = _imgTag.width;
                    canvas.height = _imgTag.height;

                    // Copy the image contents to the canvas
                    let ctx = canvas.getContext("2d");
                    ctx.drawImage(myImg, 0, 0, _imgTag.width, _imgTag.height);
                    // Get the data-URL formatted image
                    // Firefox supports PNG and JPEG. You could check img.src to
                    // guess the original format, but be aware the using "image/jpg"
                    // will re-encode the image.
                    let dataURL = canvas.toDataURL("image/jpg");

                    // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                    callBackFn(dataURL);
                  }
              );

    }

    
    // 若 <img src='...url... '> ，可用此function將圖檔載回並轉成base64
    // 【參考】https://stackoverflow.com/questions/22172604/convert-image-url-to-base64
    function toDataUrlByXHR(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url , true);
        xhr.responseType = 'blob';
        xhr.send();
    }
    

    // 【參考】https://uploadcare.com/docs/guides/advanced/
    function requestImage(imageUrl, callback) {
        var req = new XMLHttpRequest();
        req.onload = function() {
            var img = new Image();
            img.onload = function() {
                URL.revokeObjectURL(this.src);
                callback(img);
            };
            img.src = URL.createObjectURL(req.response);
        };
        req.open("get", imageUrl, true);
        req.responseType = 'blob';
        req.send();
   }

}]);




