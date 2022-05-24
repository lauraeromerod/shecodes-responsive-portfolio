document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);
});

class TypeWriter {
  constructor(words, element, wait = 2000) {
    this.words = words; // Array of words
    this.wait = wait; // Initial set timeout
    this.text = "";
    this.index = 0; // index of array
    this.isDeleting = false;
    this.element = element;
    this.type();
  }

  type() {
    const currentIndex = this.index % this.words.length;
    const word = this.words[currentIndex]; // get current word based on index

    let typeSpeed = 200;

    if (this.isDeleting) {
      this.text = word.substring(0, this.text.length - 1);
      typeSpeed /= 2;
    } else {
      this.text = word.substring(0, this.text.length + 1);
    }

    if (!this.isDeleting && this.text === word) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.index += 1;
      // typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);

    this.element.innerText = this.text;
  }
}

const passions = document.querySelector(".about-passions");

if (passions) {
  const passionsList = new TypeWriter(
    ["tech", "design", "calligraphy", "desserts", "coding"],
    passions
  );
}

const colors = [
  { startColor: "#ec597f", endColor: "#f48554" },
  { startColor: "#ec787f", endColor: "#8980ed" },
  { startColor: "#abe9cd", endColor: "#3eadcf" },
  { startColor: "#ffe190", endColor: "#fa9e8c" },
];
const aboutImage = document.querySelector(".about-image");

const changeBackground = (section) => {
  const backgroundColor = colors[Math.floor(Math.random() * colors.length * 1)];
  const startColor = backgroundColor.startColor;
  const endColor = backgroundColor.endColor;
  section.style.backgroundImage = `linear-gradient(315deg, ${startColor} 0%, ${endColor} 74%)`;
};

window.setInterval(() => changeBackground(aboutImage), 2000);
