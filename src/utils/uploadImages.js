var request = require("request");
var fs = require("fs");
var arg = process.argv.splice(2);
var fileName = arg[0];

function encodeImageToBase64(file) {
  console.log("File : " + file);
  return fs.readFileSync(file);
}

function uploadImagesToAlbum(albumHash, image) {
  var descriptions = require("/Users/rutup/Downloads/result").images;
  var index = fileName.split(".")[0]-1;
  var imageDescricption = descriptions[index].desc;
  var imageLayout = descriptions[index].layout;
  var options = {
    method: 'POST',
    url: 'https://api.imgur.com/3/upload',
    headers: {
      Authorization: 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: {
      image: image,
      album: albumHash,
      description: imageDescricption,
      tite: imageLayout
    }
  };

  request(options, function (error, response, body) {
    if(error) {
      console.log(error);
      throw new Error(error);
    }
    console.log(body);
  });
};


function uploader() {
  var encodedImage = encodeImageToBase64(fileName);
  //console.log(encodedImage);
  uploadImagesToAlbum('7Stvgch',encodedImage);
};

uploader();
