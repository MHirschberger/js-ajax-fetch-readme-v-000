const token = '2f75e379b2d5e0939e945d829d61a4fe58d94c45'

fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));


