const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/items/upcoming?lang=pt-BR");
http.setRequestHeader("Authorization", process.env.API_KEY);
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);

  let upcominglist = response.items;
  let upcomingimage = [];

  for (let i = 0; i < upcominglist.length; i++) {
    let image = upcominglist[i].images.full_background;
    upcomingimage.push(image);
  }

  const div = document.createElement("div");
  div.setAttribute("class", "row");
  document.getElementsByClassName("upcoming")[0].appendChild(div);

  for (let i = 0; i < upcomingimage.length; i++) {
    const div = document.createElement("div");
    let background = document.createElement("img");

    div.setAttribute("class", "column");
    background.setAttribute("class", "background");
    background.setAttribute("src", upcomingimage[i]);
    document.getElementsByClassName("row")[0].appendChild(div);
    document.getElementsByClassName("column")[i].appendChild(background);
  }
};
