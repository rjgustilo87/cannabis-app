import React from 'react';

const strainsURL = 'https://api.otreeba.com/v1/strains?page=10&count=50&sort=name';

class Strains extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(strainsURL)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.data
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="App">
            <header className="App-header">
              <h2>Strains</h2>
            </header>
          <ul>
            {items.map(item => (
              <div className="products-container">
                  <h5 className="info-item">{item.name}</h5>
                  <h5 className="info-item">{item.seedCompany.name}</h5>
                  <h5 className="info-item">{item.genetics.names}</h5>
                  <img src={item.image} alt="Strain" />
                  <h5 className="info-item">{item.url}</h5>
              </div>
            ))}
          </ul>
          </div>
        );
      }
    }
  }
  
  export default Strains;