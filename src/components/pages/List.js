import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchHeroId from '../../services/fetchHeroId';
import {
  requestHeroId,
  requestHeroIdSucess,
  requestLoading,
} from '../../actions';
import SearchBar from '../molecules/SearchBar';
import HeroeCard from '../organisms/HeroeCard';
import SearchButton from '../atoms/SearchButton';
import Loading from '../molecules/Loading';

const limit = 5;
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
    this.fetchHeroes = this.fetchHeroes.bind(this);
  }

  componentDidMount() {
    this.fetchHeroes();
  }

  async fetchHeroes() {
    const { requestHeroId, requestHeroIdSucess, requestLoading } = this.props;
    let counter = 1;
    while (counter < limit) {
      requestHeroId();
      let hero = await fetchHeroId(counter);
      this.setState((prevState) => ({
        heroes: [...prevState.heroes, hero],
      }));
      counter++;
    }
    requestHeroIdSucess(this.state.heroes);
    requestLoading();
  }

  render() {
    return (
      <>
        <SearchBar placeholder='asdsadsad'/>
        <SearchButton
          handleSubmit={() => this.fetchHeroes()}
          text="Adicionar mais 4 heróis pra lista"
        />
        <div className="container">
          <div className="row">
            {this.props.loading === false ? (
              this.props.res.map((e) => (
                <div className="col-6">
                  <HeroeCard
                    src={e.image.url}
                    name={e.name}
                    biography={e.biography}
                    stats={e.powerstats}
                    work={e.work}
                  />
                </div>
              ))
            ) : (
              <h1><Loading/></h1>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestHeroId: () => dispatch(requestHeroId()),
  requestHeroIdSucess: (state) => dispatch(requestHeroIdSucess(state)),
  requestLoading: () => dispatch(requestLoading()),
});

const mapStateToProps = (state) => ({
  res: state.heroId.data,
  loading: state.heroId.loading,
  page: state.heroId.page,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
