const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/shop?lang=pt-BR");
http.setRequestHeader("Authorization", "317d3abf-1a3d48f7-97c5748f-16174ba3");
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);

  let dailylist = response.daily;
  let featuredlist = response.featured;
  let specialFeaturedlist = response.specialFeatured;

  let dailyimage = []; /*daily items image*/
  let featuredimage = []; /*featured items image*/
  let specialFeaturedimage = []; /*special items image*/

  for (let i = 0; i < dailylist.length; i++) {
    let image = response.daily[i].image;
    dailyimage.push(image);
  }

  for (let i = 0; i < featuredlist.length; i++) {
    let image = featuredlist[i].image;
    featuredimage.push(image);
  }

  for (let i = 0; i < specialFeaturedlist.length; i++) {
    let image = specialFeaturedlist[i].image;
    specialFeaturedimage.push(image);
  }

  /*===================================================================*/
  /*variables for 3 divs*/
  const div1 = document.createElement("div");
  div1.setAttribute("class", "row");
  document.getElementsByClassName("container")[0].appendChild(div1);
  /*===================================================================*/

  /*Get all daily*/
  for (let i = 0; i < dailyimage.length; i++) {
    const div = document.createElement("div");
    const background = document.createElement("img");

    div.setAttribute("class", "column");
    background.setAttribute("class", "background");
    background.setAttribute("src", dailylist[i].full_background)
    document.getElementsByClassName("row")[0].appendChild(div);
    document.getElementsByClassName("column")[i].appendChild(background);
  }

  /*===================================================================*/
  /*Get all featured*/
  for (let i = 0; i < featuredimage.length; i++) {
    const div = document.createElement("div")
    const background = document.createElement("img");

    div.setAttribute("class", "column");
    background.setAttribute("class", "background");
    background.setAttribute("src", featuredlist[i].full_background)
    document.getElementsByClassName("row")[0].appendChild(div);
    document.getElementsByClassName("column")[i].appendChild(background);
  }
  for (let i = 0; i < specialFeaturedimage.length; i++) {
    const div = document.createElement("div")
    const background = document.createElement("img");

    div.setAttribute("class", "column");
    background.setAttribute("class", "background");
    background.setAttribute("src", specialFeaturedlist[i].full_background)
    document.getElementsByClassName("row")[0].appendChild(div);
    document.getElementsByClassName("column")[i].appendChild(background);
  }
}
