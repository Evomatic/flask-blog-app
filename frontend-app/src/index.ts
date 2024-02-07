window.onload = () => {
  const formElement = document.getElementById("form") as HTMLFormElement;
  if (formElement) {
    formElement.addEventListener("submit", (_) => {
      const formData = new FormData(formElement);
      console.log(formData);
    });
  }
};
