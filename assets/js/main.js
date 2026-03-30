let navigationOpen = false;

window.onload = function () {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
      header.classList.add(
        "bg-white",
        "shadow",
        "px-4",
        "py-4",
        "backdrop-blur",
      );
    } else {
      header.classList.remove(
        "bg-white",
        "shadow",
        "px-4",
        "py-4",
        "backdrop-blur",
      );
    }
  });
};

const toggleMenu = () => {
  navigationOpen = !navigationOpen;

  const menu = document.getElementById("header-menu");

  console.log(menu);

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
