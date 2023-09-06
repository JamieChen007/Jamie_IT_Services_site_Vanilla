const twitterFollowers = document.querySelector(".twitterFollowers");
const youtubeFollowers = document.querySelector(".youtubeFollowers");
const facebookFollowers = document.querySelector(".facebookFollowers");
const socialMedia = document.querySelector(".socialMedia");

let currNum;
let target;

const count = (currNum, target, el) => {
  let interval = setInterval(() => {
    currNum++;
    el.innerHTML = currNum;
    if (currNum === target) {
      clearInterval(interval);
    }
  }, 1);
};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 1],
};

let io = new IntersectionObserver(() => {
  count(10465, 12000, twitterFollowers);
  count(3254, 5000, youtubeFollowers);
  count(5423, 7500, facebookFollowers);
}, options);

io.observe(socialMedia);
