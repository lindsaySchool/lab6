const Primus = require("primus")

const go = (server) => {
    let primus = new Primus(server, {/* options */});

    primus.on('connection', (spark) => {
        console.log("received spark");

        spark.on('data', (data)=>{
            try{
                let parsedData = JSON.parse(data);
                console.log('received data from client: ', parsedData.data.scores);
                //console.log(data);
                primus.write({
                    action: "update",
                    data: {
                        scores: parsedData.data.scores
                    }
                }); 
            } catch (error){
                console.log("De error is" +error);
            }
           
        })
    });
}

module.exports.go = go;