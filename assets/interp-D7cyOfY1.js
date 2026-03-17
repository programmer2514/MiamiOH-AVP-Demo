import{w as p,a,o as e}from"./chunk-LFPYN7LY-qL5df3Qo.js";import{B as s}from"./chunk-UIGTWEVF-qfANE4cl.js";import{u as h}from"./useInterpreter-B8J5ytc7.js";import"./index-DzNR5hxH.js";const x=`a1 = arr[1, 10, 5, 6, 4, 7, 19]
key = 4

fun Linear_Search(a, k):
    for n in a:
        if n == k:
            return n
        end if
    end for
    return -1
end fun

Linear_Search(a1, key)`,C=p(function(){const[t,c]=a.useState(x),[n,r]=a.useState("js"),[i,d,l,o]=h(t);return e.jsxs("div",{className:"overflow-y-scroll max-h-screen",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Input Pseudocode"}),e.jsx("textarea",{value:t,onChange:u=>c(u.target.value),spellCheck:"false"})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Output"}),e.jsxs("div",{children:[e.jsx(s,{onClick:()=>r("js"),children:"JavaScript"}),e.jsx(s,{onClick:()=>r("tree"),children:"Parse Tree"}),e.jsx(s,{onClick:()=>r("trace"),children:"Execution Trace"})]})]}),e.jsx("pre",{children:o||(n==="js"?i:n==="tree"?d:l)})]})});export{C as default};
