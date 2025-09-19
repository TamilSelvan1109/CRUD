import express from "express"; 

const app = express()
const PORT = 3000;
app.get("/",(req,res)=>{
res.json({msg:"vanakamuda mapula!"})
});

// CRUD Functionallities of Movies

// Read movie
app.get('/movies',()=>{

});
// Create movie
app.post('/movies',()=>{

});
// Update movie
app.put('/movies/:id',()=>{

});
// Delete movie
app.delete('/movies/:id',()=>{

});

app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
});