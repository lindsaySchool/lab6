const Primus = require('primus');


let go = (Server) => {
    new Primus(server, {/* options */})
}

// export
module.exports.go = go;