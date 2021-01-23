const chalk = require('chalk');
const readLineSync= require('readline-sync');

function numberConversion()
{
  console.log(chalk.yellowBright.bold("------NUMBER CONVERTER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] BINARY TO DECIMAL  \n\n[2] BINARY TO HEX\n\n\[3] BINARY TO OCTAL \n\n[4] DECIMAL TO HEX\n\n\[5] DECIMAL TO BINARY \n\n[6] DECIMAL TO OCTAL\n\n\[7] HEX TO BINARY \n\n[8] HEX TO DECIMAL\n\n\[9] HEX TO OCTAL \n\n[10] OCTAL TO BINARY\n\n\[11] OCTAL TO DECIMAL \n\n\[12] OCTAL TO HEX \n\n\[13] EXIT\n\n\n"));

  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5/6/7/8/9/10/11/12/13)\n")));

  while(option!==13)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----BINARY TO DECIMAL CONVERTER----\n\n"));
        const binary = readLineSync.question(chalk.yellowBright.bold("Enter the binary number?\n"));
        const ans = parseInt(binary, 2);
        console.log(chalk.red("The decimal value is: ",ans +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----BINARY TO HEX CONVERTER----\n\n"));
        const binary1 = readLineSync.question(chalk.yellowBright.bold("Enter the binary number?\n"));
        const ans1 = parseInt(binary1, 2).toString(16);
        console.log(chalk.red("The hex value is: ",ans1 +'\n\n'));
        break;
      case 3:
        console.log(chalk.redBright("\n----BINARY TO OCTAL CONVERTER----\n\n"));
        const binary2 = readLineSync.question(chalk.yellowBright.bold("Enter the binary number?\n"));
        const ans2 = parseInt(binary2, 2).toString(8);
        console.log(chalk.red("The octal value is: ",ans2 +'\n\n'));
        break;
      case 4:
         console.log(chalk.redBright("\n----DECIMAL TO HEX CONVERTER----\n\n"));
        const decimal = readLineSync.question(chalk.yellowBright.bold("Enter the decimal number?\n"));
        const ans3 = Number(decimal).toString(16);
        console.log(chalk.red("The hex value is: ",ans3 +'\n\n'));
        break;
      case 5:
        console.log(chalk.redBright("\n----DECIMAL TO BINARY CONVERTER----\n\n"));
        const decimal1 = readLineSync.question(chalk.yellowBright.bold("Enter the decimal number?\n"));
        const ans4 = Number(decimal1).toString(2);
        console.log(chalk.red("The binary value is: ",ans4 +'\n\n'));
        break;
      case 6:
        console.log(chalk.redBright("\n----DECIMAL TO OCTAL CONVERTER----\n\n"));
        const decimal2 = readLineSync.question(chalk.yellowBright.bold("Enter the decimal number?\n"));
        const ans5 = Number(decimal2).toString(8);
        console.log(chalk.red("The octal value is: ",ans5 +'\n\n'));
        break;
      case 7:
        console.log(chalk.redBright("\n----HEX TO BINARY CONVERTER----\n\n"));
        const hex1 = readLineSync.question(chalk.yellowBright.bold("Enter the hex number?\n"));
        const ans6 = (parseInt(hex1, 16).toString(2)).padStart(8, '0');
        console.log(chalk.red("The binary value is: ",ans6 +'\n\n'));
        break;
      case 8:
        console.log(chalk.redBright("\n----HEX TO DECIMAL CONVERTER----\n\n"));
        const hex2 = readLineSync.question(chalk.yellowBright.bold("Enter the hex number?\n"));
        const ans7 = (parseInt(hex2, 16).toString(10));
        console.log(chalk.red("The decimal value is: ",ans7 +'\n\n'));
        break;
      case 9:
        console.log(chalk.redBright("\n----HEX TO OCTAL CONVERTER----\n\n"));
        const hex3 = readLineSync.question(chalk.yellowBright.bold("Enter the hex number?\n"));
        const ans8 = (parseInt(hex3, 16).toString(8));
        console.log(chalk.red("The octal value is: ",ans8 +'\n\n'));
        break;
      case 10:
        console.log(chalk.redBright("\n----OCTAL TO BINARY CONVERTER----\n\n"));
        const octal1 = readLineSync.question(chalk.yellowBright.bold("Enter the octal number?\n"));
        const ans9 = (parseInt(octal1, 8).toString(2)).padStart(8, '0');
        console.log(chalk.red("The binary value is: ",ans9 +'\n\n'));
        break;
      case 11:
        console.log(chalk.redBright("\n----OCTAL TO DECIMAL CONVERTER----\n\n"));
        const octal2 = readLineSync.question(chalk.yellowBright.bold("Enter the octal number?\n"));
        const ans10 = (parseInt(octal2, 8).toString(10));
        console.log(chalk.red("The decimal value is: ",ans10 +'\n\n'));
        break;
      case 12:
        console.log(chalk.redBright("\n----OCTAL TO HEX CONVERTER----\n\n"));
        const octal3 = readLineSync.question(chalk.yellowBright.bold("Enter the octal number?\n"));
        const ans11 = (parseInt(octal3, 8).toString(16));
        console.log(chalk.red("The hex value is: ",ans11 +'\n\n'));
        break;
      case 13:
        option = 13;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=13)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5/6/7/8/9/10/11/12/13)\n")));
      }
      else if(choice===2)
      {
        option = 13;
      }
    }
  }
  
}

numberConversion();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));