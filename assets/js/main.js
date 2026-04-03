let navigationOpen = false;

window.onload = function () {
  const header = document.getElementById("header");
  const rightSideItemLang = document.getElementsByClassName(
    "right-side-item-lang",
  );
  const rightSideItem2 = document.getElementById("right-side-item-2");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
      header.classList.add("bg-white", "shadow", "!py-4", "backdrop-blur");
      Array.from(rightSideItemLang).forEach((item) =>
        item.classList.add("!text-[#79808a]"),
      );
      rightSideItem2.classList.add("!bg-[#4e6bff]");
    } else {
      header.classList.remove("bg-white", "shadow", "!py-4", "backdrop-blur");
      Array.from(rightSideItemLang).forEach((item) =>
        item.classList.remove("!text-[#79808a]"),
      );
      rightSideItem2.classList.remove("!bg-[#4e6bff]");
    }
  });
};

const toggleMenu = () => {
  navigationOpen = !navigationOpen;

  const menu = document.getElementById("header-menu");

  if (navigationOpen) {
    menu.classList.add(
      "!visible",
      "bg-white",
      "!h-auto",
      "max-h-[400px]",
      "overflow-y-scroll",
      "rounded-md",
      "mt-4",
      "p-7",
    );
  } else {
    menu.classList.remove(
      "!visible",
      "bg-white",
      "!h-auto",
      "max-h-[400px]",
      "overflow-y-scroll",
      "rounded-md",
      "mt-4",
      "p-7",
    );
  }
};

function toggleAccordion(id) {
  const el = document.getElementById("accordion-" + id);
  el.classList.toggle("hidden");
}

async function contactUs() {
  const email = document.getElementById("email-address");

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfLJuSTK0GEncZ3mZOHjyQzFCHfefZ6ht6JEC89ZpwSZUJRXw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.659065426": email.value,
        }),
      },
    );

    email.value = "";
    alert("Thank you for sharing your email. We will get back to you soon.");
  } catch (error) {
    console.log(error);
    alert("There was an error submitting the form.");
  }
}

async function getInTouch() {
  const sendButton = document.getElementById("get-in-touch-send-button");
  const name = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let buttonText = sendButton.textContent;
  sendButton.textContent = "Sending...";

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfLJuSTK0GEncZ3mZOHjyQzFCHfefZ6ht6JEC89ZpwSZUJRXw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.1813397379": name.value,
          "entry.659065426": email.value,
          "entry.1320067814": phone.value,
          "entry.1981085734": subject.value,
          "entry.591575718": message.value,
        }),
      },
    );

    name.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    message.value = "";
    sendButton.textContent = buttonText;
    alert("Thank you for contact. We will get back to you soon.");
  } catch (error) {
    console.log(error);
    sendButton.textContent = buttonText;
    alert("There was an error submitting the form.");
  }
}
