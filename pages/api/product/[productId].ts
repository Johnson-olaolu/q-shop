import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  axios
    .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.status(500).json(err));
}
