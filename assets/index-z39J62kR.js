import{g as gn,r as c,a as S,p as Q,j as ye}from"./index-dGs5-qm5.js";var Fe={exports:{}},En="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yn=En,mn=yn;function Ie(){}function Me(){}Me.resetWarningCache=Ie;var hn=function(){function e(o,a,s,u,y,i){if(i!==mn){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Me,resetWarningCache:Ie};return r.PropTypes=r,r};Fe.exports=hn();var vn=Fe.exports;const t=gn(vn);var k=function(e,n,r){if(r||arguments.length===2)for(var o=0,a=n.length,s;o<a;o++)(s||!(o in n))&&(s||(s=Array.prototype.slice.call(n,0,o)),s[o]=n[o]);return e.concat(s||Array.prototype.slice.call(n))},Sn=["onCopy","onCut","onPaste"],Pn=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],bn=["onFocus","onBlur"],Rn=["onInput","onInvalid","onReset","onSubmit"],Tn=["onLoad","onError"],wn=["onKeyDown","onKeyPress","onKeyUp"],xn=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],Ln=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],On=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],Cn=["onSelect"],An=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],Dn=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],_n=["onScroll"],kn=["onWheel"],Fn=["onAnimationStart","onAnimationEnd","onAnimationIteration"],In=["onTransitionEnd"],Mn=["onToggle"],Nn=["onChange"],Ne=k(k(k(k(k(k(k(k(k(k(k(k(k(k(k(k(k(k([],Sn,!0),Pn,!0),bn,!0),Rn,!0),Tn,!0),wn,!0),xn,!0),Ln,!0),On,!0),Cn,!0),An,!0),Dn,!0),_n,!0),kn,!0),Fn,!0),In,!0),Nn,!0),Mn,!0);function Ge(e,n){var r={};return Ne.forEach(function(o){var a=e[o];a&&(n?r[o]=function(s){return a(s,n(o))}:r[o]=a)}),r}function ae(e){var n=!1,r=new Promise(function(o,a){e.then(function(s){return!n&&o(s)}).catch(function(s){return!n&&a(s)})});return{promise:r,cancel:function(){n=!0}}}function je(e){var n,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=je(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function he(){for(var e,n,r=0,o="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=je(e))&&(o&&(o+=" "),o+=n);return o}var Gn=!0,Re="Invariant failed";function g(e,n){if(!e){if(Gn)throw new Error(Re);var r=typeof n=="function"?n():n,o=r?"".concat(Re,": ").concat(r):Re;throw new Error(o)}}const Ve=c.createContext(null);function oe({children:e,type:n}){return S.createElement("div",{className:`react-pdf__message react-pdf__message--${n}`},e)}const jn="noopener noreferrer nofollow";class $e{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(n){this.pdfDocument=n}setViewer(n){this.pdfViewer=n}setExternalLinkRel(n){this.externalLinkRel=n}setExternalLinkTarget(n){this.externalLinkTarget=n}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return g(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber||0}set page(n){g(this.pdfViewer,"PDF viewer is not initialized."),this.pdfViewer.currentPageNumber=n}get rotation(){return 0}set rotation(n){}goToDestination(n){return new Promise(r=>{g(this.pdfDocument,"PDF document not loaded."),g(n,"Destination is not specified."),typeof n=="string"?this.pdfDocument.getDestination(n).then(r):Array.isArray(n)?r(n):n.then(r)}).then(r=>{g(Array.isArray(r),`"${r}" is not a valid destination array.`);const o=r[0];new Promise(a=>{g(this.pdfDocument,"PDF document not loaded."),o instanceof Object?this.pdfDocument.getPageIndex(o).then(s=>{a(s)}).catch(()=>{g(!1,`"${o}" is not a valid page reference.`)}):typeof o=="number"?a(o):g(!1,`"${o}" is not a valid destination reference.`)}).then(a=>{const s=a+1;g(this.pdfViewer,"PDF viewer is not initialized."),g(s>=1&&s<=this.pagesCount,`"${s}" is not a valid page number.`),this.pdfViewer.scrollPageIntoView({dest:r,pageIndex:a,pageNumber:s})})})}navigateTo(n){this.goToDestination(n)}goToPage(n){const r=n-1;g(this.pdfViewer,"PDF viewer is not initialized."),g(n>=1&&n<=this.pagesCount,`"${n}" is not a valid page number.`),this.pdfViewer.scrollPageIntoView({pageIndex:r,pageNumber:n})}addLinkAttributes(n,r,o){n.href=r,n.rel=this.externalLinkRel||jn,n.target=o?"_blank":this.externalLinkTarget||""}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}setHash(){}executeNamedAction(){}cachePageRef(){}isPageVisible(){return!0}isPageCached(){return!0}executeSetOCGState(){}}const Oe={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},ve=typeof document<"u",Vn=ve&&window.location.protocol==="file:";function Y(e){return typeof e<"u"}function K(e){return Y(e)&&e!==null}function $n(e){return typeof e=="string"}function Un(e){return e instanceof ArrayBuffer}function Bn(e){return g(ve,"isBlob can only be used in a browser environment"),e instanceof Blob}function xe(e){return $n(e)&&/^data:/.test(e)}function Ce(e){g(xe(e),"Invalid data URI.");const[n="",r=""]=e.split(",");return n.split(";").indexOf("base64")!==-1?atob(r):unescape(r)}function Wn(){return ve&&window.devicePixelRatio||1}function Ae(){}function q(e){e&&e.cancel&&e.cancel()}function me(e,n){return Object.defineProperty(e,"width",{get(){return this.view[2]*n},configurable:!0}),Object.defineProperty(e,"height",{get(){return this.view[3]*n},configurable:!0}),Object.defineProperty(e,"originalWidth",{get(){return this.view[2]},configurable:!0}),Object.defineProperty(e,"originalHeight",{get(){return this.view[3]},configurable:!0}),e}function Ue(e){return e.name==="RenderingCancelledException"}function Hn(e){return new Promise((n,r)=>{const o=new FileReader;o.onload=()=>{if(!o.result)return r(new Error("Error while reading a file."));n(o.result)},o.onerror=a=>{if(!a.target)return r(new Error("Error while reading a file."));const{error:s}=a.target;if(!s)return r(new Error("Error while reading a file."));switch(s.code){case s.NOT_FOUND_ERR:return r(new Error("Error while reading a file: File not found."));case s.SECURITY_ERR:return r(new Error("Error while reading a file: Security error."));case s.ABORT_ERR:return r(new Error("Error while reading a file: Aborted."));default:return r(new Error("Error while reading a file."))}},o.readAsArrayBuffer(e)})}function qn(e,n){switch(n.type){case"RESOLVE":return{value:n.value,error:void 0};case"REJECT":return{value:!1,error:n.error};case"RESET":return{value:void 0,error:void 0};default:return e}}function X(){return c.useReducer(qn,{value:void 0,error:void 0})}const{PDFDataRangeTransport:Jn}=Q,Be=(()=>{const e={};return Ne.forEach(n=>{e[n]=t.func}),e})(),zn=t.oneOfType([t.instanceOf(Int8Array),t.instanceOf(Uint8Array),t.instanceOf(Uint8ClampedArray),t.instanceOf(Int16Array),t.instanceOf(Uint16Array),t.instanceOf(Int32Array),t.instanceOf(Uint32Array),t.instanceOf(Float32Array),t.instanceOf(Float64Array)]),We=[t.string,t.instanceOf(ArrayBuffer),t.shape({data:t.oneOfType([t.string,t.instanceOf(ArrayBuffer),t.arrayOf(t.number.isRequired),zn]).isRequired}),t.shape({range:t.instanceOf(Jn).isRequired}),t.shape({url:t.string.isRequired})];typeof Blob<"u"&&We.push(t.instanceOf(Blob));const He=t.oneOfType([t.string,t.arrayOf(t.string)]),Kn=t.oneOfType(We);t.instanceOf($e);t.oneOf(["_self","_blank","_parent","_top"]);t.shape({commonObjs:t.shape({}).isRequired,getAnnotations:t.func.isRequired,getTextContent:t.func.isRequired,getViewport:t.func.isRequired,render:t.func.isRequired});const Yn=function(n,r,o){const{[r]:a,pageNumber:s,pdf:u}=n;if(!Y(u))return null;if(Y(a)){if(typeof a!="number")return new Error(`\`${r}\` of type \`${typeof a}\` supplied to \`${o}\`, expected \`number\`.`);if(a<0)return new Error(`Expected \`${r}\` to be greater or equal to 0.`);const{numPages:y}=u;if(a+1>y)return new Error(`Expected \`${r}\` to be less or equal to ${y-1}.`)}else if(!Y(s))return new Error(`\`${r}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${o}\`.`);return null},Xn=function(n,r,o){const{[r]:a,pageIndex:s,pdf:u}=n;if(!Y(u))return null;if(Y(a)){if(typeof a!="number")return new Error(`\`${r}\` of type \`${typeof a}\` supplied to \`${o}\`, expected \`number\`.`);if(a<1)return new Error(`Expected \`${r}\` to be greater or equal to 1.`);const{numPages:y}=u;if(a>y)return new Error(`Expected \`${r}\` to be less or equal to ${y}.`)}else if(!Y(s))return new Error(`\`${r}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${o}\`.`);return null},Qn=t.oneOfType([t.any,t.oneOf([!1])]),Le=t.oneOfType([t.func,t.exact({current:t.any})]),Zn=t.oneOf(["canvas","custom","none","svg"]),et=t.oneOf([0,90,180,270]);var nt=function(e,n,r,o){function a(s){return s instanceof r?s:new r(function(u){u(s)})}return new(r||(r=Promise))(function(s,u){function y(E){try{l(o.next(E))}catch(h){u(h)}}function i(E){try{l(o.throw(E))}catch(h){u(h)}}function l(E){E.done?s(E.value):a(E.value).then(y,i)}l((o=o.apply(e,n||[])).next())})},De=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};const{PDFDataRangeTransport:tt}=Q,rt=(e,n)=>{switch(n){case Oe.NEED_PASSWORD:{const r=prompt("Enter the password to open this PDF file.");e(r);break}case Oe.INCORRECT_PASSWORD:{const r=prompt("Invalid password. Please try again.");e(r);break}}},qe=c.forwardRef(function(n,r){var{children:o,className:a,error:s="Failed to load PDF file.",externalLinkRel:u,externalLinkTarget:y,file:i,inputRef:l,imageResourcesPath:E,loading:h="Loading PDF…",noData:v="No PDF file specified.",onItemClick:d,onLoadError:P,onLoadProgress:x,onLoadSuccess:b,onPassword:C=rt,onSourceError:F,onSourceSuccess:L,options:A,renderMode:p,rotate:D}=n,U=De(n,["children","className","error","externalLinkRel","externalLinkTarget","file","inputRef","imageResourcesPath","loading","noData","onItemClick","onLoadError","onLoadProgress","onLoadSuccess","onPassword","onSourceError","onSourceSuccess","options","renderMode","rotate"]);const[B,G]=X(),{value:N,error:f}=B,[V,O]=X(),{value:R,error:W}=V,I=c.useRef(new $e),$=c.useRef([]),j=c.useRef({scrollPageIntoView:m=>{const{dest:w,pageNumber:M,pageIndex:_=M-1}=m;if(d){d({dest:w,pageIndex:_,pageNumber:M});return}const ge=$.current[_];if(ge){ge.scrollIntoView();return}}});c.useImperativeHandle(r,()=>({linkService:I,pages:$,viewer:j}),[]);function H(){L&&L()}function se(){f&&(f.toString(),F&&F(f))}function J(){G({type:"RESET"})}c.useEffect(J,[i,G]);const Z=c.useCallback(()=>nt(this,void 0,void 0,function*(){if(!i)return null;if(typeof i=="string")return xe(i)?{data:Ce(i)}:(Ae(),{url:i});if(i instanceof tt)return{range:i};if(Un(i))return{data:i};if(ve&&Bn(i))return{data:yield Hn(i)};if(g(typeof i=="object","Invalid parameter in file, need either Uint8Array, string or a parameter object"),g("data"in i||"range"in i||"url"in i,"Invalid parameter object: need either .data, .range or .url"),"url"in i&&typeof i.url=="string"){if(xe(i.url)){const{url:m}=i,w=De(i,["url"]),M=Ce(m);return Object.assign({data:M},w)}Ae()}return i}),[i]);c.useEffect(()=>{const m=ae(Z());return m.promise.then(w=>{G({type:"RESOLVE",value:w})}).catch(w=>{G({type:"REJECT",error:w})}),()=>{q(m)}},[Z,G]),c.useEffect(()=>{if(!(typeof N>"u")){if(N===!1){se();return}H()}},[N]);function ie(){R&&(b&&b(R),$.current=new Array(R.numPages),I.current.setDocument(R))}function ce(){W&&(W.toString(),P&&P(W))}function ee(){O({type:"RESET"})}c.useEffect(ee,[O,N]);function ue(){if(!N)return;const m=A?Object.assign(Object.assign({},N),A):N,w=Q.getDocument(m);x&&(w.onProgress=x),C&&(w.onPassword=C);const M=w;return M.promise.then(_=>{O({type:"RESOLVE",value:_})}).catch(_=>{M.destroyed||O({type:"REJECT",error:_})}),()=>{M.destroy()}}c.useEffect(ue,[A,O,N]),c.useEffect(()=>{if(!(typeof R>"u")){if(R===!1){ce();return}ie()}},[R]);function ne(){I.current.setViewer(j.current),I.current.setExternalLinkRel(u),I.current.setExternalLinkTarget(y)}c.useEffect(ne,[u,y]);function pe(m,w){$.current[m]=w}function Pe(m){delete $.current[m]}const z=c.useMemo(()=>({imageResourcesPath:E,linkService:I.current,onItemClick:d,pdf:R,registerPage:pe,renderMode:p,rotate:D,unregisterPage:Pe}),[E,d,R,p,D]),T=c.useMemo(()=>Ge(U,()=>R),[U,R]);function le(){return S.createElement(Ve.Provider,{value:z},o)}function fe(){return i?R==null?S.createElement(oe,{type:"loading"},typeof h=="function"?h():h):R===!1?S.createElement(oe,{type:"error"},typeof s=="function"?s():s):le():S.createElement(oe,{type:"no-data"},typeof v=="function"?v():v)}return S.createElement("div",Object.assign({className:he("react-pdf__Document",a),ref:l,style:{"--scale-factor":"1"}},T),fe())}),Te=t.oneOfType([t.func,t.node]);qe.propTypes=Object.assign(Object.assign({},Be),{children:t.node,className:He,error:Te,externalLinkRel:t.string,externalLinkTarget:t.oneOf(["_self","_blank","_parent","_top"]),file:Kn,imageResourcesPath:t.string,inputRef:Le,loading:Te,noData:Te,onItemClick:t.func,onLoadError:t.func,onLoadProgress:t.func,onLoadSuccess:t.func,onPassword:t.func,onSourceError:t.func,onSourceSuccess:t.func,options:t.shape({canvasFactory:t.any,canvasMaxAreaInBytes:t.number,cMapPacked:t.bool,CMapReaderFactory:t.any,cMapUrl:t.string,disableAutoFetch:t.bool,disableFontFace:t.bool,disableRange:t.bool,disableStream:t.bool,docBaseUrl:t.string,enableXfa:t.bool,filterFactory:t.any,fontExtraProperties:t.bool,httpHeaders:t.object,isEvalSupported:t.bool,isOffscreenCanvasSupported:t.bool,length:t.number,maxImageSize:t.number,ownerDocument:t.any,password:t.string,pdfBug:t.bool,rangeChunkSize:t.number,StandardFontDataFactory:t.any,standardFontDataUrl:t.string,stopAtErrors:t.bool,useSystemFonts:t.bool,useWorkerFetch:t.bool,verbosity:t.number,withCredentials:t.bool,worker:t.any}),rotate:t.number});function Je(){return c.useContext(Ve)}function ze(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=e.filter(Boolean);if(r.length<=1){var o=r[0];return o||null}return function(s){r.forEach(function(u){typeof u=="function"?u(s):u&&(u.current=s)})}}const Ke=c.createContext(null),Ye={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},ot=/^H(\d+)$/;function at(e){return e in Ye}function Se(e){return"children"in e}function Xe(e){return Se(e)?e.children.length===1&&0 in e.children&&"id"in e.children[0]:!1}function st(e){const n={};if(Se(e)){const{role:r}=e,o=r.match(ot);if(o)n.role="heading",n["aria-level"]=Number(o[1]);else if(at(r)){const a=Ye[r];a&&(n.role=a)}}return n}function Qe(e){const n={};if(Se(e)){if(e.alt!==void 0&&(n["aria-label"]=e.alt),e.lang!==void 0&&(n.lang=e.lang),Xe(e)){const[r]=e.children;if(r){const o=Qe(r);return Object.assign(Object.assign({},n),o)}}}else"id"in e&&(n["aria-owns"]=e.id);return n}function it(e){return e?Object.assign(Object.assign({},st(e)),Qe(e)):null}function Ze({className:e,node:n}){const r=c.useMemo(()=>it(n),[n]),o=c.useMemo(()=>!Se(n)||Xe(n)?null:n.children.map((a,s)=>S.createElement(Ze,{key:s,node:a})),[n]);return S.createElement("span",Object.assign({className:e},r),o)}function de(){return c.useContext(Ke)}function ct(){const e=de();g(e,"Unable to find Page context.");const{onGetStructTreeError:n,onGetStructTreeSuccess:r}=e,[o,a]=X(),{value:s,error:u}=o,{customTextRenderer:y,page:i}=e;function l(){s&&r&&r(s)}function E(){u&&(u.toString(),n&&n(u))}function h(){a({type:"RESET"})}c.useEffect(h,[a,i]);function v(){if(y||!i)return;const d=ae(i.getStructTree()),P=d;return d.promise.then(x=>{a({type:"RESOLVE",value:x})}).catch(x=>{a({type:"REJECT",error:x})}),()=>q(P)}return c.useEffect(v,[y,i,a]),c.useEffect(()=>{if(s!==void 0){if(s===!1){E();return}l()}},[s]),s?S.createElement(Ze,{className:"react-pdf__Page__structTree structTree",node:s}):null}const _e=Q.AnnotationMode;function ut(e){const n=de();g(n,"Unable to find Page context.");const r=Object.assign(Object.assign({},n),e),{_className:o,canvasBackground:a,devicePixelRatio:s=Wn(),onRenderError:u,onRenderSuccess:y,page:i,renderForms:l,renderTextLayer:E,rotate:h,scale:v}=r,{canvasRef:d}=e;g(i,"Attempted to render page canvas, but no page was specified.");const P=c.useRef(null);function x(){i&&y&&y(me(i,v))}function b(p){Ue(p)||(p.toString(),u&&u(p))}const C=c.useMemo(()=>i.getViewport({scale:v*s,rotation:h}),[s,i,h,v]),F=c.useMemo(()=>i.getViewport({scale:v,rotation:h}),[i,h,v]);function L(){if(!i)return;i.cleanup();const{current:p}=P;if(!p)return;p.width=C.width,p.height=C.height,p.style.width=`${Math.floor(F.width)}px`,p.style.height=`${Math.floor(F.height)}px`,p.style.visibility="hidden";const D={annotationMode:l?_e.ENABLE_FORMS:_e.ENABLE,canvasContext:p.getContext("2d",{alpha:!1}),viewport:C};a&&(D.background=a);const U=i.render(D),B=U;return U.promise.then(()=>{p.style.visibility="",x()}).catch(b),()=>q(B)}c.useEffect(L,[a,P,s,i,l,C,F]);const A=c.useCallback(()=>{const{current:p}=P;p&&(p.width=0,p.height=0)},[P]);return c.useEffect(()=>A,[A]),S.createElement("canvas",{className:`${o}__canvas`,dir:"ltr",ref:ze(d,P),style:{display:"block",userSelect:"none"}},E?S.createElement(ct,null):null)}function lt(){const e=de();g(e,"Unable to find Page context.");const{_className:n,onRenderSuccess:r,onRenderError:o,page:a,rotate:s,scale:u}=e;g(a,"Attempted to render page SVG, but no page was specified.");const[y,i]=X(),{value:l,error:E}=y;function h(){a&&r&&r(me(a,u))}function v(){E&&(Ue(E)||(E.toString(),o&&o(E)))}const d=c.useMemo(()=>a.getViewport({scale:u,rotation:s}),[a,s,u]);function P(){i({type:"RESET"})}c.useEffect(P,[a,i,d]);function x(){if(!a)return;const L=ae(a.getOperatorList());return L.promise.then(A=>{new Q.SVGGraphics(a.commonObjs,a.objs).getSVG(A,d).then(D=>{if(!(D instanceof SVGElement))throw new Error("getSVG returned unexpected result.");i({type:"RESOLVE",value:D})}).catch(D=>{i({type:"REJECT",error:D})})}).catch(A=>{i({type:"REJECT",error:A})}),()=>q(L)}c.useEffect(x,[a,i,d]),c.useEffect(()=>{if(l!==void 0){if(l===!1){v();return}h()}},[l]);function b(L){if(!L||!l)return;L.firstElementChild||L.appendChild(l);const{width:A,height:p}=d;l.setAttribute("width",`${A}`),l.setAttribute("height",`${p}`)}const{width:C,height:F}=d;return S.createElement("div",{className:`${n}__svg`,ref:L=>b(L),style:{display:"block",backgroundColor:"white",overflow:"hidden",width:C,height:F,userSelect:"none"}})}function ft(e){return"str"in e}function dt(){const e=de();g(e,"Unable to find Page context.");const{customTextRenderer:n,onGetTextError:r,onGetTextSuccess:o,onRenderTextLayerError:a,onRenderTextLayerSuccess:s,page:u,pageIndex:y,pageNumber:i,rotate:l,scale:E}=e;g(u,"Attempted to load page text content, but no page was specified.");const[h,v]=X(),{value:d,error:P}=h,x=c.useRef(null),b=c.useRef();parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10);function C(){d&&o&&o(d)}function F(){P&&(P.toString(),r&&r(P))}function L(){v({type:"RESET"})}c.useEffect(L,[u,v]);function A(){if(!u)return;const f=ae(u.getTextContent()),V=f;return f.promise.then(O=>{v({type:"RESOLVE",value:O})}).catch(O=>{v({type:"REJECT",error:O})}),()=>q(V)}c.useEffect(A,[u,v]),c.useEffect(()=>{if(d!==void 0){if(d===!1){F();return}C()}},[d]);const p=c.useCallback(()=>{s&&s()},[s]),D=c.useCallback(f=>{f.toString(),a&&a(f)},[a]);function U(){const f=b.current;f&&f.classList.add("active")}function B(){const f=b.current;f&&f.classList.remove("active")}const G=c.useMemo(()=>u.getViewport({scale:E,rotation:l}),[u,l,E]);function N(){if(!u||!d)return;const{current:f}=x;if(!f)return;f.innerHTML="";const V=u.streamTextContent({includeMarkedContent:!0}),O={container:f,textContentSource:V,viewport:G},R=Q.renderTextLayer(O),W=R;return R.promise.then(()=>{const I=document.createElement("div");I.className="endOfContent",f.append(I),b.current=I;const $=f.querySelectorAll('[role="presentation"]');if(n){let j=0;d.items.forEach((H,se)=>{if(!ft(H))return;const J=$[j];if(!J)return;const Z=n(Object.assign({pageIndex:y,pageNumber:i,itemIndex:se},H));J.innerHTML=Z,j+=H.str&&H.hasEOL?2:1})}p()}).catch(D),()=>q(W)}return c.useLayoutEffect(N,[n,D,p,u,y,i,d,G]),S.createElement("div",{className:he("react-pdf__Page__textContent","textLayer"),onMouseUp:B,onMouseDown:U,ref:x})}function pt(){const e=Je();g(e,"Unable to find Document context. Did you wrap <Page /> in <Document />?");const n=de();g(n,"Unable to find Page context.");const r=Object.assign(Object.assign({},e),n),{imageResourcesPath:o,linkService:a,onGetAnnotationsError:s,onGetAnnotationsSuccess:u,onRenderAnnotationLayerError:y,onRenderAnnotationLayerSuccess:i,page:l,pdf:E,renderForms:h,rotate:v,scale:d=1}=r;g(l,"Attempted to load page annotations, but no page was specified.");const[P,x]=X(),{value:b,error:C}=P,F=c.useRef(null);parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10);function L(){b&&u&&u(b)}function A(){C&&(C.toString(),s&&s(C))}function p(){x({type:"RESET"})}c.useEffect(p,[x,l]);function D(){if(!l)return;const f=ae(l.getAnnotations()),V=f;return f.promise.then(O=>{x({type:"RESOLVE",value:O})}).catch(O=>{x({type:"REJECT",error:O})}),()=>{q(V)}}c.useEffect(D,[x,l,h]),c.useEffect(()=>{if(b!==void 0){if(b===!1){A();return}L()}},[b]);function U(){i&&i()}function B(f){y&&y(f)}const G=c.useMemo(()=>l.getViewport({scale:d,rotation:v}),[l,v,d]);function N(){if(!E||!l||!b)return;const{current:f}=F;if(!f)return;const V=G.clone({dontFlip:!0}),O={accessibilityManager:null,annotationCanvasMap:null,div:f,l10n:null,page:l,viewport:V},R={annotations:b,annotationStorage:E.annotationStorage,div:f,downloadManager:null,imageResourcesPath:o,linkService:a,page:l,renderForms:h,viewport:V};f.innerHTML="";try{new Q.AnnotationLayer(O).render(R),U()}catch(W){B(W)}return()=>{}}return c.useEffect(N,[b,o,a,l,h,G]),S.createElement("div",{className:he("react-pdf__Page__annotations","annotationLayer"),ref:F})}var gt=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};const ke=1,en=function(n){const r=Je();g(r,"Unable to find Document context. Did you wrap <Page /> in <Document />?");const o=Object.assign(Object.assign({},r),n),{_className:a="react-pdf__Page",_enableRegisterUnregisterPage:s=!0,canvasBackground:u,canvasRef:y,children:i,className:l,customRenderer:E,customTextRenderer:h,devicePixelRatio:v,error:d="Failed to load the page.",height:P,inputRef:x,loading:b="Loading page…",noData:C="No page specified.",onGetAnnotationsError:F,onGetAnnotationsSuccess:L,onGetStructTreeError:A,onGetStructTreeSuccess:p,onGetTextError:D,onGetTextSuccess:U,onLoadError:B,onLoadSuccess:G,onRenderAnnotationLayerError:N,onRenderAnnotationLayerSuccess:f,onRenderError:V,onRenderSuccess:O,onRenderTextLayerError:R,onRenderTextLayerSuccess:W,pageIndex:I,pageNumber:$,pdf:j,registerPage:H,renderAnnotationLayer:se=!0,renderForms:J=!1,renderMode:Z="canvas",renderTextLayer:ie=!0,rotate:ce,scale:ee=ke,unregisterPage:ue,width:ne}=o,pe=gt(o,["_className","_enableRegisterUnregisterPage","canvasBackground","canvasRef","children","className","customRenderer","customTextRenderer","devicePixelRatio","error","height","inputRef","loading","noData","onGetAnnotationsError","onGetAnnotationsSuccess","onGetStructTreeError","onGetStructTreeSuccess","onGetTextError","onGetTextSuccess","onLoadError","onLoadSuccess","onRenderAnnotationLayerError","onRenderAnnotationLayerSuccess","onRenderError","onRenderSuccess","onRenderTextLayerError","onRenderTextLayerSuccess","pageIndex","pageNumber","pdf","registerPage","renderAnnotationLayer","renderForms","renderMode","renderTextLayer","rotate","scale","unregisterPage","width"]),[Pe,z]=X(),{value:T,error:le}=Pe,fe=c.useRef(null);g(j,"Attempted to load a page, but no document was specified.");const m=K($)?$-1:I??null,w=$??(K(I)?I+1:null),M=ce??(T?T.rotate:null),_=c.useMemo(()=>{if(!T)return null;let te=1;const be=ee??ke;if(ne||P){const re=T.getViewport({scale:1,rotation:M});ne?te=ne/re.width:P&&(te=P/re.height)}return be*te},[P,T,M,ee,ne]);function ge(){return()=>{K(m)&&s&&ue&&ue(m)}}c.useEffect(ge,[s,j,m,ue]);function nn(){if(G){if(!T||!_)return;G(me(T,_))}if(s&&H){if(!K(m)||!fe.current)return;H(m,fe.current)}}function tn(){le&&(le.toString(),B&&B(le))}function rn(){z({type:"RESET"})}c.useEffect(rn,[z,j,m]);function on(){if(!j||!w)return;const te=ae(j.getPage(w)),be=te;return te.promise.then(re=>{z({type:"RESOLVE",value:re})}).catch(re=>{z({type:"REJECT",error:re})}),()=>q(be)}c.useEffect(on,[z,j,m,w,H]),c.useEffect(()=>{if(T!==void 0){if(T===!1){tn();return}nn()}},[T,_]);const an=c.useMemo(()=>T&&K(m)&&w&&K(M)&&K(_)?{_className:a,canvasBackground:u,customTextRenderer:h,devicePixelRatio:v,onGetAnnotationsError:F,onGetAnnotationsSuccess:L,onGetStructTreeError:A,onGetStructTreeSuccess:p,onGetTextError:D,onGetTextSuccess:U,onRenderAnnotationLayerError:N,onRenderAnnotationLayerSuccess:f,onRenderError:V,onRenderSuccess:O,onRenderTextLayerError:R,onRenderTextLayerSuccess:W,page:T,pageIndex:m,pageNumber:w,renderForms:J,renderTextLayer:ie,rotate:M,scale:_}:null,[a,u,h,v,F,L,A,p,D,U,N,f,V,O,R,W,T,m,w,J,ie,M,_]),sn=c.useMemo(()=>Ge(pe,()=>T&&(_?me(T,_):void 0)),[pe,T,_]),Ee=`${m}@${_}/${M}`,cn=`${m}/${M}`;function un(){switch(Z){case"custom":return g(E,'renderMode was set to "custom", but no customRenderer was passed.'),S.createElement(E,{key:`${Ee}_custom`});case"none":return null;case"svg":return S.createElement(lt,{key:`${cn}_svg`});case"canvas":default:return S.createElement(ut,{key:`${Ee}_canvas`,canvasRef:y})}}function ln(){return ie?S.createElement(dt,{key:`${Ee}_text`}):null}function fn(){return se?S.createElement(pt,{key:`${Ee}_annotations`}):null}function dn(){return S.createElement(Ke.Provider,{value:an},un(),ln(),fn(),i)}function pn(){return w?j===null||T===void 0||T===null?S.createElement(oe,{type:"loading"},typeof b=="function"?b():b):j===!1||T===!1?S.createElement(oe,{type:"error"},typeof d=="function"?d():d):dn():S.createElement(oe,{type:"no-data"},typeof C=="function"?C():C)}return S.createElement("div",Object.assign({className:he(a,l),"data-page-number":w,ref:ze(x,fe),style:{"--scale-factor":`${_}`,backgroundColor:u||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"}},sn),pn())},we=t.oneOfType([t.func,t.node]);en.propTypes=Object.assign(Object.assign({},Be),{canvasBackground:t.string,canvasRef:Le,children:t.node,className:He,customRenderer:t.func,customTextRenderer:t.func,devicePixelRatio:t.number,error:we,height:t.number,imageResourcesPath:t.string,inputRef:Le,loading:we,noData:we,onGetTextError:t.func,onGetTextSuccess:t.func,onLoadError:t.func,onLoadSuccess:t.func,onRenderError:t.func,onRenderSuccess:t.func,onRenderTextLayerError:t.func,onRenderTextLayerSuccess:t.func,pageIndex:Yn,pageNumber:Xn,pdf:Qn,renderAnnotationLayer:t.bool,renderForms:t.bool,renderMode:Zn,renderTextLayer:t.bool,rotate:et,scale:t.number,width:t.number});const Et="/assets/NOWAR-Whitepaper-mShrYSYv.pdf",yt={cMapUrl:"/cmaps/",standardFontDataUrl:"/standard_fonts/"};function ht(){const[e,n]=c.useState(),[r,o]=c.useState(1);function a({numPages:s}){n(s)}return ye.jsxs("div",{children:[ye.jsx(qe,{file:Et,onLoadSuccess:a,options:yt,children:ye.jsx(en,{pageNumber:r})}),ye.jsxs("p",{children:["Page ",r," of ",e]})]})}export{ht as Whitepaper};
