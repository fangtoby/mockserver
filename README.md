# mockserver
 	mock data for react fetch request
	1.git clone https://github.com/fangtoby/mockserver.git
	2.npm install
	3.npm run mock
	4.open you chrome request the uri http://localhost:8090/api/mock/anlink

# ./mock/*.js multiple api in one file

 a.js [api/mock/anlink,api/mock/anlink/getData]

	var mockjs = require('mockjs');

	module.exports = [{
		api: '/api/mock/anlink',
		type: 'POST', //post get
		response: function(req,res) {
			res.json(mockjs.mock({
		        "status":200,
		        "data|1-10":[{
		            "name":"@name()",
		            "dataTime": "@DateTime()",
		            "id|+1": 1,
		            "value|0-500":20,
		            "status": "@boolean()",
		            "created":"@DateTime()"
		        }]
		    }))
		}
	},{
		api: '/api/mock/anlink/getData',
		type: 'POST', //post get
		response: function(req,res) {
			res.json(mockjs.mock({
		        "status":200,
		        "data|1-10":[{
		            "name":"@name()",
		            "dataTime": "@DateTime()",
		            "id|+1": 1,
		            "value|0-500":20,
		            "status": "@boolean()",
		            "created":"@DateTime()"
		        }]
		    }))
		}
	}]

# ./mock/*.js one api in one file

	b.js [api/mock/anlink]

	var mockjs = require('mockjs');

	module.exports ={
		api: '/api/mock/anlink',
		type: 'POST', //post get
		response: function(req,res) {
			res.json(mockjs.mock({
		        "status":200,
		        "data|1-10":[{
		            "name":"@name()",
		            "dataTime": "@DateTime()",
		            "id|+1": 1,
		            "value|0-500":20,
		            "status": "@boolean()",
		            "created":"@DateTime()"
		        }]
		    }))
		}
	}


