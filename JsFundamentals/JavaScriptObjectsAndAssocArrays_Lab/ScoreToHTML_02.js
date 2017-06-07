/**
 * Created by Mihail on 6/5/2017.
 */

/**
 *
 * @param input {[string]}
 */

function scoreToHtml(input) {
    let arr = JSON.parse(input);

    let str = '<table>\n';

    str += `  <tr><th>name</th><th>score</th></tr>\n`;

    for (let line of arr) {
        str += `  <tr><td>${escapeHtml(line['name'].toString())}</td><td>${escapeHtml(line['score'].toString())}</td></tr>\n`;
    }

    str += '</table>';
    console.log(str);

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

}

scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
// scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
// scoreToHtml('[{"name":"Pencho Penchev","score":0},{"name":"<script>alert(\"Wrong!\")</script>","score":1}]');