(this["webpackJsonpnat19-bingo"]=this["webpackJsonpnat19-bingo"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":1,"item":"Merihim flirts with someone"},{"id":2,"item":"Logan mentions art he has not revealed"},{"id":3,"item":"Briar shows up"},{"id":4,"item":"Hayden cries"},{"id":5,"item":"Carrie rolls a one on a d20"},{"id":6,"item":"A player experiences instant karma/regret"},{"id":7,"item":"At least 50% of the players fall for a newly introduced NPC"},{"id":8,"item":"A nat 19 is rolled"},{"id":9,"item":"Bread mentions Pinterest"},{"id":10,"item":"Logan unveils new art (does not count thumbnail)"},{"id":11,"item":"\\"Bread, you need a new computer\\""},{"id":12,"item":"Someone is distracted by fanart"},{"id":13,"item":"Quintus\'s and Merrihim\'s adventure in the swamp is mentioned"},{"id":14,"item":"Someone is not logged into Fantasy Grounds by the time they should be"},{"id":15,"item":"An Avianna bird joke is made"},{"id":16,"item":"A player asks for favor/inspiration after doing the recap"},{"id":17,"item":"Emerald talks"},{"id":18,"item":"\\"Wife?\\""},{"id":19,"item":"Vogun gets crit on"},{"id":20,"item":"Barking or other noise in background"},{"id":21,"item":"Technical difficulties"},{"id":22,"item":"Shit hits the fan in game"},{"id":23,"item":"Someone drops a huge donation or gift subs"},{"id":24,"item":"Discuss weird topic pre-stream"},{"id":25,"item":"A separate/private call occurs"},{"id":26,"item":"\\"Mansion Game\\" chant"},{"id":27,"item":"Spencer complains"},{"id":28,"item":"People complain about doing the recap"},{"id":29,"item":"Multiple rerolls for who does the recap"},{"id":30,"item":"Someone apologizes for long emotional dialogue"},{"id":31,"item":"The time-honored Nat19 tradition of \\"Con-based performance check\\""},{"id":32,"item":"Aaron saying \\"Fahck you\\""},{"id":33,"item":"Logan says \\"Heck\u2019n\\""},{"id":34,"item":"The Dear Ashley Show happens"},{"id":35,"item":"Bread is bullied"},{"id":36,"item":"Logan mentions that he hasn\u2019t had anything to eat yet today"},{"id":37,"item":"Logan has to corral the characters back to the game"},{"id":38,"item":"\\"Sorry Stewie\\""},{"id":39,"item":"Carrie threatens someone"},{"id":40,"item":"Carrie rants"},{"id":41,"item":"Returning a line to someone and saying \\"No You.\\""},{"id":42,"item":"Logan says \\"Are you sure?\\" and the player backs out"},{"id":43,"item":"Logan tricks everyone with minimal effort"},{"id":44,"item":"Bread and Hayden talk about musical theatre"},{"id":45,"item":"Logan is triggered by manatees"},{"id":46,"item":"Quintus RISES WITH THE SUN!!"},{"id":47,"item":"\\"Gottem\\""},{"id":48,"item":"Carrie cries"}]')},36:function(e,t,i){},37:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(19),r=i.n(o),s=(i(36),i(16)),c=i(20),d=i(21),m=i(28),l=i(27),h=(i(37),i(62)),u=i(55),g=i(58),b=i(61),p=i(22),j=i(60),f=i(3);var y=function(){return Object(f.jsx)(u.a,{container:!0,justify:"center",alignItems:"center",children:Object(f.jsx)(b.a,{variant:"h3",gutterBottom:!0,children:"Nat 19 Bingo"})})};var k=function(){return Object(f.jsxs)(u.a,{container:!0,justify:"center",alignItems:"center",children:[Object(f.jsx)(b.a,{gutterBottom:!0,children:"A reminder to the players/gm: please do not do things to purposefully gain bingo sqaures."}),Object(f.jsx)(b.a,{gutterBottom:!0,children:"Also chat, please do not ask the players/gm to do things for bingo squares."})]})};var x=function(){return Object(f.jsx)(u.a,{container:!0,justify:"center",alignItems:"center",children:Object(f.jsx)(b.a,{gutterBottom:!0,children:"Thanks to SpacePegasus for inspiring this idea"})})},w=[],O=Object(j.a)(h.a)({display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"150px",height:"150px",background:"linear-gradient(135deg, #330665 40%, #D00117 90%)",color:"white"}),v=Object(j.a)(h.a)({display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",width:"150px",height:"150px",background:"linear-gradient(45deg, #1e824c 30%, #4ecdc4 90%)",color:"white"}),C=function(e){Object(m.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).markComplete=function(e){var t=e.target.id;n.setState(Object(s.a)({},t,!0))},n.markUnComplete=function(e){var t=e.target.id;n.setState(Object(s.a)({},t,!1))},n.bingoSetup(),n.state={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1,17:!1,18:!1,19:!1,20:!1,21:!1,22:!1,23:!1,24:!1},n}return Object(d.a)(i,[{key:"bingoSetup",value:function(){for(var e,t=p,i=0;i<25;i++)12===i?w.push({id:0,item:"PENIS \n (Free Space)"}):(e=Math.floor(Math.random()*t.length),w.push(t[e]),t.splice(e,1));console.log(w)}},{key:"bingoRow",value:function(e){var t,i=this,n=w.slice(0,5),a=w.slice(5,10),o=w.slice(10,15),r=w.slice(15,20),s=w.slice(20,25);switch(e){case 1:t=n;break;case 2:t=a;break;case 3:t=o;break;case 4:t=r;break;case 5:t=s;break;default:t=n}return Object(f.jsx)(u.a,{container:!0,justify:"center",alignItems:"center",alignContent:"center",spacing:0,children:t.map((function(e){var t=e.id;return!0===i.state[t]?Object(f.jsx)(u.a,{item:!0,xs:0,children:Object(f.jsx)(v,{id:t,children:Object(f.jsx)(g.a,{id:e.id,onClick:i.markUnComplete,children:Object(f.jsx)(b.a,{id:e.id,onClick:i.markUnComplete,gutterBottom:!0,children:e.item})})})},e.id):Object(f.jsx)(u.a,{item:!0,xs:0,children:Object(f.jsx)(O,{children:Object(f.jsx)(g.a,{id:e.id,onClick:i.markComplete,children:Object(f.jsx)(b.a,{id:e.id,onClick:i.markComplete,gutterBottom:!0,children:e.item})})})},e.id)}))})}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(k,{}),this.bingoRow(1),this.bingoRow(2),this.bingoRow(3),this.bingoRow(4),this.bingoRow(5),Object(f.jsx)(x,{})]})}}]),i}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(f.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.50170faf.chunk.js.map