function createLeaf(){const e=document.createElement("div");e.innerHTML="<div id='leaf'>",e.classList.add("leaf"),document.body.appendChild(e),e.style.left=100*Math.random()+"vw",e.style.animationDuration=5*math.random()+8+"s",setTimeout((()=>{e.remove()}),5e3)}setInterval(createLeaf,2500);
//# sourceMappingURL=script.js.map