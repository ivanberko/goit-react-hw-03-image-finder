(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e,a,t){e.exports={OverlayModal:"Overlay_OverlayModal__3CZP2",Modal:"Overlay_Modal__27sNN"}},23:function(e,a,t){e.exports={AppMain:"App_AppMain__1T1ln"}},25:function(e,a,t){e.exports={ImagesGallery:"ImageGallery_ImagesGallery__2NOAL"}},26:function(e,a,t){e.exports={Btn:"Button_Btn__Qp8r0"}},27:function(e,a,t){e.exports=t(72)},3:function(e,a,t){e.exports={SearchbarForm:"Searchbar_SearchbarForm__NxiCD",SearchForm:"Searchbar_SearchForm__Ts5n9",SearchFormButton:"Searchbar_SearchFormButton__1a0TY",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3djT8",SearchFormInput:"Searchbar_SearchFormInput__3xb-V","SearchForm-input":"Searchbar_SearchForm-input__3bEiM"}},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),l=t(4),i=t(5),s=t(6),u=t(8),m=t(7),h=(t(32),t(21)),p=t.n(h),d=t(22),g=t.n(d),f=function(e,a){var t="/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(a,"&per_page=").concat(12,"&key=").concat("13689220-f8624404383f6a2586dfba74c");return g.a.get("".concat("https://pixabay.com/api").concat(t)).then((function(e){return e.data.hits}))},y=t(23),v=function(e){return Object(l.a)(e).map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))},b=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},S=t(24),_=t(1),I=t.n(_),M=t(3),E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={query:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(S.a)({},n,r))},e.handleSubmit=function(a){var t=e.state.query;a.preventDefault(),e.props.onSubmit(t)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:M.SearchbarForm},r.a.createElement("form",{className:M.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:M.SearchFormButton},r.a.createElement("span",{className:M.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:M.SearchFormInput,type:"text",name:"query",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),t}(n.Component);E.propsTypes={onSubmit:I.a.func.isRequired};var L=t(25),C=function(e){var a=e.children;return r.a.createElement("ul",{className:L.ImagesGallery},a)},F=t(9),O=function(e){var a=e.images,t=e.onClickModal;return a.map((function(e){var a=e.id,n=e.webformatURL,o=e.largeImageURL;return r.a.createElement("li",{className:F.ImgGalleryItem,key:a},r.a.createElement("img",{src:n,"data-large-url":o,alt:"",className:F.ImageGalleryItemImage,onClick:t}))}))},k=t(26),N=function(e){var a=e.onLoadMore;return r.a.createElement("button",{type:"button",className:k.Btn,onClick:a},"Load more")};N.propsTypes={onLoadMore:I.a.func.isRequired};var q=N,w=t(10),j=function(e){var a=e.onClickModal,t=e.children;return r.a.createElement("div",{className:w.OverlayModal,"data-cover":"overlay",onClick:a},r.a.createElement("div",{className:w.Modal},t))};j.propsTypes={onClickModal:I.a.func.isRequired};var R=j,G=function(e){var a=e.largeImg;return r.a.createElement("img",{src:a,alt:""})};G.propsTypes={largeImg:I.a.string.isRequired};var x=G,B=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={hits:[],query:"",page:1,largeImg:"",isLoading:!1,isModal:!1},e.uponRequest=function(){var a=e.state,t=a.query,n=a.page,r=a.hits;e.setState({isLoading:!0}),f(t,n).then((function(a){return r.length?e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(v(a)))}})):e.setState({hits:v(a)})})).catch((function(e){return console.log(e)})).finally((function(){e.setState({isLoading:!1}),r.length&&b()}))},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.onSearchForm=function(a){e.setState({query:a,hits:[],page:1})},e.handleOpenModal=function(a){var t=a.target.dataset;e.setState({largeImg:t.largeUrl,isModal:!0})},e.handleCloseModal=function(a){var t=a.code,n=a.target;"Escape"!==t&&"overlay"!==n.dataset.cover||e.setState({isModal:!1})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleCloseModal)}},{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=t.query,r=t.page;a.query===n&&a.page===r||this.uponRequest()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.handleCloseModal)}},{key:"render",value:function(){var e=this.state,a=e.hits,t=e.isLoading,n=e.isModal,o=e.largeImg;return r.a.createElement("main",{className:y.AppMain},r.a.createElement(E,{onSubmit:this.onSearchForm}),a.length>0&&r.a.createElement(C,null,r.a.createElement(O,{images:a,onClickModal:this.handleOpenModal})),t&&r.a.createElement(R,null,r.a.createElement(p.a,{type:"Rings",color:"#3f51b5",height:80,width:80})),a.length>0&&r.a.createElement(q,{onLoadMore:this.onLoadMore}),n&&r.a.createElement(R,{onClickModal:this.handleCloseModal},r.a.createElement(x,{largeImg:o})))}}]),t}(n.Component);t(71);c.a.render(r.a.createElement(B,null),document.getElementById("root"))},9:function(e,a,t){e.exports={ImgGalleryItem:"ImageGalleryItem_ImgGalleryItem__1P6aN",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1Q7EV"}}},[[27,1,2]]]);
//# sourceMappingURL=main.b626459a.chunk.js.map