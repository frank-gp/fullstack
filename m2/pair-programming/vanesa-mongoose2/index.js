const app = require("./src/server");
const conDb = require("./src/Config/conDb")


conDb()
.then((res) => {
    app.listen(3000, ()=> {
    console.log("servidor escuchando en el puerto 3000");
});
})
.catch(err =>{
    console.log("error al conectar la BD");
});
