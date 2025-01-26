import { createInterface } from 'readline';   // required readLine module
import { stdin as input, stdout as output} from 'process';

const rl = createInterface({ input, output });  // allows you to interact with the user through the command line (like taking input and displaying output)

rl.question('Enter your simple eqn: ', (input)=>{   //used to prompt the user for input and then execute a callback function once the user provides their response.
    if(input == 'quit'){
        rl.close();
    }

    try{
        const val = eval(input);
        console.log(val);
    } catch(e){
        console.log(e);
    }

    //question();

});