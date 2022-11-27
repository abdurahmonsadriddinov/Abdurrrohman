const database = [
  {
    img: "training-image-01.jpg",
    title: "First training class",
    description:
      "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.",
  },
  {
    img: "training-image-02.jpg",
    title: "Second training class",
    description:
      "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
  },
  {
    img: "training-image-03.jpg",
    title: "Thirt training class",
    description:
      "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.",
  },
  {
    img: "training-image-04.jpg",
    title: "Fourter training class",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.",
  }
];

function loopNavs() {
  let navsText = "";

  for (let i = 0; i < database.length; i++) {
    navsText += `<li onclick = 'showDate(${i})'>${database[i].title}</li>`;
  }
  document.querySelector(".navs-ul").innerHTML = navsText;
}

// document.querySelector(".navs-ul").innerHTML = navsText;
loopNavs();

function showDate(index) {
  let data = database[index];

  document.querySelector(".image").src = `./images/${data.img}`;
  document.querySelector(".title").innerHTML = data.title;
  document.querySelector(".description").innerHTML = data.description;
}
