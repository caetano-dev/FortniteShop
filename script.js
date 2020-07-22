const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/shop?lang=pt-BR");
http.setRequestHeader("Authorization", "YOUR API KEY GOES HERE");
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);

  let dailyname = []; /*daily items name*/
  let dailyimage = []; /*daily items image*/
  let dailyprice = []; /*daily items price*/
  let featuredname = []; /*featured items name*/
  let featuredimage = []; /*featured items image*/
  let featuredprice = []; /*featured items price*/
  let specialFeaturedname = []; /*special items name*/
  let specialFeaturedimage = []; /*special items image*/
  let specialFeaturedprice = []; /*special items price*/

  for (let i = 0; i < response.daily.length; i++) {
    let image = response.daily[i].image;
    let price = response.daily[i].price;
    var name = response.daily[i].name;
    if (name.length > 23) {
      var name = name.slice(0, 23);
      var name = name + "...";
    }
    dailyimage.push(image);
    dailyprice.push(price);
    dailyname.push(name);
  }
  for (let i = 0; i < response.featured.length; i++) {
    let image = response.featured[i].image;
    let price = response.featured[i].price;
    var name = response.featured[i].name;
    if (name.length > 23) {
      var name = name.slice(0, 23);
      var name = name + "...";
    }
    featuredimage.push(image);
    featuredprice.push(price);
    featuredname.push(name);
  }
  for (let i = 0; i < response.specialFeatured.length; i++) {
    let image = response.specialFeatured[i].image;
    let price = response.specialFeatured[i].price;
    var name = response.specialFeatured[i].name;
    if (name.length > 23) {
      var name = name.slice(0, 23);
      var name = name + "...";
    }
    specialFeaturedimage.push(image);
    specialFeaturedprice.push(price);
    specialFeaturedname.push(name);
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
    p.textContent = dailyname[i];
    price.setAttribute("class", "price");
    price.textContent = dailyprice[i];
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
    price.textContent = featuredprice[i];
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    p.setAttribute("class", "column1");
    p.textContent = featuredname[i];
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
    price.textContent = specialFeaturedprice[i];
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    p.setAttribute("class", "column2");
    p.textContent = specialFeaturedname[i];
    img.setAttribute("src", specialFeaturedimage[i]);
    img.setAttribute("class", "img");
    img.setAttribute("alt", `img${i}`);
    document.getElementsByClassName("row3")[0].appendChild(p);
    document.getElementsByClassName("column2")[i].appendChild(img);
    document.getElementsByClassName("column2")[i].appendChild(vbuck);
    document.getElementsByClassName("column2")[i].appendChild(price);
  }
};
