(this.webpackJsonpforest=this.webpackJsonpforest||[]).push([[0],{118:function(t,e,i){},119:function(t,e,i){},120:function(t,e,i){},264:function(t,e,i){"use strict";i.r(e);var a=i(6),n=i.n(a),s=i(107),o=i.n(s),r=(i(118),i(37)),h=(i(119),i(120),i(27)),c=i(1),l=i(2),d=i(0),u=i(108),m=i(113),p=i(109),b=i.p+"static/media/BambooWithBones.78755282.fbx",f=i.p+"static/media/diffuse.82a49499.jpg",v=i.p+"static/media/alpha.d3f17e68.jpg",w=function(){function t(e,i,a,n){Object(c.a)(this,t),this.material=new d.C({map:e.load(f),alphaMap:e.load(v),alphaTest:.5,side:d.l,opacity:1,transparent:!0}),this.treeCount=i,this.xPositionRange=a/2,this.zPositionRange=n/2,this.swayAngle=0,this.trees=[],this.animatedTrees=[],this.isFadingIn=!1}return Object(l.a)(t,[{key:"load",value:function(t){var e=this;(new m.a).load(b,(function(i){i.traverse((function(t){t instanceof d.T&&(t.material=e.material)}));for(var a=0;a<e.treeCount;a++){var n=p.a.clone(i);n.position.x=d.y.randFloat(-e.xPositionRange,e.xPositionRange),n.position.z=d.y.randFloat(-e.zPositionRange,e.zPositionRange),n.rotation.y=2*Math.PI*d.y.randFloat(0,1);var s=d.y.randFloat(.5,1.25);n.scale.x=s,n.scale.y=s,n.scale.z=s,t.add(n),e.trees.push(n)}}))}},{key:"makeVisible",value:function(){this.material.opacity=1,this.isFadingIn=!1}},{key:"fadeIn",value:function(){this.material.opacity<.8?(this.isFadingIn=!0,this.material.opacity=.8):this.material.opacity<1?this.material.opacity+=.001:this.material.opacity>1&&(this.isFadingIn=!1,this.material.opacity=1)}},{key:"swayAnimation",value:function(){if(this.trees!==[]){var t,e=Math.PI/8192,i=Math.PI/360,a=Math.sin(this.swayAngle)*e,n=Object(h.a)(this.trees);try{for(n.s();!(t=n.n()).done;)for(var s=t.value,o=s.rotation.y,r=s.children[1],c=(Math.cos(o),Math.sin(o),0);c<r.skeleton.bones.length;c++){var l=r.skeleton.bones[c];l.rotation.x+=a,l.rotation.z=a}}catch(d){n.e(d)}finally{n.f()}this.swayAngle+=i}}},{key:"mouseOverAnimation",value:function(t){}}]),t}(),y=i.p+"static/media/grass.3be89642.jpg",g=function(){function t(e,i,a){Object(c.a)(this,t);var n=e.load(y);n.wrapS=d.P,n.wrapT=d.P,n.repeat.set(4,4),this.material=new d.C({map:n,side:d.l,opacity:0,transparent:!0}),this.width=i,this.height=a}return Object(l.a)(t,[{key:"load",value:function(t){var e=new d.J(this.width,this.height),i=new d.B(e,this.material);i.rotation.x=Math.PI/2,t.add(i)}},{key:"makeVisible",value:function(){this.material.opacity=1}},{key:"fadeIn",value:function(){this.material.opacity<1?this.material.opacity+=.005:this.material.opacity>1&&(this.material.opacity=1)}}]),t}(),j=i.p+"static/media/wood.b467f5fc.jpg",O=function(){function t(e,i,a){Object(c.a)(this,t);var n=e.load(j);n.wrapS=d.P,n.wrapT=d.P,n.repeat.set(7,1),this.material=new d.C({map:n,side:d.l,opacity:0,transparent:!0}),this.width=i,this.height=a,this.relativeXPos=i/2+2.5,this.relativeZPos=a/2+2.5}return Object(l.a)(t,[{key:"load",value:function(t){var e=new d.B(new d.e(this.width,20,5),this.material);e.position.z=-this.relativeZPos,e.position.y=10,t.add(e);var i=e.clone();i.position.z=this.relativeZPos,i.position.y=10,t.add(i);var a=new d.B(new d.e(this.height+10,20,5),this.material);a.rotation.y=Math.PI/2,a.position.x=this.relativeXPos,a.position.z=0,a.position.y=10,t.add(a);var n=a.clone();n.position.x=-this.relativeXPos,t.add(n)}},{key:"makeVisible",value:function(){this.material.opacity=1}},{key:"fadeIn",value:function(){this.material.opacity<1?this.material.opacity+=.005:this.material.opacity>1&&(this.material.opacity=1)}}]),t}(),k=function(){function t(e,i){Object(c.a)(this,t),this.camera=new d.I(45,window.innerWidth/window.innerHeight,.1,1e5),this.camera.position.set(0,250,500),this.renderer=new d.eb({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor("rgb(40, 44, 52)"),this.controls=new u.a(this.camera,this.renderer.domElement),this.controls.target=new d.bb(0,110,0),this.controls.update(),this.scene=new d.Q,this.raycaster=new d.O,this.mouse=new d.ab,this.textureLoader=new d.Y,this.initModels(i),this.loadScene(),this.render()}return Object(l.a)(t,[{key:"render",value:function(){var t=this;!function e(){t.animationFrameId=requestAnimationFrame(e),t.fadeIn(),t.bamboo.swayAnimation(),t.renderer.render(t.scene,t.camera)}()}},{key:"update",value:function(t){this.clearScene(),this.initModels(t),this.loadScene()}},{key:"initModels",value:function(t){this.bamboo=new w(this.textureLoader,t.trees,t.width,t.height),this.grass=new g(this.textureLoader,t.width,t.height),this.sideboard=new O(this.textureLoader,t.width,t.height)}},{key:"loadScene",value:function(){var t="white";this.scene.fog=new d.r(t,1,900),this.scene.background=new d.i(t),this.scene.add(new d.a(3355443,15)),this.bamboo.load(this.scene),this.bamboo.makeVisible(),this.grass.load(this.scene),this.grass.makeVisible(),this.sideboard.load(this.scene),this.sideboard.makeVisible()}},{key:"clearScene",value:function(){var t=[];this.scene.traverse((function(e){t.push(e)}));for(var e=0,i=t;e<i.length;e++){var a=i[e];this.scene.remove(a)}}},{key:"fadeIn",value:function(){this.bamboo.fadeIn(),this.grass.fadeIn(),this.sideboard.fadeIn()}},{key:"onMouseMove",value:function(t,e){this.mouse.x=parseFloat(t),this.mouse.y=parseFloat(e),this.raycaster.setFromCamera(this.mouse,this.camera);var i,a=this.raycaster.intersectObjects(this.bamboo.trees,!0),n=Object(h.a)(a);try{for(n.s();!(i=n.n()).done;){var s=i.value;this.bamboo.mouseOverAnimation(s.object.parent)}}catch(o){n.e(o)}finally{n.f()}}}]),t}(),x=i(11);var P=function(t){var e=Object(a.useRef)(null),i=Object(a.useRef)(null);return Object(a.useEffect)((function(){i.current=new k(e.current,t.settings),e.current.onmousemove=function(t){if(!i.current.bamboo.isFadingIn){var e=t.clientX/window.innerWidth*2-1,a=-t.clientY/window.innerHeight*2+1;i.current.onMouseMove(e,a)}}}),[]),Object(a.useEffect)((function(){t.updateCount>0&&i.current.update(t.settings)}),[t.updateCount]),Object(x.jsx)("div",{children:Object(x.jsx)("canvas",{ref:e,width:window.innerWidth,height:window.innerHeight,className:"canvas",children:Object(x.jsx)("p",{children:"Your browser doesn't support canvas."})})})},I=i(28);i(263);var F=function(){var t=Object(a.useState)({width:300,height:300,trees:400}),e=Object(r.a)(t,2),i=e[0],n=e[1],s=Object(a.useState)(0),o=Object(r.a)(s,2),h=o[0],c=o[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(I.c,{data:i,onUpdate:function(t){n({width:t.width,height:t.height,trees:t.trees})},children:[Object(x.jsx)(I.b,{path:"width",label:"Width",min:10,max:1e3,step:1}),Object(x.jsx)(I.b,{path:"height",label:"Height",min:10,max:1e3,step:1}),Object(x.jsx)(I.b,{path:"trees",label:"Trees",min:1,max:1e3,step:1}),Object(x.jsx)(I.a,{label:"Update",onClick:function(){c(h+1)}})]}),Object(x.jsx)(P,{settings:i,updateCount:h})]})},M=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,265)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),a(t),n(t),s(t),o(t)}))};o.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),M()}},[[264,1,2]]]);
//# sourceMappingURL=main.28e6421f.chunk.js.map