const express = require('express')
const app = express()
const port = 4000

app.get('/', (req: any, res: any)=>{
    res.send('Hello world!')
})

app.listen(port, () =>{
    console.log('ok')
})