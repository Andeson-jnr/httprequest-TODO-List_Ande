let request = (obj) => {
    return new promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.open(obj.method || "GET", obj.url);
        req.onload = () => {
            if (req.status >= 200 && req.status < 300) {
                resolve(req.response);
            }else {
                reject(req.statusText);
            }
        };
        req.onerror = () => reject(req.statusText);
        req.send(obj.body);
    });
};

let object = {
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
    body: null
};

let result = [];

// refactor the code below to use async/await instead
request(object)
.then(result => results = result)
.catch(error => console.log("Error! ${error}"));