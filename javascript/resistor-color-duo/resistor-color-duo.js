//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
 export  const decodedValue = (colors) => {
 
  if(colors.length > 2){
    colors.splice(2)
    const [firstColor, secondColor] = colors;
    const indexOfFirstColor = COLORS.indexOf(firstColor);
    const indexOfSecondColor = COLORS.indexOf(secondColor)
    const value = `${indexOfFirstColor}${indexOfSecondColor}`
    return parseInt(value)
  }

    const [firstColor, secondColor] = colors;
    const indexOfFirstColor = COLORS.indexOf(firstColor);
    const indexOfSecondColor = COLORS.indexOf(secondColor)
    const value = `${indexOfFirstColor}${indexOfSecondColor}`
    return parseInt(value)
  
  
}
  
// };

// decodedValue(["brown","black"]);
// refractored code

export  const decodedValue = ([firstColor,secondColor]) =>{
  const indexOfFirstColor = COLORS.indexOf(firstColor);
 const indexOfSecondColor=  COLORS.indexOf(secondColor);
  return indexOfFirstColor *10 + indexOfSecondColor

 }