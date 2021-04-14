const http = require('http')
const url = "http://vue.api.comcto.com/api/helloworld.php"
http.get(url,(res) => {
    res.on('data',function(d){
        console.log(d)
        console.log(d.toString())
    })
})