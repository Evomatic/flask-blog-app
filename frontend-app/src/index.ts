function helloWord(): void {
  const element = document.getElementById("hello-world");
  if (element) {
    element.textContent = "Hello, World!";
  }
}

helloWord();
