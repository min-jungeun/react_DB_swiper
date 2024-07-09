import './App.css';
import datainfo from './data/db.json';

function App() {
  return (
    <div className="App">
      <ul>
        {
          datainfo["gnb"].map((v, i)=>{
            return(
              <li>
                <a href={v.href}>
                  {v.atext}
                </a>
              </li>  
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
