/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];


function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
      greatMagicians.push(`The Great ${magician}`);
    }

    return greatMagicians;
  }

  const greatMagicians = make_great([...magicianNames]); 

  show_magicians(magicianNames);

  show_magicians(greatMagicians);


  



