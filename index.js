function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(res => res.json())
      .then(data => {
        const idElement = document.createElement("p");
        idElement.textContent = data.id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorElement = document.createElement("p");
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }