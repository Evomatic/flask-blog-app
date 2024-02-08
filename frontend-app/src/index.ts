window.onload = () => {
  // Submit form data
  const formElement = document.getElementById("form") as HTMLFormElement;
  if (formElement) {
    formElement.addEventListener("submit", async (event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(formElement);

      try {
        const res = await fetch("http://localhost:5001/auth/register", {
          method: "POST",
          body: formData,
        });
        const resData = await res.json();

        console.log(resData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    });
  }
};
