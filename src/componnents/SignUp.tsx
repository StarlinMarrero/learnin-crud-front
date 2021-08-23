import { useState, useContext } from "react";
import axios from "axios";
import Token_Services from "../services/auth.service";
import { useHistory } from "react-router-dom";
import { auth } from "../middleware/AuthMiddleware";

const initData = {
  UserName: "",
  Nombre: "",
  Password: "",
  Empresa: "",
};

const SignUp = () => {

const history = useHistory();

  const [inputs, setInputs] = useState(initData);
  const [error, setError] = useState(null);

    const context = useContext(auth);

  const handlerChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const login = await axios.post("http://localhost:4000/signup", inputs);

    if (login.data.message) {
      return setError(login.data.message);
    }

    Token_Services.setToken(login.data);

    context.setAuthData(login.data);
    
    history.push('/');
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={handlerSubmit}>
          {error && <span className="text-danger">{error}</span>}
          <div className="row">
            <div className="col-12 mb-3">
              <label htmlFor="UserName" className="mb-2">
                UserName
              </label>
              <input
                type="text"
                name="UserName"
                value={inputs.UserName}
                className="form-control"
                onChange={handlerChange}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="Nombre">Nombre</label>
              <input
                type="text"
                name="Nombre"
                value={inputs.Nombre}
                className="form-control"
                onChange={handlerChange}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="Password">Password</label>
              <input
                type="text"
                name="Password"
                value={inputs.Password}
                className="form-control"
                onChange={handlerChange}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="Empresa">Empresa</label>
              <input
                type="text"
                name="Empresa"
                value={inputs.Empresa}
                className="form-control"
                onChange={handlerChange}
              />
            </div>
            <div>
              <button className="btn btn-success w-100">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
