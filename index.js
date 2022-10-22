const express = require ("express")

const app = express()
app.use(express.json())

let books=[
    {
        id:1,
        title: "Getting Started with api"
    },
    {
        id:2,
        title: "Tintin adventures"
    },
    {
        id:3,
        title: "Journey to the moon"
    },
    {
        id:4,
        title: "The lost Island"
    }
]

//API to get all the books
app.get('/',(req,res)=>{
    return res.json({Books: books})
})

// API to add a book
app.post('/add',(req,res)=>{
    const newBook = req.body.newBook
    books.push(newBook)
    return res.json({Books: books})
})

// API to update a book
app.put('/update/:ID',(req,res)=>{
    books.forEach((book)=>{
        if(book.id == req.params.ID)
        book.title = req.body.newTitle
    })
    return res.json({Books: books})
})

// API to delete a book
app.delete('/delete/:ID',(req,res)=>{
    const newData = books.filter((book)=>
        book.id != req.params.ID
    )
    books = newData;
    return res.json({Books: books})
})


app.listen(3000,()=>{
    console.log("Server is running 🚀")
})