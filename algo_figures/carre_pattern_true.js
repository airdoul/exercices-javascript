const number = 20
let result = "" 

if (number%2==0){
    for (let i = 0; i < number; i++) {
        let ligne = ""
        for (let j=0; j < number; j++) {
            if (i === 0 || i === number - 1 || j === 0 || j === number - 1) {
                ligne += "⬛"; 
            }else if(i === 1 || i === number || j === 1 || j === number - 2 || i === number-2) {
                    ligne += "⬜"; 
        }else {
          ligne += "⬛"
        }
        }
        result += ligne + "\n";
      }

}else {
    for (let i = 0; i < number; i++) {
        let ligne = "";
        for (let j = 0; j < number; j++) {
          if (i === 0  ||i === number - 1 || j === 0 || j === number- 1 || i === j || i+j ===number -1) {
            ligne += "⬛"; 
          } else {
            ligne += "⬜";
          }
          }
        result += ligne + "\n";
      }
}
  console.log(result);