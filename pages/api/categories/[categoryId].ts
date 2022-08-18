import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categoryId } = req.query;
  axios
    .get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.status(500).json(err));
}
