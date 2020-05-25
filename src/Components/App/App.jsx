import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import { axiosArticles } from "../../servises/api";
import { formatData } from "../../utils/helpers";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

export default class App extends Component {
  state = {
    hits: [],
    query: "",
    page: 1,
    isLoading: false,
  };

  onSearch = () => {
    const { query, page, hits } = this.state;
    this.setState({ isLoading: true });
    axiosArticles(query, page)
      .then((data) =>
        !hits.length
          ? this.setState({ hits: formatData(data) })
          : this.setState((prevState) => ({
              hits: [...prevState.hits, ...formatData(data)],
            }))
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: true }));
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  onSearchForm = (queryForm) => {
    this.setState({ query: queryForm, hits: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.onSearch();
    }
  }

  render() {
    const { hits } = this.state;
    return (
      <main>
        <Searchbar onSubmit={this.onSearchForm} onSearch={this.onSearch} />
        {hits.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem images={hits} />
          </ImageGallery>
        )}
        {hits.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </main>
    );
  }
}
