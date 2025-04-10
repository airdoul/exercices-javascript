
for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
      ligne += (i + j) % 2 === 0 ? "⬛" : "⬜";
    }
    console.log(ligne);
  }