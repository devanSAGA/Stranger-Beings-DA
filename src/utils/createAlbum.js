var request = require("request");

function createAlbum(albumName) {

  console.log(albumName);

  var options = {
    method: 'POST',
    url: 'https://api.imgur.com/3/album',
    headers: {
      Authorization: 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    },
    formData: {
      title: albumName,
      description: 'This albums contains all the photos and videos of '+ albumName
    }
  };



  request(options, function(error, response, body) {
    if(error) {
      console.log(error);
      throw new Error(error);
    }
    console.log(body);
    var res = JSON.parse(body);
    return res.data.id;
  })
};

function createAllAlbums() {
  var albumNames = ["Sem-1","Sem-2","Sem-3","Sem-4","Sem-5","Sem-6","Sem-7","Sem-8","RI","Home","Trip","Random"]
  for(i=0;i<albumNames.length;i++) {
    var albumName = albumNames[i];
    //console.log(albumNames[i]);
    console.log(albumName + " : " + createAlbum(albumName));
  }
};

createAllAlbums();
