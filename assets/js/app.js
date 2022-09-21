



function GetAllProduct(){
  fetch("https://randomuser.me/api/?results=50")
  .then(response => response.json())
  .then(data => {
    let item = "";
    data.results.forEach(user => {
      
      item += `
      <div class="col-lg-3 mt-4">
       <div class="card danger">
        <img class="card-img-top" src="${user.picture.large}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
              <p class="${user.dob.age > 30 ? "blue" : "white"}">Yas:${user.dob.age}</p>
              <p class="card-text">${user.location.state}</p>
            <a href="#" class="btn btn-primary">About</a>
         </div>
        </div>
      </div>
    </div>
      `
    });
    document.getElementById("box").innerHTML = item
  })

}
GetAllProduct();