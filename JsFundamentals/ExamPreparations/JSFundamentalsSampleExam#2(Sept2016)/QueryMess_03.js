/**
 * Created by Mihail on 5/27/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    for (let line of input) {
        let map = new Map();

        line = line.replace(/(\+|%20)+/g, ' ');

        let pattern = '([^&?]+?)=([^&?]+?)(?=&|$)';
        let regex = new RegExp(pattern, 'g');

        let match = regex.exec(line);

        while (match) {
            let key = match[1].trim();
            let value = match[2].trim();

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(value);

            match = regex.exec(line);
        }

        let result = '';
        for (let [key, value] of map) {
            result += `${key}=[${value.join(', ')}]`;
        }
        console.log(result);
    }
}

// solve(['login=student&password=student']);

solve(['foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);
