export const fetchImage = URL => {
    fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba'
        }
        })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            console.log(response);
            this.setState({
            images: response.data
            });
        })  
}