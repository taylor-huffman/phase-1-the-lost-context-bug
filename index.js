const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};


// // Solution 1a
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }, this);
// };

// printCard.call(messageConfig);



// // Solution 1b
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);
//   const contextBoundForEachExpr = function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }.bind(this);

//   this.signatories.forEach(contextBoundForEachExpr);
// };

// printCard.call(messageConfig);


// // Solution 2
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContext = this;

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);


// // Solution 3
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);
//   // Wow! Elegant! And notice the arrow function's `this` is the same `this`
//   // that printCard has; specifically, the `thisArg` that was passed to it
//   this.signatories.forEach((signatory) =>
//     console.log(`${this.closing[signatory]}, ${signatory}`)
//   );
// };

// printCard.call(messageConfig);
