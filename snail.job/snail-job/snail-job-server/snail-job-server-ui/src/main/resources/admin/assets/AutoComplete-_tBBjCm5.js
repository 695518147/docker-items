import{bo as ee,b3 as x,bZ as te,d as ne,b4 as le,b6 as ae,r as m,b8 as oe,b9 as se,b7 as V,b_ as ie,a as v,b$ as re,ba as ue,bP as de,c0 as F,al as u,c1 as ce,c2 as me,c3 as fe,D as he,c4 as ve,O as ge,c5 as pe,c6 as be,c7 as Se,c8 as Te,c9 as ye,be as f}from"./index--PhRNylI.js";function Ce(t){return t.map(A)}function A(t){var i,l;return typeof t=="string"?{label:t,value:t}:t.type==="group"?{type:"group",label:(i=t.label)!==null&&i!==void 0?i:t.name,value:(l=t.value)!==null&&l!==void 0?l:t.name,key:t.key||t.name,children:t.children.map(a=>A(a))}:t}const _e=ee([x("auto-complete",`
 z-index: auto;
 position: relative;
 display: inline-flex;
 width: 100%;
 `),x("auto-complete-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[te({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Fe=Object.assign(Object.assign({},V.props),{to:F.propTo,menuProps:Object,append:Boolean,bordered:{type:Boolean,default:void 0},clearable:{type:Boolean,default:void 0},defaultValue:{type:String,default:null},loading:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:String,placement:{type:String,default:"bottom-start"},value:String,blurAfterSelect:Boolean,clearAfterSelect:Boolean,getShow:Function,showEmpty:Boolean,inputProps:Object,renderOption:Function,renderLabel:Function,size:String,options:{type:Array,default:()=>[]},zIndex:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onSelect:[Function,Array],onBlur:[Function,Array],onFocus:[Function,Array],onInput:[Function,Array]}),we=ne({name:"AutoComplete",props:Fe,setup(t){const{mergedBorderedRef:i,namespaceRef:l,mergedClsPrefixRef:o,inlineThemeDisabled:a}=le(t),h=ae(t),{mergedSizeRef:M,mergedDisabledRef:z,mergedStatusRef:P}=h,T=m(null),g=m(null),y=m(t.defaultValue),k=oe(t,"value"),p=se(k,y),d=m(!1),C=m(!1),R=V("AutoComplete","-auto-complete",_e,ie,t,o),w=v(()=>Ce(t.options)),D=v(()=>{const{getShow:e}=t;return e?e(p.value||""):!!p.value}),E=v(()=>D.value&&d.value&&(t.showEmpty?!0:!!w.value.length)),$=v(()=>re(w.value,Te("value","children")));function b(e){const{"onUpdate:value":n,onUpdateValue:s,onInput:r}=t,{nTriggerFormInput:S,nTriggerFormChange:Y}=h;s&&f(s,e),n&&f(n,e),r&&f(r,e),y.value=e,S(),Y()}function j(e){const{onSelect:n}=t,{nTriggerFormInput:s,nTriggerFormChange:r}=h;n&&f(n,e),s(),r()}function U(e){const{onBlur:n}=t,{nTriggerFormBlur:s}=h;n&&f(n,e),s()}function N(e){const{onFocus:n}=t,{nTriggerFormFocus:s}=h;n&&f(n,e),s()}function L(){C.value=!0}function K(){window.setTimeout(()=>{C.value=!1},0)}function H(e){var n,s,r;switch(e.key){case"Enter":if(!C.value){const S=(n=g.value)===null||n===void 0?void 0:n.getPendingTmNode();S&&(O(S.rawNode),e.preventDefault())}break;case"ArrowDown":(s=g.value)===null||s===void 0||s.next();break;case"ArrowUp":(r=g.value)===null||r===void 0||r.prev();break}}function O(e){(e==null?void 0:e.value)!==void 0&&(j(e.value),t.clearAfterSelect?b(null):e.label!==void 0&&b(t.append?`${p.value}${e.label}`:e.label),d.value=!1,t.blurAfterSelect&&X())}function Z(){b(null)}function q(e){d.value=!0,N(e)}function G(e){d.value=!1,U(e)}function J(e){d.value=!0,b(e)}function Q(e){O(e.rawNode)}function W(e){var n;!((n=T.value)===null||n===void 0)&&n.contains(ye(e))||(d.value=!1)}function X(){var e,n;!((e=T.value)===null||e===void 0)&&e.contains(document.activeElement)&&((n=document.activeElement)===null||n===void 0||n.blur())}const B=v(()=>{const{common:{cubicBezierEaseInOut:e},self:{menuBoxShadow:n}}=R.value;return{"--n-menu-box-shadow":n,"--n-bezier":e}}),c=a?ue("auto-complete",void 0,B,t):void 0,_=m(null),I={focus:()=>{var e;(e=_.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=_.value)===null||e===void 0||e.blur()}};return{focus:I.focus,blur:I.blur,inputInstRef:_,uncontrolledValue:y,mergedValue:p,isMounted:de(),adjustedTo:F(t),menuInstRef:g,triggerElRef:T,treeMate:$,mergedSize:M,mergedDisabled:z,active:E,mergedStatus:P,handleClear:Z,handleFocus:q,handleBlur:G,handleInput:J,handleToggle:Q,handleClickOutsideMenu:W,handleCompositionStart:L,handleCompositionEnd:K,handleKeyDown:H,mergedTheme:R,cssVars:a?void 0:B,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,mergedBordered:i,namespace:l,mergedClsPrefix:o}},render(){const{mergedClsPrefix:t}=this;return u("div",{class:`${t}-auto-complete`,ref:"triggerElRef",onKeydown:this.handleKeyDown,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd},u(ce,null,{default:()=>[u(me,null,{default:()=>{if(this.$slots.default)return fe(this.$slots,"default",{handleInput:this.handleInput,handleFocus:this.handleFocus,handleBlur:this.handleBlur,value:this.mergedValue});const{mergedTheme:l}=this;return u(he,{ref:"inputInstRef",status:this.mergedStatus,theme:l.peers.Input,themeOverrides:l.peerOverrides.Input,bordered:this.mergedBordered,value:this.mergedValue,placeholder:this.placeholder,size:this.mergedSize,disabled:this.mergedDisabled,clearable:this.clearable,loading:this.loading,inputProps:this.inputProps,onClear:this.handleClear,onFocus:this.handleFocus,onUpdateValue:this.handleInput,onBlur:this.handleBlur},{suffix:()=>{var o,a;return(a=(o=this.$slots).suffix)===null||a===void 0?void 0:a.call(o)},prefix:()=>{var o,a;return(a=(o=this.$slots).prefix)===null||a===void 0?void 0:a.call(o)}})}}),u(ve,{show:this.active,to:this.adjustedTo,containerClass:this.namespace,zIndex:this.zIndex,teleportDisabled:this.adjustedTo===F.tdkey,placement:this.placement,width:"target"},{default:()=>u(ge,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>{var i;if((i=this.onRender)===null||i===void 0||i.call(this),!this.active)return null;const{menuProps:l}=this;return pe(u(Se,Object.assign({},l,{clsPrefix:t,ref:"menuInstRef",theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,"auto-pending":!0,class:[`${t}-auto-complete-menu`,this.themeClass,l==null?void 0:l.class],style:[l==null?void 0:l.style,this.cssVars],treeMate:this.treeMate,multiple:!1,renderLabel:this.renderLabel,renderOption:this.renderOption,size:"medium",onToggle:this.handleToggle}),{empty:()=>{var o,a;return(a=(o=this.$slots).empty)===null||a===void 0?void 0:a.call(o)}}),[[be,this.handleClickOutsideMenu,void 0,{capture:!0}]])}})})]}))}});export{we as _};