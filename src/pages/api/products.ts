// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status : boolean,
  statusCode : number,
  products : {
    id : number;
    name : string;
    price : number;
    size : string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const products = [
    {
        id : 1,
        name : "T-Shirt Iron Man",
        price : 150000,
        size : "M"
    },
    {
        id : 2,
        name : "Long Pant Cargo",
        price : 1350000,
        size : "L",
    },
    {
        id : 3,
        name : "Hoodie Captain America",
        price : 100000,
        size : "S",
    },
  ];  
  res.status(200).json({ status: true, statusCode:200, products });
}