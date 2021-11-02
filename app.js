const express = require("express");
const path = require('path');

const app = express();
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

// home page
app.get('/',(req,res)=>{
    res.render(path.resolve(__dirname,'./public/index'))
})

app.listen(3000, () => console.log("server is running on port 3000"));