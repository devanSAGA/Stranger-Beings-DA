module.exports = {
        initializeToken : function() {
        console.log("Initializing Tokens");
        var accessToken = window.localStorage.getItem('access_token');
        if (accessToken === null) {
            window.localStorage.setItem('access_token','39ecef3196ffa7259b7e6293bb1c1b9d22282f31');
            accessToken = '39ecef3196ffa7259b7e6293bb1c1b9d22282f31';
        }
        var refreshToken = window.localStorage.getItem('refresh_token');
        if (refreshToken === null) {
            window.localStorage.setItem('refresh_token','7310023111e3c0975c71660b4ed0b8b378228a84');
        }      
    },

    refresh : function() {
        console.log("Refreshing tokens");
        var data = {
            refresh_token: window.localStorage.getItem('refresh_token'),
            client_id: '11460a56fc0d5d7',
            client_secret: '8a43ffc2bb450c99e4273020172fc3e5f5cefa6f',
            grant_type: 'refresh_token' 
        };
        fetch('https://api.imgur.com/oauth2/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            return res.json();
        })
        .then(response => {
            window.localStorage.setItem('access_token',response.access_token);
            window.localStorage.setItem('refresh_token',response.refresh_token);
        });
    }
}