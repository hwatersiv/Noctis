import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './navbar.jsx';

const muiTheme = getMuiTheme(darkBaseTheme);
const headerImage = require('../assets/images/noctisbckgrndTOP.png');

const styles = {
  titleBackground: {
    backgroundImage: 'url('+ headerImage +')',
    backgroundSize: 'cover',
    height: 400,
    width: '100%',
    fontFamily: "'Porcelain', sans-serif",
    fontSize: '20em',
    color: 'white',
    textAlign: 'center',
    lineHeight: '400px',
  },
  warning: {
    color: 'red',
    fontSize: '5em',
    textAlign: 'center',
    fontFamily: "sans-serif",
  },
}

const ITEMS = [
  {
    name:'Beanie',
    id: 1,
    description: 'High Quality Wool. Handmade.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$40.00',
  },
  {
    name:'Scarf',
    id:2,
    description: 'High Quality Wool. Handmade',
    image: 'http://www.fillmurray.com/300/300',
    price: '$30.00',
  },
  {
    name:'Arm Warmers',
    id:3,
    description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$20.00',
  },
  {
    name:'Something Else Awesome',
    id:4,
    description: 'Lorem ipsum dolor sit amet, vulputate urna imperdiet, nascetur arcu pellentesque tincidunt vitae tortor nam, lectus ultrices, tellus id nascetur, sapien lacus ut volutpat in. Pretium dolor quis, augue eu eros magna pellentesque ut, non scelerisque rhoncus elit fermentum. Integer curabitur cursus diam nam vel dui, euismod diam tellus a placerat, ac vitae integer ac. Ante urna, est neque placerat mi vel. Mi donec, a etiam lorem dolor morbi pretium, id tincidunt eu, faucibus risus suspendisse nullam. Condimentum eu tempus hac a, hendrerit sed donec, blandit tristique erat vitae pellentesque sodales, pharetra semper risus, ac nullam.',
    image: 'http://www.fillmurray.com/300/300',
    price: '$20.00',
  },
];

class Noctis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
    } 
  }

  render() {
    return (
      <div>
        <div style={styles.titleBackground}>Noctis</div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Navbar/>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>     
      </div>
    );
  }
}

export default Noctis;