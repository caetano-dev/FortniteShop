const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/shop?lang=pt-BR");
http.setRequestHeader("Authorization", "YOUR API KEY GOES HERE");
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
  let div1 = document.createElement("div");
  div1.setAttribute("class", "row");
  document.getElementsByClassName("container")[0].appendChild(div1);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "row2");
  document.getElementsByClassName("container")[0].appendChild(div2);

  let div3 = document.createElement("div");
  div3.setAttribute("class", "row3");
  document.getElementsByClassName("container")[0].appendChild(div3);
  /*===================================================================*/

  /*Get all daily*/
  for (let i = 0; i < dailyimage.length; i++) {
    var div = document.createElement("div"); /*IMPORTANT DIV **DO NOT DELETE**/
    const img = document.createElement("img");
    const p = document.createElement("p");
    const vbuck = document.createElement("img");
    const price = document.createElement("p");

    p.setAttribute("class", "column");
    if (dailylist[i].name.length > 23) {
      var name = dailylist[i].name.slice(0, 23);
      var name = name + "...";
      p.textContent = name;
    } else {
      p.textContent = dailylist[i].name;
    }

    price.setAttribute("class", "price");
    price.textContent = dailylist[i].price;
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    img.setAttribute("src", dailyimage[i]);
    img.setAttribute("class", "img");
    img.setAttribute("alt", `img${i}`);
    document.getElementsByClassName("row")[0].appendChild(p);
    document.getElementsByClassName("column")[i].appendChild(img);
    document.getElementsByClassName("column")[i].appendChild(vbuck);
    document.getElementsByClassName("column")[i].appendChild(price);
  }

  /*===================================================================*/
  /*Get all featured*/
  for (let i = 0; i < featuredimage.length; i++) {
    const img = document.createElement("img");
    const p = document.createElement("p");
    const vbuck = document.createElement("img");
    const price = document.createElement("p");

    div.setAttribute("class", "column1");
    price.setAttribute("class", "price");
    price.textContent = featuredlist[i].price;
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    p.setAttribute("class", "column1");
    if (featuredlist[i].name.length > 23) {
      var name = featuredlist[i].name.slice(0, 23);
      var name = name + "...";
      p.textContent = name;
    } else {
      p.textContent = featuredlist[i].name;
    }

    img.setAttribute("src", featuredimage[i]);
    img.setAttribute("class", "img");
    img.setAttribute("alt", `img${i}`);
    document.getElementsByClassName("row2")[0].appendChild(p);
    document.getElementsByClassName("column1")[i].appendChild(img);
    document.getElementsByClassName("column1")[i].appendChild(vbuck);
    document.getElementsByClassName("column1")[i].appendChild(price);
  }
  for (let i = 0; i < specialFeaturedimage.length; i++) {
    const img = document.createElement("img");
    const p = document.createElement("p");
    const vbuck = document.createElement("img");
    const price = document.createElement("p");

    div.setAttribute("class", "column2");
    price.setAttribute("class", "price");
    price.textContent = specialFeaturedlist[i].price;
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    p.setAttribute("class", "column2");
    if (specialFeaturedlist[i].name.length > 23) {
      var name = specialFeaturedlist[i].name.slice(0, 23);
      var name = name + "...";
      p.textContent = name;
    } else {
      p.textContent = specialFeaturedlist[i].name;
    }
    img.setAttribute("src", specialFeaturedimage[i]);
    img.setAttribute("class", "img");
    img.setAttribute("alt", `img${i}`);
    document.getElementsByClassName("row3")[0].appendChild(p);
    document.getElementsByClassName("column2")[i].appendChild(img);
    document.getElementsByClassName("column2")[i].appendChild(vbuck);
    document.getElementsByClassName("column2")[i].appendChild(price);
  }
};
