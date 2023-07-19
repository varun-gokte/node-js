function deathStar(a, planet) {
  console.log(a);
  planet();
}

deathStar(1, () => {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
});
