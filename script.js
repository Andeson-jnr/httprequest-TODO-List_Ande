

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.open(obj.method || "GET", obj.url);
    req.onload = () => {
      if (req.status >= 200 && req.status < 300) {
        resolve(req.response);
      } else {
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
  body: null,
};

async function handleRequest() {
  try {
    const response = await request(object);
    const todos = JSON.parse(response);

    const todoList = document.getElementById("todo-list");
    todos.slice(0, 10).forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = `${todo.title} - ${todo.completed ? "✅successful" : "❌Declined"}`;
      todoList.appendChild(li);
    });
  } catch (error) {
    console.log(`Error! ${error}`);
  }
}

handleRequest();
