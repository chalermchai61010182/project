import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="section container">
    <div className="columns is-centered">
       <h1><center>LOGIN</center></h1>
       <div className="column is-half">
            <form><center>
              
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                <input className="Usernamer" type="Username" name="Username" />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                <input className="Password" type="Username" name="Username" />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-link">Sign in</button>
                </div>
              </div>

        </center></form>
      </div>
    </div>
    </section>  
  );
}

export default App;
