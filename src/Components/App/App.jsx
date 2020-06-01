import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { fetchData } from "../../services/api";
import { AppMain } from "./App.module.css";
import { formatData, scrollTo } from "../../utils/helpers";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Overlay from "../Overlay/Overlay";
import Modal from "../Modal/Modal";

export default class App extends Component {
  state = {
    hits: [],
    query: "",
    page: 1,
    largeImg: "",
    isLoading: false,
    isModal: false,
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleCloseModal);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.uponRequest();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleCloseModal);
  }

  uponRequest = () => {
    const { query, page, hits } = this.state;
    this.setState({ isLoading: true });
    fetchData(query, page)
      .then(({data: {hits}}) =>
        !hits.length
          ? this.setState({ hits: formatData(hits) })
          : this.setState((prevState) => ({
              hits: [...prevState.hits, ...formatData(hits)],
            }))
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        if (hits.length) {
          scrollTo();
        }
      });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  onSearchForm = (queryForm) => {
    this.setState({ query: queryForm, hits: [], page: 1 });
  };

  handleOpenModal = ({ target: { dataset } }) => {
    this.setState({ largeImg: dataset.largeUrl, isModal: true });
  };

  handleCloseModal = ({ code, target }) => {
    if (code === "Escape" || target.dataset.cover === "overlay") {
      this.setState({ isModal: false });
    }
  };

  render() {
    const { hits, isLoading, isModal, largeImg } = this.state;
    return (
      <main className={AppMain}>
        <Searchbar onSubmit={this.onSearchForm} />
        {hits.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem
              images={hits}
              onClickModal={this.handleOpenModal}
            />
          </ImageGallery>
        )}
        {isLoading && (
          <Overlay>
            <Loader type="Rings" color="#3f51b5" height={80} width={80} />
          </Overlay>
        )}
        {hits.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        {isModal && (
          <Overlay onClickModal={this.handleCloseModal}>
            <Modal largeImg={largeImg} />
          </Overlay>
        )}
      </main>
    );
  }
}
