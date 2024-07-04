# QR Code Generator

![](https://github.com/MeetInCode/QR_generator/blob/main/Untitled_%20Jul%204%2C%202024%208_31%20PM%20(2).gif)

This project is a Node.js application that prompts the user for a URL, generates a QR code image for the URL, and saves the URL to a text file. It utilizes the `inquirer` package for user input, the `qr-image` package for generating the QR code, and the native `fs` module for file system operations.

## Installation

To run this application, you need to have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Install the required npm packages by running:
   ```bash
   npm install inquirer qr-image
   ```

## Usage

1. In the terminal, navigate to the project directory.
2. Run the application with the following command:
   ```bash
   node index.js
   ```
3. You will be prompted to enter a URL.
4. After entering the URL, the application will:
   - Generate a QR code image for the URL and save it as `myimage.png`.
   - Save the entered URL to a text file named `urllist.txt`.

## Code Overview

### Dependencies
- `inquirer`: Used to prompt the user for input.
- `qr-image`: Used to generate a QR code image from the user-entered URL.
- `fs`: Native Node.js module used to perform file system operations.

### Code Breakdown

1. **Prompting the User:**
   ```javascript
   inquirer.prompt([
     {
       message: "type in your url",
       name: "URL"
     }
   ])
   .then((answers) => {
     const URL = answers.URL;
   ```
   - The `inquirer` package prompts the user to enter a URL.

2. **Generating the QR Code:**
   ```javascript
     var qr_svg = qr.image(URL);
     qr_svg.pipe(fs.createWriteStream('myimage.png'));
     console.log("QR image created successfully");
   ```
   - The `qr-image` package generates a QR code image from the entered URL and saves it as `myimage.png`.

3. **Saving the URL to a Text File:**
   ```javascript
     fs.writeFile('urllist.txt', URL, (err) => {
       if (err) throw err;
       console.log('The urllist file has been saved!');
     });
   ```
   - The `fs` module writes the entered URL to `urllist.txt`.

4. **Error Handling:**
   ```javascript
   .catch((error) => {
     if (error.isTtyError) {
       // Prompt couldn't be rendered in the current environment
     } else {
       // Something else went wrong
     }
   });
   ```
   - Handles any errors that occur during the process.
