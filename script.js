const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/shop?lang=pt-BR");
http.setRequestHeader("Authorization", "YOUR API KEY GOES HERE");
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);

  let listname = []; /*daily items name*/
  let listimage = []; /*daily items image*/
  let listprice = []; /*daily items price*/
  let featuredname = []; /*featured items name*/
  let featuredimage = []; /*featured items image*/
  let featuredprice = []; /*featured items price*/

  for (let i = 0; i < response.daily.length; i++) {
    let image = response.daily[i].image;
    let price = response.daily[i].price;
    var name = response.daily[i].name;
    if (name.length > 23) {
      var name = name.slice(0, 23);
      var name = name + "...";
    }
    listimage.push(image);
    listprice.push(price);
    listname.push(name);
  }
  // 23
  for (let i = 0; i < response.featured.length; i++) {
    let name = response.featured[i].name;
    let image = response.featured[i].image;
    let price = response.featured[i].price;
    featuredname.push(name);
    featuredimage.push(image);
    featuredprice.push(price);
  }
  /*===================================================================*/
  /*variables for both divs*/
  let div1 = document.createElement("div");
  div1.setAttribute("class", "row");
  document.getElementsByClassName("container")[0].appendChild(div1);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "row2");
  document.getElementsByClassName("container")[0].appendChild(div2);
  /*===================================================================*/
  /*Get all daily*/
  for (let i = 0; i < listimage.length; i++) {
    var div = document.createElement("div"); /*IMPORTANT DIV **DO NOT DELETE**/
    const img = document.createElement("img");
    const p = document.createElement("p");
    const vbuck = document.createElement("img");
    const price = document.createElement("p");

    p.setAttribute("class", "column");
    p.textContent = listname[i];
    price.setAttribute("class", "price");
    price.textContent = listprice[i];
    vbuck.setAttribute("class", "vbuck");
    vbuck.setAttribute("alt", "vbuck");
    vbuck.setAttribute(
      "src",
      "https://image.fnbr.co/price/icon_vbucks_50x.png"
    );
    img.setAttribute("src", listimage[i]);
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
};
