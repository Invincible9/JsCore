/**
 * Created by Mihail on 9/20/2016.
 */

function colorfulNumbers(number) {
    let html = "<ul>\n";
        for(let i = 1; i <= number; i++){
            let color = "green";
            if(i % 2 == 0)
                color = "blue";

            html+= `  <li><span style="color:${color}">${i}</span></li>\n`;
        }
        html += "</ul>\n";
    return html;
}

console.log(colorfulNumbers(['10']));


