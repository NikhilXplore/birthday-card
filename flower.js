
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
}


function animateTyping(id, delayOffset = 0) {
  const element = document.getElementById(id);
  const text = element.textContent;
  element.textContent = ''; // Clear original text

  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${(index * 0.05) + delayOffset}s`;
    element.appendChild(span);
  });

  return text.length * 0.05; // return the total time taken to animate this
}

// Animate all one after another
let delay = 0;
delay += animateTyping("h1", delay);
delay += animateTyping("p1", delay + 0.5); // small gap between lines
delay += animateTyping("p2", delay + 0.5);
delay += animateTyping("p3", delay + 0.5);
animateTyping("h2", delay + 0.5);

