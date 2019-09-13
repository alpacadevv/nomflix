import React from 'react';
import Presenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';
import { EEXIST } from 'constants';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm(searchTerm);
    }
  }

  updateTerm = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      searchTerm: value,
    });
  }

  searchByTerm =  async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      
      this.setState({
        movieResults,
        tvResults,
      });
    } catch (e) {
      this.setState({ error: 'Can\'t find results' })
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <Presenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}