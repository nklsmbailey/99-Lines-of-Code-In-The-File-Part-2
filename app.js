const friends = ["Basil", "Judy", "Sam", "Kathy", "Ed"];

let Btn = document.createElement("Button");
Btn.textContent = "Sing";
document.body.appendChild(Btn);

Btn.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i].toUpperCase() + ":")
    let newDiv = document.createElement("div");
    newDiv.className = "friend";
    let newh3 = document.createElement("h3");
    newh3.textContent = friends[i];
    newDiv.appendChild(newh3);
    document.body.appendChild(newDiv);
  }

  let buttonTwo = document.createElement("Button");
  buttonTwo.textContent = "Sing";
  document.body.appendChild(buttonTwo);

  buttonTwo.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = "friend";

      document.body.appendChild(newDiv);
      for (var j = 99; j >= 1; j--) {
        var log = document.createElement("p");
        var k = j - 1;

        if (j > 2) {
          log.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file";
        } else if (j === 2) {
          log.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " line of code in the file";
        } else {
          log.textContent =
            j +
            " line of code in the file, " +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, no more lines of code in the file";
        }

        newDiv.appendChild(log);
      }
    }
  });
});
