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
  for(i=1;i<=8;i++) {
    console.log('sem_'+i +" : " + createAlbum("sem_"+i));
  }
};

createAllAlbums();
