/**
 * Created by Mihail on 6/5/2017.
 */

/**
 *
 * @param input {[string]}
 */

function JSONToHTMLTable (json) {

    let arr = JSON.parse(json);

    let html = '<table>\n';

    html += '  <tr>';
    for (let key of Object.keys(arr[0])) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (let obj of arr) {
        html += '  <tr>';
        for (let key in obj) {
            let propValue = String(obj[key]);
            html += `<td>${escapeHtml(propValue)}</td>`
        }
        html += '</tr>\n'
    }

    function escapeHtml(text) {
        let keyValues = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return text.replace(/[&<>"']/g, ch => keyValues[ch]);
    }

    html += '</table>';

    console.log(html);
}

JSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');

