(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{333:function(t,e,r){var content=r(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1fb57095",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";var n=r(333);r.n(n).a},337:function(t,e,r){(e=r(11)(!1)).push([t.i,"a[data-v-50859f1e]{padding:0}",""]),t.exports=e},338:function(t,e,r){"use strict";var n={name:"ArticleListCard",props:{article:{type:Object,required:!0}}},l=(r(336),r(15)),c=r(22),o=r.n(c),v=r(328),d=r(327),h=r(319),f=r(325),m=r(131),_=r(321),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 mb-1",attrs:{nuxt:!0,to:t.article.path,outlined:""}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{xs:"12",sm:"4"}},[r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","max-height":"200",src:t.article.thumbnail}})],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card-title",[t._v(t._s(t.article.title))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n          "+t._s(t.article.date)+"\n        ")]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(t.article.description))])])],1)],1)],1)],1)}),[],!1,null,"50859f1e",null),x=component.exports;o()(component,{VCard:v.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VCol:h.a,VContainer:f.a,VImg:m.a,VRow:_.a});var w={name:"ArticleList",components:{ArticleListCard:x},props:{articles:{type:Array,required:!0}}},C=Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{dense:""}},this._l(this.articles,(function(article){return e("v-col",{key:article.path,attrs:{cols:"12"}},[e("article-list-card",{attrs:{article:article}})],1)})),1)}),[],!1,null,null,null);e.a=C.exports;o()(C,{VCol:h.a,VRow:_.a})},353:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("cf8cf8cc",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";var n=r(353);r.n(n).a},385:function(t,e,r){(e=r(11)(!1)).push([t.i,"a[data-v-63d4795b]{color:#fff!important;text-decoration:none}",""]),t.exports=e},422:function(t,e,r){"use strict";r.r(e);r(67);var n=r(17),l={methods:{eventOfClickedEventDetail:function(){this.$ga.event({eventCategory:"Home",eventAction:"clickButton",eventLabel:"event2020",eventValue:1})}}},c=(r(384),r(15)),o=r(22),v=r.n(o),d=r(97),h=r(319),f=r(325),m=r(131),_=r(321),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{staticClass:"align-center",attrs:{src:"bgFirstView.jpg",height:"100%","max-height":"600px",dark:""}},[r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("\n          2020' TEDxNagoyaU Theme\n        ")]),t._v(" "),r("v-img",{attrs:{src:"keyvisual_white.png"}})],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{sm:"6",xs:"12"}},[r("h1",{staticClass:"display-1 font-weight-thin mb-4 text-decoration-underline"},[t._v("\n          Date 10/11\n        ")]),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"white",to:"/event",nuxt:""},nativeOn:{click:function(e){return t.eventOfClickedEventDetail(e)}}},[t._v("\n          view more\n        ")])],1)],1)],1)],1)}),[],!1,null,"63d4795b",null),x=component.exports;v()(component,{VBtn:d.a,VCol:h.a,VContainer:f.a,VImg:m.a,VRow:_.a});var w=r(1),C=r(386),y=r.n(C);w.a.use(y.a);var V={name:"ShowTalksDiglog",props:{youtubeId:{type:String,required:!1,default:"hogehoge"}},data:function(){return{dialog:!1}}},k=r(417),S=r(153),O=Object(c.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"red",text:""}},"v-btn",l,!1),n),[r("v-icon",{attrs:{large:""}},[t._v("\n        mdi-youtube\n      ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("youtube",{ref:"youtube",attrs:{"video-id":t.youtubeId,resize:!0}})],1)}),[],!1,null,null,null),T=O.exports;v()(O,{VBtn:d.a,VDialog:k.a,VIcon:S.a});var j={name:"ShowTalks",components:{ShowTalksDialog:T},props:{speakers:{type:Array,required:!0}},data:function(){return{youtubeModalOn:!1,youtubeModalData:""}},computed:{shuffleSlicedSpeakers:function(){return Object.create(this.speakers).sort((function(){return Math.random()-.5})).slice(0,4)}}},E=r(328),A=r(327),D=Object(c.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("h1",{staticClass:"pl-3 text-h5"},[t._v("\n        TEDxNagoyaU Talk\n      ")])]),t._v(" "),r("v-row",{attrs:{align:"center"}},t._l(t.shuffleSlicedSpeakers,(function(e){return r("v-col",{key:e.name,attrs:{sm:"12",md:"6"}},[r("v-card",[r("v-img",{staticClass:"align-end",attrs:{src:e.img}},[r("div",{staticStyle:{background:"rgba(0,0,0,0.3)"}},[r("v-container",{staticClass:"pa-0"},[r("v-row",[r("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"8"}},[r("v-card-title",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),r("v-card-subtitle",{staticClass:"white--text"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1),t._v(" "),r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"4"}},[r("show-talks-dialog",{attrs:{"youtube-id":e.youtubeId}})],1)],1)],1)],1)])],1)],1)})),1)],1)],1)}),[],!1,null,null,null),$=D.exports;v()(D,{VCard:E.a,VCardSubtitle:A.b,VCardTitle:A.d,VCol:h.a,VContainer:f.a,VImg:m.a,VRow:_.a});var I={name:"ShowArticles",components:{ArticleList:r(338).a},props:{articles:{type:Array,required:!0}}},R=Object(c.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("h2",{staticClass:"pl-5 text-h5"},[this._v("\n      Articles\n    ")])]),this._v(" "),e("article-list",{attrs:{articles:this.articles}})],1)}),[],!1,null,null,null),L=R.exports;v()(R,{VContainer:f.a,VRow:_.a});var M={layout:"full",components:{FirstView:x,ShowTalks:$,ShowArticles:L},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("talks","2019").fetch();case 3:return n=e.sent,e.next=6,r("articles",{deep:!0}).limit(3).fetch();case 6:return l=e.sent,e.abrupt("return",{speakers:n,articles:l});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:"TEDxNagoyaU"}}},B=Object(c.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("first-view"),this._v(" "),e("show-talks",{attrs:{speakers:this.speakers}}),this._v(" "),e("show-articles",{attrs:{articles:this.articles}})],1)}),[],!1,null,null,null);e.default=B.exports}}]);