import{D as e,j as t,k as n,t as r}from"./jsx-runtime-CKB6wEmR.js";import{i}from"./dist-zKs-D_7z.js";import{t as a}from"./useInterpreter-pfy4MR7m.js";var o=t(n(),1),s=r(),c=`a1 = arr[1, 10, 5, 6, 4, 7, 19]
key = 4

fun Linear_Search(a, k):
    for n in a:
        if n == k:
            return n
        end if
    end for
    return -1
end fun

Linear_Search(a1, key)`,l=e(function(){let[e,t]=(0,o.useState)(c),[n,r]=(0,o.useState)(`js`),[l,u,d,f]=a(e);return(0,s.jsxs)(`div`,{className:`overflow-y-scroll max-h-screen`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h2`,{children:`Input Pseudocode`}),(0,s.jsx)(`textarea`,{value:e,onChange:e=>t(e.target.value),spellCheck:`false`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h2`,{children:`Output`}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{onClick:()=>r(`js`),children:`JavaScript`}),(0,s.jsx)(i,{onClick:()=>r(`tree`),children:`Parse Tree`}),(0,s.jsx)(i,{onClick:()=>r(`trace`),children:`Execution Trace`})]})]}),(0,s.jsx)(`pre`,{children:f||(n===`js`?l:n===`tree`?u:d)})]})});export{l as default};