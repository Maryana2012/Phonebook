"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{9764:function(e,n,a){a.r(n),a.d(n,{default:function(){return K}});var t=a(2791),s=a(9434),r=a(9439),c=function(e){return e.contactReducer.filter},l=function(e){return e.contactReducer.contact},o=function(e){return e.contactReducer.isLoading},i=function(e){return e.contactReducer.errorContact},m=a(7490),u=a(2844),_=a(9085),d="Form_form__container__0Ze0A",x="Form_input__FTtTw",h="Form_label__8nx+5",j="Form_label__form__wlLL9",v="Form_button__8NOIT",f=a(3329);function p(e){var n=e.id,a=e.name,c=e.number,o=e.onClose,i=(0,s.I0)(),p=(0,s.v9)(l),N=(0,t.useState)(a),b=(0,r.Z)(N,2),C=b[0],F=b[1],k=(0,t.useState)(c),w=(0,r.Z)(k,2),g=w[0],y=w[1];return(0,f.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var t=e.target,s={id:n,name:t.elements.name.value,number:t.elements.phone.value};if(a)i((0,m.Tk)(s)),o();else{if(p.some((function(e){return e.name.toLowerCase()===t.elements.name.value.toLowerCase()})))return void _.Am.error("".concat(t.elements.name.value," is already in contacts"));i((0,m.uK)(s))}t.reset()},children:[(0,f.jsxs)("label",{htmlFor:"",className:h,children:[(0,f.jsx)("span",{className:j,children:"Name"}),a?(0,f.jsx)("input",{className:x,type:"text",name:"name",value:C,onChange:function(e){F(e.target.value)},required:!0}):(0,f.jsx)("input",{className:x,type:"text",name:"name",required:!0})]}),(0,f.jsxs)("label",{htmlFor:"",className:h,children:[(0,f.jsx)("span",{className:j,children:"Number"}),c?(0,f.jsx)("input",{className:x,type:"tel",name:"phone",value:g,onChange:function(e){y(e.target.value)},required:!0}):(0,f.jsx)("input",{className:x,type:"tel",name:"phone",required:!0})]}),(0,f.jsx)(u.z,{colorScheme:"yellow",size:"md",className:v,type:"submit",children:a?"Update":"Add Contact"})]})}var N=a(6355),b=a(8820),C="Modal_modal__DJDMv",F="Modal_button__PTCbC",k="Modal_backdrop__xTnIT",w=function(e){var n=e.id,a=e.name,t=e.number,s=e.onClose;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:k,onClick:s}),(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)(p,{id:n,name:a,number:t,onClose:s}),(0,f.jsx)("button",{className:F,onClick:s,children:(0,f.jsx)(b.oHP,{})})]})]})},g="Contact_item__j+P5X",y="Contact_text_name__wo51U",L="Contact_text_number__KZa7z",I="Contact_button_container__qIA86",T="Contact_button__F+kJb",z="Contact_container__J1LZ1",P="Contact_svg__EPIz8";function R(e){var n=e.id,a=e.name,c=e.number,l=(0,t.useState)(!1),o=(0,r.Z)(l,2),i=o[0],_=o[1],d=(0,s.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("li",{className:g,children:[(0,f.jsxs)("div",{className:z,children:[(0,f.jsx)(N.Xws,{className:P}),(0,f.jsx)("span",{className:y,children:a})]}),(0,f.jsxs)("div",{className:z,children:[(0,f.jsx)(N.DNl,{className:P}),(0,f.jsx)("span",{className:L,children:c})]}),(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)(u.z,{colorScheme:"yellow",className:T,type:"button",onClick:function(){return d((0,m.GK)(n))},children:"Delete"}),(0,f.jsx)(u.z,{colorScheme:"yellow",className:T,type:"button",onClick:function(){_(!0)},children:"Update"})]})]},n),i&&(0,f.jsx)(w,{isOpen:i,id:n,name:a,number:c,onClose:function(){_(!1)}})]})}var S="ContactList_list__csErn";function D(){var e=(0,s.v9)(c),n=(0,s.v9)(l).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort((function(e,n){return e.name.localeCompare(n.name)}));return(0,f.jsx)("ul",{className:S,children:n.map((function(e){return(0,f.jsx)(R,{id:e._id,name:e.name,number:e.number},e._id)}))})}var Z=a(8857),q="Filter_input__N7T3z",A="Filter_label__vEd1E";function E(){var e=(0,s.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("label",{htmlFor:"",className:A,children:"Find contact by name "}),(0,f.jsx)("input",{type:"text",className:q,name:"filter",onChange:function(n){e((0,Z.s)(n.target.value))}})]})}var J="PhoneBook_main__sRxgF",M="PhoneBook_container__JI9R8",B="PhoneBook_title__RkD7r";function K(){var e=(0,s.I0)(),n=(0,s.v9)(l),a=(0,s.v9)(o),r=(0,s.v9)(i);return(0,t.useEffect)((function(){e((0,m.yF)())}),[e]),(0,f.jsxs)("main",{className:J,children:[(0,f.jsxs)("div",{className:M,children:[(0,f.jsx)("h2",{className:B,children:"Add new contact"}),(0,f.jsx)(p,{})]}),(0,f.jsxs)("div",{className:M,children:[(0,f.jsx)("h2",{className:B,children:"Contacts"}),a&&(0,f.jsx)("p",{children:"Loading contacts..."}),r&&(0,f.jsx)("p",{children:r}),(0,f.jsx)(E,{}),n&&(0,f.jsx)(D,{})]})]})}}}]);
//# sourceMappingURL=764.bda272fc.chunk.js.map