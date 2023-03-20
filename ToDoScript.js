const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: [
        {
          text: "Постирать белье",
        },
        {
          text: "Приготовить плов",
        },
        {
          text: "задонатить на марли майн 100к",
        },
      ],
      text: "",
      heading: "ToDo List App",
    }
  }
  handleSubmit() {
    this.setState(function (state) {
      let elements = state.elements
      if(state.text!=""){
        elements.push({
          text: state.text,
        })
      }
      return {
        elements: elements,
        
      }
      
    })
  }
  removeAll() {
    this.setSstate(function (state) {
      return {
        elements: []

      }

    })
  }
  basket(id){
    this.setState(function (state) {
      let elements = state.elements
      elements.splice(id,1)
      return {
        elements: elements,
      }
      
    })
  }
  pencil(){
    
  }
  heading(){
    this.setState(function (state){
      let heading = state.heading;
      if(heading == "ToDo List App") {
        heading = 1;
      }
      else{
        heading++
      }
      return {
        heading: heading,
      }
    })

  }

  render() {
    return <div>
      <div className="modal">
      <form>

      </form>
      </div>      
      <form onSubmit={(event)=>event.preventDefault()}>
      <h1 id="heading" onClick={() => this.heading()}>{this.state.heading}</h1>
      <ol>
        {
          this.state.elements.map((element, id) => (
            <li key={id}>
              <p>{id+1 + ". " + element.text}</p>
              <button type="button" onClick={() => this.pencil()}>🖋️️</button>
              <button type="button" onClick={() => this.basket(id)}>🗑️</button>
            </li>

          ))
        }
      </ol>
      <input type="text" placeholder="Напишите задачу" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
      <button type="button" onClick={() => this.handleSubmit()}>📎</button>

      <button type="button" onClick={() => this.removeAll()}>💣</button>

    </form>
    </div> 
    
  }
}
root.render(<App />);
