const Product=require('../models/product.model')
require('../utils/mongoose')

import { FastifyPluginAsync } from 'fastify';

interface Params {
    id: string;
  }

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/products', async function (request, reply) {
    const products=await Product.find();
    return products;
  });

  fastify.get('/products/:id', async function (request, reply) {
    const { id } = request.params as Params;    
    const products=await Product.findById(id);

    return products;
  });

  fastify.post('/products', async function (request, reply) {
    const newProduct=new Product(request.body);
    await newProduct.save();
    reply.code(201).send(newProduct);
  });

  fastify.put('/products/:id', async function (request, reply) {
    try {
        const { id } = request.params as Params;
       const product = await Product.findByIdAndUpdate(id,request.body,{new:true})
       console.log(id,request.body);
       console.log(product);
        reply.code(200).send(product);
        
    } catch (error) {
        reply.code(500).send(error);
        
    }
  });

  fastify.delete('/products/:id', async function (request, reply) {
    const { id } = request.params as Params;
    await Product.findByIdAndDelete(id)
    reply.code(204).send();
  })
}

export default root;