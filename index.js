import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
//1. Use the inquirer npm package to get user input.

    

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"type in your url",
        name:"URL" /*give name to ansswer*/
    } /* becuase it is a js obk=ject it should be in curly braces*/
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const URL = answers.URL
     
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('myimage.png'));
    console.log("QR image created successfully")


    fs.writeFile('urllist.txt', URL , (err) => {
      if (err) throw err;
      console.log('The urllist file has been saved!');
    }); 
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



//2. Use the qr-image npm package to turn the user entered URL into a QR code image.




//3. Create a txt file to save the user input using the native fs node module.

