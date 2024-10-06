const text1 = "Exploring Earth’s Ocean and Atmosphere for a Sustainable Future";
const text2 = "Understanding the dynamic relationship between the atmosphere, ";
const text3 = "ocean, and ecosystems for better climate and environment";
const textContainer = document.getElementById("text-appear"); // Target the correct ID
let index1 = 0;
let index2 = 0;
let index3 = 0;

function revealLetters() {
  textContainer.style.width = "100%";
  textContainer.style.opacity = "1";
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  const interval1 = setInterval(() => {
    textContainer.innerHTML += text1[index1];
    index1++;
    if (index1 === text1.length) {
      clearInterval(interval1);
      textContainer.innerHTML += "<br>";
      setTimeout(() => {
        const interval2 = setInterval(() => {
          textContainer.innerHTML += text2[index2];
          index2++;
          if (index2 === text2.length) {
            clearInterval(interval2);
            textContainer.innerHTML += "<br>";
            setTimeout(() => {
              const interval3 = setInterval(() => {
                textContainer.innerHTML += text3[index3];
                index3++;
                if (index3 === text3.length) {
                  clearInterval(interval3);
                }
              }, 70);
            }, 370);
          }
        }, 70);
      }, 370);
    }
  }, 70);
}

revealLetters();
