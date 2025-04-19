let row = document.querySelector(".row");
let cards = document.querySelector(".cards");
let card = ["../images/Card (1).jpg", "../images/Card (2).jpg", "../images/Card (3).jpg", "../images/Card (4).jpg", "../images/Card (5).jpg", "../images/Card (6).jpg", "../images/Card (7).jpg", "../images/Card (8).jpg", "../images/Card (9).jpg", "../images/Card (10).jpg", "../images/Card (11).jpg", "../images/Card (12).jpg", "../images/Card (13).jpg", "../images/Card (14).jpg", "../images/Card (15).jpg", "../images/Card (16).jpg", "../images/Card (17).jpg", "../images/Card (18).jpg", "../images/Card (19).jpg", "../images/Card (20).jpg", "../images/Card (21).jpg"]


for (let i = 1; i <= 21; i++) {
    const div = document.createElement('div');
    div.classList.add('col-sm-2 my-1');
    const img = document.createElement('img');
    img.src = card[i];
    img.classList.add('shadow cards');
    div.appendChild(img);
    row.appendChild(div);
  }