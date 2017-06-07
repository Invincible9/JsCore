/**
 * Created by Mihail on 9/21/2016.
 */

function solve(args) {
    let trackName = args[0];
    let artistName = args[1];
    let duration = args[2];

    console.log("Now Playing: " + artistName + " - " + trackName + " [" + duration + "]")
}

solve(['Number One', 'Nelly', '4:09']);