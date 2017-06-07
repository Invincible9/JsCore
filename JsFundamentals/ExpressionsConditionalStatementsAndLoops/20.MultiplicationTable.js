/**
 * Created by Mihail on 5/25/2017.
 */

function multiplicationTable(args) {
    let n = Number(args);

    let html = '<table border="1">\n';

    html+='<tr>\n';
    html+='<th>x</th>';
    for(let i = 1; i <= n; i++){
        html+= `\n<th>${i}</th>`;
    }
    html += '\n</tr>';


    for(let row = 1; row <= n; row++){
        html += '\n<tr>';
        for(let col = 1; col <= n; col++){
            if(col == 1) {
                html += `\n<th>${row}</th>`;
            }
            html += `\n<td>${row * col}</td>`;
        }
        html += '\n</tr>';
    }
    html+='\n</table>';

    return html;
}