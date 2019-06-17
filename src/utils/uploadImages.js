var request = require("request");
var fs = require("fs");
var arg = process.argv.splice(2);
var fileName = arg[0];

function encodeImageToBase64(file) {
  //console.log("File : " + file);
  return fs.readFileSync(file, 'base64');
}

function uploadImagesToAlbum(albumHash, image, imageDescription, imageLayout, callback) {
  var options = {
    method: 'POST',
    url: 'https://api.imgur.com/3/upload',
    headers: {
      Authorization: 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    },
    formData: {
      image: image,
      title: imageLayout,
      description: imageDescription,
      album: albumHash
    }
  };
  //console.log(options);
  request(options, function (error, response, body) {
    //console.log(response);
    if(error) {
      console.log(error);
      throw new Error(error);
    }
    console.log(body);
    return callback();
  });

}


function uploader() {
  var descriptions = require("/Users/rutup/Workplace/Stranger-Beings-DA/dataFiles/FinalContent/Sem-6/Sem-6_json").images;
  var filePath = "/Users/rutup/Workplace/Stranger-Beings-DA/dataFiles/FinalContent/Sem-6/Images/";
  var milliseconds = 2000;
  for(var i=0;i<descriptions.length;i++) {
    var imageName = descriptions[i].img_name;
    var imagePath = filePath + imageName;
    //console.log(imagePath);
    var encodedImage = encodeImageToBase64(imagePath);
    var imageDescription = descriptions[i].desc;
    var imageLayout = descriptions[i].name;
    uploadImagesToAlbum('H0OYQR6', encodedImage, imageDescription, imageLayout, () => {
      var currentTime = Date.now();
      var endTime = currentTime + 2000;
      while(currentTime<endTime) {
        //console.log(currentTime+"   "+endTime);
        currentTime = Date.now();
      }
    });
  }
};

uploader();
