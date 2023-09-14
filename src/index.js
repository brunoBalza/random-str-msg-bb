const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
  ];
  

//   Esta extrayendo un elemento del array, y lo tomamos con math de forma aleatoria sin que se pase de la cantidad, y con el log lo que hacemos es imprimirlo en consola
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  

//   Exportamos el modulo para poder usarlo, o sea, lo hacemos como paquete
  module.exports = {
    funnyCommit
  };