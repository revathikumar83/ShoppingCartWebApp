const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortId = require("short-id");

const app = express();
app.use(bodyParser.json());


app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect( "mongodb://localhost/shopping-cartapp", 
{    useNewUrlParser: true,
     useUnifiedTopology: true, 
     useUnifiedTopology:true
    });

const Product= mongoose.model(
    "products",
    new mongoose.Schema({
        id: {type:String, default:shortId.generate},
        title:String,
        description: String,
        image:String,
        price:Number,
        availableSizes:[String]
    })
);
app.get('/api/products', async (req,res)=>{
    const products=  await Product.find({});
    res.send(products);
})

app.post('/api/products', async (req,res)=>{
    const newproduct=  new Product(req.body);
    const savedProduct = await newproduct.save();
    res.send(savedProduct);
})

app.delete('/api/products/:id', async (req,res)=>{
    const deleteproduct=  await Product.findByIdAndDelete(req.params.id);
    res.send(deleteproduct);

})

const Order = mongoose.model(
    "orders",
    new mongoose.Schema({
        id: { type: String,  default: shortId.generate },
        email: String,
        name: String,
        address: String,
        total: Number,
        cartItems: [{
            id: String,
            title: String,
            price: Number,
            count: Number,
          }]
      },
      {
        timestamps: true,
      }
    )
  );
  
  app.post("/api/orders", async (req, res) => {
     

     /*if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
      ) {
        return res.send({ message: "Data is required." });
      }*/
      
      const newOrder = await Order(req.body)
      const order = await newOrder.save();
      res.send(order);  
    });
      

  app.get("/api/orders", async (req, res) => {
    const order = await Order.find({});
    res.send(order);
  });
  app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
  });

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('app is running on http://localhost:3000'));