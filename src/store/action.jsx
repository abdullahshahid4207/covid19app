const getData = () => {
    // const [data, setData] = useState([]);
    // alert('Hello')
    return (dispatch) => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(response => response.json())
        .then(json => dispatch({type: 'GETDATA', data: json}))
    };
    // }
}

export default getData;