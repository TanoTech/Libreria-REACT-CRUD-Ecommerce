import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import DisplayBooks from './components/DisplayBooks';
import FantasyBook from './components/FantasyBook';
import HistoryBook from './components/HistoryBook';
import HorrorBook from './components/HorrorBooks';
import RomanceBook from './components/RomanceBook';
import Footer from './components/Footer';
import ScifiBook from './components/ScifiBook';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar onSearch={this.handleSearch} />
          <Routes>
            <Route path="/" element={<DisplayBooks searchQuery={this.state.searchQuery} />} />
            <Route path="/fantasy" element={<FantasyBook searchQuery={this.state.searchQuery} />} />
            <Route path="/history" element={<HistoryBook searchQuery={this.state.searchQuery} />} />
            <Route path="/horror" element={<HorrorBook searchQuery={this.state.searchQuery} />} />
            <Route path="/romance" element={<RomanceBook searchQuery={this.state.searchQuery} />} />
            <Route path="/scifi" element={<ScifiBook searchQuery={this.state.searchQuery} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;