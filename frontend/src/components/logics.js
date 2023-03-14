import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()

export default async function activateUser(req, res) {
    const hash = req.query.hash;
    if (!hash) {
      return res.status(401).json({message: 'Cannot Validate an User!'})
    }
  
    const response = await axios.get(`http://localhost:4000/api/users/activate/${hash}`);
    if (response.status >= 400) {
      return res.status(401).json({message: 'Cannot Validate an User!'})
    } else {
      res.writeHead(307, { Location: '/users/activated' });
      res.end();
    }
  }