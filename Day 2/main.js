const gravityAssistProgram = [
    1,
    0,
    0,
    3,
    1,
    1,
    2,
    3,
    1,
    3,
    4,
    3,
    1,
    5,
    0,
    3,
    2,
    1,
    10,
    19,
    1,
    6,
    19,
    23,
    1,
    10,
    23,
    27,
    2,
    27,
    13,
    31,
    1,
    31,
    6,
    35,
    2,
    6,
    35,
    39,
    1,
    39,
    5,
    43,
    1,
    6,
    43,
    47,
    2,
    6,
    47,
    51,
    1,
    51,
    5,
    55,
    2,
    55,
    9,
    59,
    1,
    6,
    59,
    63,
    1,
    9,
    63,
    67,
    1,
    67,
    10,
    71,
    2,
    9,
    71,
    75,
    1,
    6,
    75,
    79,
    1,
    5,
    79,
    83,
    2,
    83,
    10,
    87,
    1,
    87,
    5,
    91,
    1,
    91,
    9,
    95,
    1,
    6,
    95,
    99,
    2,
    99,
    10,
    103,
    1,
    103,
    5,
    107,
    2,
    107,
    6,
    111,
    1,
    111,
    5,
    115,
    1,
    9,
    115,
    119,
    2,
    119,
    10,
    123,
    1,
    6,
    123,
    127,
    2,
    13,
    127,
    131,
    1,
    131,
    6,
    135,
    1,
    135,
    10,
    139,
    1,
    13,
    139,
    143,
    1,
    143,
    13,
    147,
    1,
    5,
    147,
    151,
    1,
    151,
    2,
    155,
    1,
    155,
    5,
    0,
    99,
    2,
    0,
    14,
    0
]

function runProgram(program) {
    let ranSuccesfully = false;
    runOpcode(0)
    return ranSuccesfully;

    function runOpcode(i) {
        let index1 = program[i + 1];
        let index2 = program[i + 2];
        let index3 = program[i + 3];
        switch(program[i]) {
            case 1:
                program[index3] = program[index1] + program[index2];
                break;
            case 2:
                program[index3] = program[index1] * program[index2];
                break;
            case 99:
                ranSuccesfully = true;
                return;
            default:
                console.log("Unknown Error");
                ranSuccessfully = false;
                return;
        }
        runOpcode(i + 4); 
    }
}

function programResult(program) {
    if (runProgram(program)) {
        return program[0];
    } else {
        console.log("Program Couldn't Finish");
        return null;
    }
}

/// Challenge 1
let program1 = Array.from(gravityAssistProgram);

program1[1] = 12;
program1[2] = 2;

let result1 = programResult(program1);
if (result1 !== null) console.log(result1);

/// Challenge 2
let noun;
let verb;

// Try all combinations
let finished = false;
for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
        let program = Array.from(gravityAssistProgram);
        program[1] = i;
        program[2] = j;

        if (programResult(program) === 19690720) {
            noun = i;
            verb = j;
            finished = true;
            break;
        }
    }
    if (finished) break;
}

// Output result
if (noun && verb) console.log(100 * noun + verb);
else console.log("Couldn't find a solution");