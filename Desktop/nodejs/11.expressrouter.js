const express=require('express');
const blogcontroller = require('./controller/blogcontroller');
const router = express.Router();


router.get('/',blogcontroller.blog_index);
//blog routes


//post 
router.post('/',blogcontroller.blog_create_post);

router.get('/create',blogcontroller.blog_create_get);
    

router.get('/:id',blogcontroller.blog_details);

router.delete('/',blogcontroller.blog_delete);




//redirects
router.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//404 page
router.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});

module.exports =router;


//finally it becomes
const express = require('express');
const res = require('express/lib/response');
const morgan =require('morgan');
const mongoose = reqire('mongoose');
const { render } = require('express/lib/response');
const blogroutes = require('./expressrouter.js');

//express app
const app =express();

//connect to mongodb
const dbuRI = 'mongodb-url';
mongoose.connect(dbuRI,{useNewUrlParser: true,useUnifiedTopology : true})
    .then((result) => app.listen(2022)
    .catch((err) => console.log(err));

app.set('view engine','ejs');
//listen for requests
app.listen(2022);

app.use(express.static('public'));    //we created a file named as style.css and added some features.that file sends to newly created folder named as public
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/about',(req,res) =>{
    res.redirect('/blogs');
});

//mongoose and mongo sandbox routes
app.get('/add-blog',(req,res) =>{
const blog = new blog({
    title : 'new blog',
    snippet : 'bout my new blog',
    body: 'more about my new blog'
    });
blog.save()
    .then((result) => {
     res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});
app.get('/all-blogs',(req,res) => {
    blog.find()
     .then((result) =>{
         res.send(result);
     })
     .catch((err) =>{
         console.log(err);
     });
});

app.get('/single-blog',(req,res) =>{
    blog.findById('')  //in this quotes we need to add which term we want to find in the blog
    .then((result)=>{
        res.send(result)
    })
})

app.use((req,res,next) =>{
    console.log('new request made:');
    console.log('host',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});



app.get('/',(req,res) =>{
    const blogs={
        {title : 'hii'},
        {title : 'hi'},
        {title : 'hloo'},
    };
    res.render('index',{title : 'home' , blogs});
});
app.get('/about,(req,res') => {
    res.render('about',{title : 'about'}
});

//blog routes
app.get('/blogs'(req,res) =>{
    blog.find().sort({createdAt : -1})
        .then((result) =>{
            res.render('index' {title : 'all blogs',blogs: result})
        })
        .catch((err) =>{
            console.log(err);
        });
});

//post 
app.post('/blogs',(req,res) =>{
    const blog = new blog(req.body);

    blog.save()
        .then((result) =>{
            res.redirect('blogs');
        })
        .catch((err) =>{
            console.log(err);
        })
    )
})

app.get('/blogs/:id',(req,res) =>{
    const id = req.params.id;
    console.log(id);
    blog.findById(id)
    .then(result =>{
        render('details',{ blog:result , title : 'blog details'})
    })
    .catch(err =>{
        console.log(err);
    })
})
app.delete('/blogs',(req,res) =>{
    const id =req.params.id;

    blog.findByIdAndDelete(id)
     .then(result =>{
         res.json({redirect : '/blogs'})
     })
     .catch(err =>{
         console.log(err);
     })
})

app.use((req,res,next) => {
    console.log('in the next middleware');
    
    next();
});

app.get('/blogs/create',(req,res) =>{
    res.render('create',{title : 'blog'});
});


//redirects
app.get('/about-us',(req,res) =>{
    res.redirect('/about');
});

//blog routes
app.use('/blogs',blogroutes)

//404 page
app.use(''(req,res) =>{
    res.redirect('/node.js/404.html',{root : __dirname});
});



//mvc basics - model view controller

