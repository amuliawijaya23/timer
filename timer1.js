const args = process.argv.slice(2).sort((a, b) => a - b);

const timer = (times) => {
  for (let time of times) {
    setTimeout(() => {process.stdout.write('\x07');}, time * 1000)
  }
};

timer(args);