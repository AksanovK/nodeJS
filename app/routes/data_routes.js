bodyParser = require('body-parser').json();
module.exports = function (app) {
    app.get('/data.html', (request, response) => {
        var result = [{
            "id": 1,
            "data": "FIO: Аксанов Камиль Ниязович"
        },
            {
                "id": 2,
                "data": "Возраст: 19"
            },
            {
                "id": 3,
                "data": "Email: aksanovkamil@gmail.com"
            },
            {
                "id":4,
                "data": "Номер телефона: 89991114422"
            },
            {
                "id": 5,
                "data": "Опыт: 0"
            },
            {
                "id": 6,
                "data": "Пол: male"
            },
            {
                "id": 7,
                "data": "ЯП:  java"
            }
        ];
        response.send(JSON.stringify(result));
    });
    /*app.post('/profile.html', bodyParser, (request, response) => {
        let body = request.body;
        fs=require(body);
        fs.writeFileSync("result.txt", "my text",  "ascii");
        console.log(body["name"]);
        let responseBody = {
            id : Math.random(),
            "name" : body["name"]
        }
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(responseBody));
        response.print
    }); */

  /* <!-- const urlencodedParser = bodyParser.urlencoded({extended: false});
    app.post("/data.html", urlencodedParser, function (request, response) {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        response.send(`${request.body.userName} - ${request.body.userAge}`);
    }); */

     app.post('/user', bodyParser, (request, response) => {
        
        let body = request.body;


        console.log("Заявка:");
        console.log(body["name"]);
        console.log(body["tel"]);
        console.log(body["mail"]);
        console.log(" ")
    }); 
};