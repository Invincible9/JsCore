/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let text = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
`;
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        text += `  <question>\n    ${question} \n  </question>\n`;
        text += `  <answer>\n    ${answer} \n  </answer>\n`;
    }

    text += '</quiz>';

    console.log(text)
}

// solve(["Who was the forty-second president of the U.S.A.?",
//     "William Jefferson Clinton"]
// );

solve(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);