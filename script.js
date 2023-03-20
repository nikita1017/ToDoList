const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <h1>ToDo List App</h1>;

class Welcome extends React.Component {
    render() {
      return <h1>Hi, my name is {this.props.name}. I love {this.props.food}</h1>;
    }
  }
class Party extends React.Component {
    render() {
        return <div>
            <Welcome name="Kirill" food="pizza"/>
            <Welcome name="Autli" food="pizza"/>
            <Welcome name="Maksim" food="rolls"/>
            <Welcome name="Oleg" food="fast-food"/>
            <Welcome name="Karpeshov" food="macOS"/>
        </div>
    }
}


class Tree extends React.Component {
  render() {
    return <h1> <br></br> {this.props.color} {this.props.name}</h1>;
  }
}

class City extends React.Component {
  render() {
    return <div>
      <Tree name="birch tree" color="white"/> 
      <Tree name="oak" color="коричневый"/> 
      <Tree name="ash" color="черный"/> 
      <Tree name="mangrove" color="розовый"/> 
      <Tree name="willow" color="gray"/> 
    </div>
  }
}

root.render(<City/>);
