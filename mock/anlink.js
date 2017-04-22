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