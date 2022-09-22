import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
<div classname="container">
  <h2> React Calculator</h2>
  <div id="calculator">
    <p id="result" classname="result" />
    <table>
      <tbody>
        <tr>
          <td>
            {" "}
            <button classname="btn_ac">AC</button>{" "}
          </td>
          <td>
            {" "}
            <button classname="btn_delete">
              {" "}
              <i classname="fa-solid fa-delete-left" />
            </button>
          </td>
          <td>
            {" "}
            <button classname="btn_operator" onclick="insert()">
              {" "}
              %{" "}
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button classname="btn_normal" onclick="insert()">
              7
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              8
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              9
            </button>
          </td>
          <td>
            <button classname="btn_operator" onclick="insert()">
              X
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button classname="btn_normal" onclick="insert()">
              4
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              5
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              6
            </button>
          </td>
          <td>
            {" "}
            <button classname="btn_operator" onclick="insert()">
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button classname="btn_normal" onclick="insert()">
              1
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              2
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              3
            </button>
          </td>
          <td>
            {" "}
            <button classname="btn_operator" onclick="insert()">
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button classname="btn_normal" onclick="insert()">
              0
            </button>
          </td>
          <td>
            <button classname="btn_normal" onclick="insert()">
              .
            </button>
          </td>
          <td>
            <button classname="btn_total">=</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



);

}
}


export default App;