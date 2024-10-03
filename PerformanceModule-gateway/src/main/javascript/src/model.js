export function fetchNetworkInterfaces() {
    return function (dispatch) {
        fetch('/status/network', {
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch({
                payload: json
            });
        })
        // .catch(error => {
        //     console.error('Error fetching network interfaces:', error);
        //     dispatch({
        //         error
        //     });
        // });
    }
}