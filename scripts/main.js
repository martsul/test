const questionArr = document.querySelectorAll(".content__block-questions");
const answerArr = document.querySelectorAll(".answer__block");
let iteration = 0;

let timeNow = () => {
  let Data = new Date();
  let hours =
    String(Data.getHours()).length === 1
      ? `${0}${Data.getHours()}`
      : Data.getHours();
  let minutes =
    String(Data.getMinutes()).length === 1
      ? `${0}${Data.getMinutes()}`
      : Data.getMinutes();

  return [hours, minutes];
};

function animation() {
  document.querySelector(".content__field").classList.add("write");
  setTimeout(() => {
    document.querySelector(".content__field").classList.remove("write");

    questionArr[iteration]
      .querySelectorAll(".content__block")
      .forEach((e, ind) => {
        setTimeout(() => {
          let time = timeNow();
          e.querySelector(".content-time").innerHTML = `${time[0]}:${time[1]}`;

          e.classList.add("content__block-on");
          // e.scrollIntoView();
        }, 800 * ++ind);
      });

    if (questionArr[iteration].querySelector(".content__btn")) {
      let radios = questionArr[iteration].querySelectorAll(".content__btn");
      radios.forEach((element) => {
        element.addEventListener("change", () => {
          let time = timeNow();
          answerArr[iteration].querySelector(
            ".content-time"
          ).innerHTML = `${time[0]}:${time[1]}`;

          answerArr[iteration].querySelector(".content__answer").innerHTML =
            element.getAttribute("value");

          answerArr[iteration].classList.add("content__block-on");
          // answerArr[iteration].scrollIntoView();
          iteration++;
          animation();
        });
      });
    } else if (questionArr[iteration].querySelector(".content__block-btn")) {
      let btn = questionArr[iteration]
        .querySelector(".content__block-btn")
        .addEventListener("click", () => {
          if (
            questionArr[iteration].querySelector(".content__block-input")
              .value === ""
          ) {
            answerArr[iteration].querySelector(".content__answer").innerHTML =
              "Ничего не выбрано";
          } else {
            answerArr[iteration].querySelector(".content__answer").innerHTML =
              questionArr[iteration].querySelector(
                ".content__block-input"
              ).value;
          }
          let time = timeNow();
          answerArr[iteration].querySelector(
            ".content-time"
          ).innerHTML = `${time[0]}:${time[1]}`;

          answerArr[iteration].classList.add("content__block-on");
          // answerArr[iteration].scrollIntoView();
          iteration++;
          animation();
        });
    }
  }, 800);
}

setTimeout(() => {
  animation();
}, 3100);

document.querySelector(".content__consultant").addEventListener("click", () => {
  document.querySelector(".content__aside").style = "display: inline-block";
});

document.querySelector(".aside__close").addEventListener("click", () => {
  document.querySelector(".content__aside").style = "display: none";
});

// Email

const ERROR_MESSAGE = "Some error!";
const SUCCESS_MESSAGE = "Successfuly send!";

const form = document.querySelector(".content__field");

form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  const formData = new FormData(form);

  let response = await fetch("php/mail.php", {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  if (response.ok) {
    let time = timeNow();
    answerArr[iteration].querySelector(
      ".content-time"
    ).innerHTML = `${time[0]}:${time[1]}`;

    answerArr[iteration].classList.add("content__block-on");
    // answerArr[iteration].scrollIntoView();
    console.log("Ok");

    setTimeout(() => {
      document.location.href = "https://ya.ru/";
    }, 5000);
  } else {
    console.log("error");
  }
}


// Scroll 
const scrollField = document.querySelector(".content__field");
let scrollPosition = 0;
let canScroll;

scrollField.addEventListener("wheel", event => {
  canScroll = scrollField.offsetHeight - 645;

  if ((scrollPosition > 0 || -event.deltaY > 0) && (scrollPosition < canScroll || -event.deltaY < 0)) {
    scrollPosition -= event.deltaY;
    scrollField.setAttribute("style", `top:${scrollPosition}px`)  
  }
})