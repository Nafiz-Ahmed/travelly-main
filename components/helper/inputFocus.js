const activeFocus = (self, full) => {
  const inputs = self;
  const main = document.querySelector(full);

  inputs.forEach((item) => {
    item.addEventListener("focus", (e) => {
      inputs.forEach((item) => {
        item.classList.remove("active");
      });

      e.target.classList.add("active");
      main.classList.add("activeted");
    });

    // auto close out click
    document.addEventListener("click", (e) => {
      if (item.classList.contains("active")) {
        if (e.target.closest(".active") || e.target.closest(".activeted")) {
          return;
        } else {
          item.classList.remove("active");
          main.classList.remove("activeted");

          inputs.forEach((item) => {
            item.classList.remove("spec");
            item.classList.remove("specb");
          });
        }
      }
    });
  });
};

export default activeFocus;
