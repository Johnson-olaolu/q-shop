import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  axios
    .get("https://api.escuelajs.co/api/v1/categories")
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.status(500).json(err));
}
