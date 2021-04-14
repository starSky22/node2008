// const axios = require("axios")
//   axios.get('http://vue.api.comcto.com/api/helloworld.php')
//   .then(function (d) {
//     console.log(d.data);
//   })



const axi = require("axios")
axi.get('http://vue.api.comcto.com/api/password1.php').then(function (d) {
  console.log(d.data)
  axi.get('http://vue.api.comcto.com/api/password2.php').then(function (d) {
    console.log(d.data)
    axi.get('http://vue.api.comcto.com/api/password3.php').then(function (d) {
      console.log(d.data)
      axi.get('http://vue.api.comcto.com/api/password4.php').then(function (d) {
        console.log(d.data)
      })
    })
  })
})


