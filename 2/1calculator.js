process.stdin.on('data', (chunk)=>{
    /*
    process.stdin property is an inbuilt application programming interface of
    the process module which listens for the user input.
    The stdin property of the process object is a Readable Stream.
    It uses on() function to listen for the event.
    */
    const userInput = chunk.toString().trim();

    if(userInput == 'quit'){
        process.exit(0);
    }

    try{
        const val = eval(userInput);    // eval executes any input as js code
        console.log(val)
    } catch(e){
        console.log(`${e}, I dont know how to do this`);
    }
})

process.stdout.write('enter your simple eqn: ');    // can write on the same line (sends the data frm user)

