(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{724:function(e,t,n){"use strict";n.r(t),n.d(t,"MarkdownEditor",function(){return g});var i=n(0),r=n.n(i),o=n(673),s=n.n(o),a=n(8),l=n(16),d=n(3),c=n(262),p=n.n(c),u=function(e,t,n,i){var r,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,n,s):r(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}l((i=i.apply(e,t||[])).next())})};let g=class extends r.a.Component{constructor(e){super(e),this.textArea=null,this.mde=null,this.isEditing=!1,this.converter=new s.a.Converter}get note(){return this.props.note}get htmlContent(){return this.converter.makeHtml(this.note.content)}render(){return this.isEditing?r.a.createElement("div",{style:{background:"white"}},r.a.createElement("textarea",{ref:this.registerTextArea})):r.a.createElement(p.a,{onDoubleClick:this.handleDoubleClick,style:{overflow:"hidden",padding:"10px",minHeight:"45px"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.htmlContent}}))}handleDoubleClick(){this.isEditing=!0}registerTextArea(e){this.textArea=e,e&&this.setupEditor()}setupEditor(){return y(this,void 0,void 0,function*(){yield n.e(13).then(n.t.bind(null,672,7));const e=(yield Promise.all([n.e(8),n.e(9),n.e(12)]).then(n.t.bind(null,670,7))).default;this.mde=new e({element:this.textArea,initialValue:this.note.content}),this.mde.codemirror.on("change",()=>{this.note.setContent(this.mde.value())})})}};u([d.t,h("design:type",Object)],g.prototype,"isEditing",void 0),u([d.g,h("design:type",Object),h("design:paramtypes",[])],g.prototype,"note",null),u([d.g,h("design:type",Object),h("design:paramtypes",[])],g.prototype,"htmlContent",null),u([a.a,h("design:type",Function),h("design:paramtypes",[]),h("design:returntype",void 0)],g.prototype,"handleDoubleClick",null),u([a.a,h("design:type",Function),h("design:paramtypes",[Object]),h("design:returntype",void 0)],g.prototype,"registerTextArea",null),u([a.a,h("design:type",Function),h("design:paramtypes",[]),h("design:returntype",Promise)],g.prototype,"setupEditor",null),g=u([l.d,h("design:paramtypes",[Object])],g)}}]);