let counter = 0;

const loadingInterval = setInterval(() => {
  console.log("Loading...");
  counter++;

  if (counter === 5) {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }
}, 1000);