import React, { Component } from 'react';
import Input from '../atoms/Input';
import SearchButton from '../atoms/SearchButton';
import {
  searchInput,
  requestLoading,
  requestHeroNameSucess,
} from '../../actions';
import { connect } from 'react-redux';
import { fetchHeroName } from '../../services/fetchHeroId';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', selectHero: [] };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  async fetchProduct() {
    const name = 'name';
    const image = 'image';
    const { input } = this.state;
    const { requestHeroNameSucess, requestLoading, searchInput } = this.props;
    const searchHero = await fetchHeroName(input);
    this.setState({ selectHero: searchHero.results });
    requestHeroNameSucess(this.state.selectHero);
    requestLoading();
  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({ input: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { searchInput, requestLoading } = this.props;
    const { input } = this.state;
    searchInput(input);
    this.fetchProduct();
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
        <form className="col-12">
          <Input
            handleInput={this.handleInput}
            value={this.state.input}
            placeholder='Digite aqui :)'
          />
          <SearchButton
            handleSubmit={this.handleSubmit}
            text='Encontre um herói!'
            disabled={this.state.input.value? 'true': ''}
          />
        </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchInput: (state) => dispatch(searchInput(state)),
  requestLoading: () => dispatch(requestLoading()),
  requestHeroNameSucess: (state) => dispatch(requestHeroNameSucess(state)),
});
const mapStateToProps = (state) => ({
  reduxHeroes: state.heroId.data,
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
