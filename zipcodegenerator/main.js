// listen for submitton 
document.querySelector('#zipForm').addEventListener('submit',getLocationInfo);

function getLocationInfo(e){
    // get zip value from input box
    const zip = document.querySelector('.zip').value;

    // Make request and remember no semicolon in fetchone line yaad rakh...;) (;
    fetch(`http://api.zippopotam.us/us/${zip}`)
    .then(response=>{
        if(response.status != 200){
            showIcon('remove');
            document.querySelector('#output').innerHTML=` <article class="message is-danger"><div class="message-body">Invalid ZipCode,please try valid zip-code</div></article>`;
        throw Error(response.statusText);
    }
        else{
            showIcon('check');
            return response.json();
        }
    })
    .then(data=>{
        // console.log(data);
        let output = "";
        data.places.forEach(place => {
          output += `
                <article class="message is-primary">
                  <div class="message-header">
                    <p>Location Info</p>
                    <button class="delete"></button>
                  </div>
                  <div class="message-body">
                    <ul>
                      <li><strong>City: </strong>${place["place name"]}</li>
                      <li><strong>State: </strong>${place["state"]}</li>
                      <li><strong>Longitude: </strong>${place["longitude"]}</li>
                      <li><strong>Latitude: </strong>${place["latitude"]}</li>
                    </ul>
                  </div>
                </article>
              `;
        });
  
        // Insert into output div
        document.querySelector("#output").innerHTML = output;
      })
    .catch(err=>console.log(err));

    e.preventDefault();
}

function showIcon(icon){
    // cleear icons
    document.querySelector('.icon-remove').getElementsByClassName.display='none';

    document.querySelector('.icon-check').getElementsByClassName.display='none';

    // show correct icon
    document.querySelector(`.icon-${icon}`).style.display='inline-flex';
}
// Delete location box
function deleteLocation(e) {
    if (e.target.className == "delete") {
      document.querySelector(".message").remove();
      document.querySelector(".zip").value = "";
      document.querySelector(".icon-check").remove();
    }
  }
  