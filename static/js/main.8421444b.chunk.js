(this["webpackJsonpspotify-milonguero"]=this["webpackJsonpspotify-milonguero"]||[]).push([[0],{37:function(e,t,n){e.exports=n(53)},42:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(42),n(13)),l=n(8),s=function(e){return{type:"GET_USER_DATA",payload:e}},u=function(e,t){return function(n){""!==e.name&&(n(p()),l.ajax({url:"https://api.spotify.com/v1/search?q=".concat(e.name.toLowerCase().replace(/\s/g,"%20"),"&type=").concat(e.type,"&limit=5"),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(e){n(m(e))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}}))}},p=function(){return{type:"SEARCH_IS_LOADING"}},m=function(e){return{type:"SEARCH_UPDATE_RESULTS",payload:e.tracks.items.map((function(e){return{id:e.id,name:e.name,album:e.album.name,preview_url:e.preview_url,artist:e.artists[0].name,image:e.album.images[0]}}))}},f=n(29),d=n(30),y=n(35),g=n(31),E=n(36),b=function(e){return{type:"CREATE_PLAYLIST",payload:e}},h=function(e){return{type:"GET_USER_PLAYLISTS",payload:e}},O=function(e,t){return{type:"CHOOSE_PLAYLIST",payload:{id:e,tracks:t}}},k=function(e,t){return function(n){l.ajax({url:"https://api.spotify.com/v1/playlists/".concat(e,"/tracks"),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(e){n(v(e.items))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}})}},v=function(e){return{type:"ADD_TRACKS",payload:e}},w=function(){return{type:"ADD_TRACKS_LOADING"}},j=function(e){return{type:"ADD_TRACKS_ERROR",payload:e}},S=function(){return{type:"REMOVE_TRACK_LOADING"}},P=n(2),T=function(e){return a.a.createElement(P.e,null,a.a.createElement(P.f,{className:"md-form"},a.a.createElement(P.g,{icon:"search"}),a.a.createElement("input",{onChange:function(t){return e.onChange(t.target.value)},className:"form-control form-control-sm ml-3 w-75 text-white",type:"text",placeholder:"Search","aria-label":"Search"}),e.isLoading?a.a.createElement("div",{className:"spinner-border spinner-border-sm",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")):""))},_=n(15),R=function(e){var t=Object(r.useState)(!1),n=Object(_.a)(t,2),o=n[0],c=n[1],i=function(e){return new Promise((function(t,n){var r=document.getElementById(e);r.play(),r.onerror=n,r.onended=t,c(!0)}))};return a.a.createElement(P.k,{className:"flex-center hover",overlay:"teal-slight"},a.a.createElement(P.b,{floating:!0,flat:!0,style:{boxShadow:"none"},color:"transparent",size:"lg",onClick:function(){o?(document.getElementById("audio-".concat(e.id)).pause(),c(!1)):i("audio-".concat(e.id)).then((function(){return c(!1)})).then((function(){return c(!1)}))}},a.a.createElement(P.g,{far:!0,style:{opacity:".8"},icon:o?"pause-circle":"play-circle",size:"5x",className:"white-text"}))," )",a.a.createElement("audio",{id:"audio-"+e.id},a.a.createElement("source",{src:e.source})))},A=function(e){return a.a.createElement(P.b,{className:e.allowPress?"":"disabled",floating:!0,flat:!0,style:{boxShadow:"none"},color:"transparent",size:"lg",onClick:function(){return e.onClick()}},a.a.createElement(P.g,{style:{opacity:".8"},icon:"plus",size:"2x",className:"white-text"}))},L=function(e){return a.a.createElement(P.e,{fluid:!0,className:"mx-0 px-0"},a.a.createElement(P.l,{list:!0,className:"mt-3 px-0 mx-0",style:{overflowY:"scroll",maxHeight:"85vh",overflowX:"hidden"}},e.items&&e.items.length?e.items.map((function(t){return a.a.createElement(P.l,{tag:"li",className:"my-2",key:t.id},a.a.createElement(P.s,{className:"align-items-center"},a.a.createElement(P.d,{size:4},a.a.createElement(P.u,{className:"hover"},a.a.createElement("img",{className:"media-image img-fluid",src:t.image.url,alt:t.album}),t.preview_url?a.a.createElement(R,{source:t.preview_url,id:t.id}):"")),a.a.createElement(P.d,{size:6},a.a.createElement(P.l,{body:!0},a.a.createElement(P.l,{heading:!0},t.name),t.artist," - ",t.album)),a.a.createElement(P.d,{size:1},a.a.createElement(A,{allowPress:e.allowAdd,onClick:function(){return e.addToPlaylist(t)}}))))})):""))},C=function(e){return a.a.createElement(P.e,{style:{minHeight:"100vh",backgroundColor:"#263238"},className:"text-white"},a.a.createElement(P.s,null,a.a.createElement(P.d,{size:"12"},a.a.createElement(T,{onChange:function(t){return function(t){e.searchItems({name:t,type:"track"},e.token)}(t)},isLoading:e.searchIsLoading})),a.a.createElement(P.d,{size:"12"},a.a.createElement(L,{items:e.resultOfSearch,addToPlaylist:function(t){return e.addTrackToPlaylist(t,e.playlist.id,e.token)},allowAdd:e.playlist}))))},D=Object(i.b)((function(e){return{token:e.loginReducer.token,resultOfSearch:e.reducer.resultOfSearch,searchIsLoading:e.reducer.searchIsLoading,addTracksIsLoading:e.playlistReducer.tracksLoading,addTracksError:e.playlistReducer.tracksError,playlist:e.playlistReducer.playlist}}),(function(e){return{searchItems:function(t,n){return e(u(t,n))},addTrackToPlaylist:function(t,n,r){return e(function(e,t,n){return function(r){r(w),l.ajax({url:"https://api.spotify.com/v1/playlists/".concat(t,"/tracks?uris=spotify:track:").concat(e.id),type:"POST",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n)},success:function(){r(k(t,n))},error:function(e,t,n){var a=new Error(n+": "+t);r(j(a.message))}})}}(t,n,r))}}}))(C),N=["user-read-currently-playing","user-read-playback-state","playlist-modify-private","playlist-modify-public"],I=function(e){return a.a.createElement(P.e,null,a.a.createElement(P.m,{isOpen:e.isOpen},a.a.createElement(P.p,{className:"bg-default text-white"},"Welcome! ",a.a.createElement("br",null),"In order to check out this site, an spotify's authentication it's needed."),a.a.createElement(P.n,null,a.a.createElement("strong",null,"About this site"),a.a.createElement("br",null),"This is a very simple web app that you can use to manage your Spotify's playlists. It's free of charge, and I created it just to practice with Spotify API. This is an alpha version. ",a.a.createElement("br",null),"Thanks!"),a.a.createElement(P.o,null,a.a.createElement(P.b,{tag:"a",color:"default",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9464d0a757e94b8184997bb23fc228a1","&redirect_uri=").concat("https://javfr.github.io/spotify-app/","&scope=").concat(N.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"))))},x=n(12);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){return a.a.createElement(P.c,null,a.a.createElement(P.b,{onClick:e.createPlaylist,color:"info",size:"lg"},"Create New Playlist"),a.a.createElement(P.b,{onClick:e.openPlaylist,color:"info",size:"lg"},"Open a Playlist"))},U=function(e){return a.a.createElement(P.e,{className:"bg-info z-depth-1 text-white px-2 py-1"},a.a.createElement(P.s,{className:"align-items-center justify-content-between"},a.a.createElement(P.d,{className:"d-flex align-items-center justify-content-between px-5"},a.a.createElement("h1",{className:"text-white"},e.title),"")))},B=function(e){return a.a.createElement(P.e,{className:"pt-3",style:{overflowY:"scroll",maxHeight:"100vh"}},a.a.createElement(P.i,null,e.items&&e.items.length?e.items.map((function(t){return a.a.createElement(P.j,{key:t.track.id,className:"d-flex justify-content-between align-items-center text-dark"},a.a.createElement("div",null,t.track.name,a.a.createElement("br",null),a.a.createElement("small",null,t.track.artists[0].name," - ",t.track.album.name)),a.a.createElement("div",null,a.a.createElement(P.b,{floating:!0,flat:!0,style:{boxShadow:"none"},color:"transparent",size:"lg",onClick:function(){return e.removeTrack(t.track)}},a.a.createElement(P.g,{far:!0,icon:"trash-alt",size:"2x"})),""))})):""),e.loading?a.a.createElement("div",{className:"spinner-border spinner-border-sm",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")):"")},K=function(e){var t=Object(r.useState)({name:"",description:"",public:!1}),n=Object(_.a)(t,2),o=n[0],c=n[1];return a.a.createElement(P.e,null,a.a.createElement(P.m,{isOpen:e.isOpen,toggle:e.toggle},a.a.createElement(P.p,{toggle:e.toggle},"Create a new Playlist"),a.a.createElement(P.n,null,a.a.createElement("form",null,a.a.createElement(P.h,{onChange:function(e){return c(H({},o,{name:e.target.value}))},id:"ModalPlaylistTitle",label:"Title"}),a.a.createElement(P.h,{onChange:function(e){return c(H({},o,{description:e.target.value}))},type:"textarea",label:"Description",rows:"4"}),a.a.createElement(P.c,null,a.a.createElement(P.b,{onClick:function(){return c(H({},o,{public:!1}))},className:o.public?"":"active",color:"default",size:"lg"},"Private"),a.a.createElement(P.b,{onClick:function(){return c(H({},o,{public:!0}))},className:o.public?"active":"",color:"default",size:"lg"},"Public")))),a.a.createElement(P.o,null,a.a.createElement(P.b,{color:"secondary",onClick:e.toggle},"Close"),a.a.createElement(P.b,{color:"primary",onClick:function(){return e.submit(o)}},"Create"))))},q=function(e){var t=Object(r.useState)({id:null}),n=Object(_.a)(t,2),o=n[0],c=n[1];return a.a.createElement(P.e,null,a.a.createElement(P.m,{isOpen:e.isOpen,toggle:e.toggle},a.a.createElement(P.p,{toggle:e.toggle},"Choose a Playlist"),a.a.createElement(P.n,null,a.a.createElement(P.i,null,e.items&&e.items.length?e.items.map((function(e){return a.a.createElement(P.j,{className:e.id===o.id?"active":"",hover:!0,key:e.id,onClick:function(){return c({id:e.id})}},e.name)})):""),e.isLoading?a.a.createElement(P.j,null,a.a.createElement("div",{className:"spinner-border spinner-border-sm",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading..."))):""),a.a.createElement(P.o,null,a.a.createElement(P.b,{color:"secondary",onClick:e.toggle},"Close"),a.a.createElement(P.b,{color:"primary",className:o.id?"":"disabled",onClick:function(){return e.submit(o.id)}},"Choose"))))},Y=function(e){var t=Object(r.useState)({isOpen:!1}),n=Object(_.a)(t,2),o=n[0],c=n[1],i=Object(r.useState)({isOpen:!1}),l=Object(_.a)(i,2),s=l[0],u=l[1];return a.a.createElement(P.e,{style:{minHeight:"100vh",backgroundColor:"#37474F"},className:"pt-2"},!e.playlist||e.playlist.length>1?a.a.createElement(G,{createPlaylist:function(){return c({isOpen:!0})},openPlaylist:function(){return e.getUserPlaylists(e.token,e.userId),void u({isOpen:!0})}}):a.a.createElement("div",null,a.a.createElement(U,{title:e.playlist.name}),a.a.createElement(B,{items:e.tracks,removeTrack:function(t){return e.removeTrack(t,e.playlist.id,e.token)},loading:e.tracksLoading})),a.a.createElement(K,{toggle:function(){return c(!o.isOpen)},isOpen:o.isOpen,submit:function(t){return function(t){e.createPlaylist(t,e.token,e.userId),c({isOpen:!1})}(t)}}),a.a.createElement(q,{toggle:function(){return u(!s.isOpen)},isOpen:s.isOpen,isLoading:e.chooseIsLoading,submit:function(t){return function(t){e.choosePlaylist(t,e.token),u({isOpen:!1})}(t)},items:e.playlist}))},M=Object(i.b)((function(e){return{token:e.loginReducer.token,userId:e.loginReducer.userId,playlist:e.playlistReducer.playlist,tracks:e.playlistReducer.tracks,tracksLoading:e.playlistReducer.tracksLoading}}),(function(e){return{createPlaylist:function(t,n,r){return e(function(e,t,n){return function(r){""!==e.name&&""!==e.description&&l.ajax({url:"https://api.spotify.com/v1/users/".concat(n,"/playlists"),type:"POST",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},data:JSON.stringify({name:e.name,description:e.descrition,public:e.public}),success:function(e){r(b(e))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}})}}(t,n,r))},getUserPlaylists:function(t,n){return e(function(e,t){return function(t){l.ajax({url:"https://api.spotify.com/v1/me/playlists",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){t(h(e.items))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}})}}(t))},choosePlaylist:function(t,n){return e(function(e,t){return function(n){l.ajax({url:"https://api.spotify.com/v1/playlists/".concat(e,"/tracks"),type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(t){n(O(e,t.items))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}})}}(t,n))},removeTrack:function(t,n,r){return e(function(e,t,n){return function(r){r(S);var a={tracks:[{uri:"spotify:track:"+e.id}]};console.log(a),l.ajax({url:"https://api.spotify.com/v1/playlists/".concat(t,"/tracks"),type:"DELETE",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+n)},data:JSON.stringify(a),dataType:"json",contentType:"application/json",success:function(){r(k(t,n))},error:function(e,t,n){var a=new Error(n+": "+t);r(j("Failed to Remove Track: "+a.message))}})}}(t,n,r))}}}))(Y),V=(n(49),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(y.a)(this,Object(g.a)(t).call(this,e))).state={token:null,userId:null},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getToken(),console.log(this.props.token)}},{key:"componentDidUpdate",value:function(){this.props.token&&this.props.getUserData(this.props.token)}},{key:"render",value:function(){return a.a.createElement(P.e,{fluid:!0,className:"App fluid p-0"},a.a.createElement(I,{isOpen:!this.props.token}),this.props.token&&a.a.createElement(P.s,{className:"no-gutters"},a.a.createElement(P.d,{size:"6",md:"4"},a.a.createElement(D,null)),a.a.createElement(P.d,{size:"6",md:"8"},a.a.createElement(M,null))))}}]),t}(r.Component)),X=Object(i.b)((function(e){return{token:e.loginReducer.token,resultOfSearch:e.reducer.resultOfSearch,userId:e.loginReducer.userId}}),(function(e){return{getToken:function(){return e({type:"GET_TOKEN",payload:window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token})},searchItems:function(t,n){return e(u(t,n))},getUserData:function(t){return e(function(e){return function(t){l.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){t(s(e))},error:function(e,t,n){var r=new Error(n+": "+t);console.log(r.message)}})}}(t))}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(16),W=n(34);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:null,userId:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOKEN":return $({},e,{token:t.payload});case"GET_USER_DATA":return $({},e,{userId:t.payload.id});default:return e}};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={resultOfSearch:null,searchIsLoading:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_UPDATE_RESULTS":return ee({},e,{resultOfSearch:t.payload,searchIsLoading:!1});case"SEARCH_IS_LOADING":return ee({},e,{searchIsLoading:!0});default:return e}};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={playlist:null,tracks:[],tracksLoading:!1,tracksError:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PLAYLIST":case"GET_USER_PLAYLISTS":return ae({},e,{playlist:t.payload});case"CHOOSE_PLAYLIST":return ae({},e,{playlist:e.playlist.filter((function(e){return e.id===t.payload.id}))[0],tracks:t.payload.tracks});case"ADD_TRACKS":return ae({},e,{tracks:t.payload,tracksLoading:!1,tracksError:null});case"ADD_TRACKS_ERROR":return ae({},e,{tracksLoading:!1,tracksError:t.payload});case"ADD_TRACKS_LOADING":return ae({},e,{tracksLoading:!0});case"REMOVE_TRACK_ERROR":return ae({},e,{tracksLoading:!1,tracksError:t.payload});case"REMOVE_TRACK_LOADING":return ae({},e,{tracksLoading:!0});default:return e}},ie=(n(50),n(51),n(52),Object(J.d)(Object(J.c)({playlistReducer:ce,loginReducer:Q,reducer:ne}),Object(J.a)(W.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(a.a.createElement(i.a,{store:ie},a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.8421444b.chunk.js.map