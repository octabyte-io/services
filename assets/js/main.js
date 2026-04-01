let navigationOpen = false;

window.onload = function () {
  const header = document.getElementById("header");
  const rightSideItem1 = document.getElementById("right-side-item-1");
  const rightSideItem2 = document.getElementById("right-side-item-2");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
      header.classList.add("bg-white", "shadow", "!py-4", "backdrop-blur");
      rightSideItem1.classList.add("!text-[#79808a]");
      rightSideItem2.classList.add("!bg-[#4e6bff]");
    } else {
      header.classList.remove("bg-white", "shadow", "!py-4", "backdrop-blur");
      rightSideItem1.classList.remove("!text-[#79808a]");
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
