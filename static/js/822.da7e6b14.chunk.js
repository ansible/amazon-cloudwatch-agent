"use strict";(self.webpackChunkperformance_benchmark=self.webpackChunkperformance_benchmark||[]).push([[822],{5762:function(e,t,r){r.d(t,{l:function(){return n}});var n=r(9610).Z.create({baseURL:"https://ihir3eit37.execute-api.us-west-2.amazonaws.com/default/performance_api",timeout:3e3,headers:{},responseType:"json",maxRedirects:21})},5097:function(e,t,r){r.d(t,{DQ:function(){return n},Z8:function(){return s},fr:function(){return o},m_:function(){return i},tF:function(){return a},xm:function(){return c}});var n=["statsd","logs","disk"],a=["procstat_cpu_usage","procstat_memory_rss","procstat_memory_swap","procstat_memory_vms","procstat_memory_data","procstat_num_fds","procstat_write_bytes","net_bytes_sent","net_packets_sent"],o=[100,1e3,5e3],s="aws",i="AmazonCloudWatchAgent",c={procstat_cpu_usage:"CPU Usage",procstat_memory_rss:"Memory Resource",procstat_memory_swap:"Memory Swap",procstat_memory_vms:"Virtual Memory",procstat_memory_data:"Swap Memory",procstat_num_fds:"File Descriptors",procstat_write_bytes:"Write Disk Bytes",net_bytes_sent:"Net Bytes Sent",net_packets_sent:"Net Packages Sent"}},243:function(e,t,r){r.d(t,{u:function(){return _}});var n=r(4165),a=r(5861),o=r(9439),s=r(7313),i=r(9666),c=r(6149),u=r(3604),l=r(6467),d=r(2868),p=r(891),f=r(6793),m=r(7592),h=r(5207),x=r(5762),v=r(6417),b=(0,m.ZP)(i.Z)((function(e){e.theme;return{"& label.Mui-focused":{color:"#FFF"},"& .MuiInput-input":{color:"#FFF"},"& .MuiInput-underline:after":{borderBottomColor:"#FFF"},"& .Mui-error Mui-focused":{color:"red"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#FFF",color:"#FFF"},"&:hover fieldset":{borderColor:"#FFF",color:"#FFF"},"&.Mui-focused fieldset":{borderColor:"#FFF",color:"#FFF"}}}}));function _(e){var t=function(){var e=s.useState({error:!1,loading:!1}),t=(0,o.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),r=(0,o.Z)(t,2),i=r[0],m=i.error,_=i.loading,g=r[1],w=e.password,Z=e.password_is_set,F=e.set_password_state,y=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F({password_is_set:!1,password:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next="Enter"===e.t0?3:5;break;case 3:return j(),e.abrupt("break",6);case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({loading:!0,error:!1}),e.next=3,x.l.post("/",{Action:"Validate",Params:{SecretKey:w}});case 3:t=e.sent,g({loading:!1,error:!t.data.success}),F({password:w,password_is_set:t.data.success});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(c.Z,{fullWidth:!0,open:!Z,sx:{backdropFilter:"blur(2px)"},PaperProps:{style:{height:"300px",width:"400px",padding:"20px 0px 0px 25px",backgroundImage:"unset",backgroundColor:"#121212",borderRadius:"20px",border:"1px solid #fff"}},children:[(0,v.jsxs)(u.Z,{sx:{fontSize:"2em",color:"#fff"},children:[" ","Welcome back."]}),(0,v.jsxs)(l.Z,{sx:{mt:"-20px"},children:[(0,v.jsxs)(d.Z,{sx:{mb:4,color:"rgba(255, 255, 255, 0.5)"},children:["Log in to your account or"," ",(0,v.jsx)(p.Z,{sx:{color:"rgba(255, 255, 255, 0.9)"},href:"https://github.com/aws/amazon-cloudwatch-agent/issues/new/choose",children:"contact us"})]}),(0,v.jsx)(b,{sx:{mb:1,borderRadius:"10px",width:"86%",color:"#fff"},autoFocus:!0,error:m,margin:"dense",id:"name",size:"small",label:"Password",type:"password",color:"primary",focused:!0,placeholder:"********************************",helperText:"Incorrect password",variant:"standard",onChange:y,onKeyDown:k}),(0,v.jsxs)(f.Z,{loading:_,variant:"outlined",sx:{mb:1,width:"86%",color:"#fff",borderColor:"#fff"},onClick:j,children:["Log in with Password ",(0,v.jsx)(h.Z,{})]})]})]})}},2822:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n=r(4165),a=r(1413),o=r(7762),s=r(5861),i=r(9439),c=r(178),u=r(5281),l=r(1113),d=r(1629),p=r(501),f=r(6835),m=r(3467),h=r(4076),x=r(941),v=r(5218),b=r(7903),_=r(7829),g=r(9860),w=r(9118),Z=r.n(w),F=r(816),y=r.n(F),k=r(7313),j=r(8446),C=r(5097),S=r(1225),M=r(5762);function D(e){return A.apply(this,arguments)}function A(){return(A=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y()().unix(),e.abrupt("return",P(t,{TableName:"CWAPerformanceMetrics",Limit:25*C.DQ.length,IndexName:"ServiceDate",KeyConditions:{Service:{ComparisonOperator:"EQ",AttributeValueList:[{S:C.m_}]},CommitDate:{ComparisonOperator:"LE",AttributeValueList:[{N:r.toString()}]}},ScanIndexForward:!1}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return z.apply(this,arguments)}function z(){return(z=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.l.post("/",{Action:"Query",SecretKey:t,Params:r}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.Items})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.l.post("/",{Action:"Github",SecretKey:t,URL:"GET /repos/{owner}/{repo}/commits/{ref}",Params:{owner:C.Z8,repo:"amazon-cloudwatch-agent",ref:r}}).then((function(e){return console.log(e),Promise.resolve(null===e||void 0===e?void 0:e.data)})).catch((function(e){return Promise.reject(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=r(243);function N(){var e=(0,g.Z)();return{chart:{type:"line",toolbar:{show:!0,offsetX:-100,offsetY:5,tools:{selection:!1,zoom:!1,zoomin:!1,zoomout:!1,pan:!1}},events:{xAxisLabelClick:function(e,t,r){var n=r.globals.categoryLabels.at(r.labelIndex);window.location.assign("https://github.com/".concat(C.Z8,"/").concat("amazon-cloudwatch-agent","/commit/").concat(n))}}},xaxis:{labels:{rotateAlways:!0,rotate:-45,style:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"],fontSize:"12px"},offsetX:10,offsetY:5},tooltip:{enabled:!1},title:{text:"Commit Sha",style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"14px"},offsetY:-20}},colors:["#FF6384","#FF9F40","#FFCD56","#0ED87C","#4BC0C0","#36A2EB","#9965FF","#996255","#DF358D","#DF358D"],yaxis:{labels:{style:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"]}},title:{style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"14px"}}},tooltip:{intersect:!0,shared:!1,followCursor:!0,onDatasetHover:{highlightDataSeries:!0},x:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},legend:{position:"right",showForSingleSeries:!0,markers:{width:20,radius:2},offsetX:-40,offsetY:40,itemMargin:{horizontal:5,vertical:0},labels:{colors:["light"===e.palette.mode?"#212121":"#FFFFFF"]}},markers:{size:5},title:{align:"center",offsetX:-30,style:{color:"light"===e.palette.mode?"#212121":"#FFF",fontSize:"20px"}}}}var T=r(6417);function W(e){var t;(0,S.o)({title:"Amazon CloudWatch Agent"});var r=(0,g.Z)(),w=e.password,F=e.password_is_set,M=e.set_password_state,A=function(e){var t=k.useState({last_update:void 0,hash_categories:[],trend_data:[],commits_information:[]}),r=(0,i.Z)(t,2),c=r[0],u=r[1];return k.useEffect((function(){(0,s.Z)((0,n.Z)().mark((function t(){var r,s,i,c,l,d,p,f,m,h;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:if(null!=(s=t.sent)&&0!==s.length){t.next=5;break}return t.abrupt("return");case 5:return i=[],c=(null===(r=s.at(0))||void 0===r?void 0:r.CommitDate.N)||"",l=Array.from(new Set(s.map((function(e){return e.CommitHash.S.substring(0,6)})))).reverse(),t.next=10,Promise.all(l.map((function(t){return L(e,t)})));case 10:d=t.sent,p=d.map((function(e){return{commiter_name:e.author.login,commit_message:e.commit.message,commit_date:e.commit.committer.date,sha:e.sha.substring(0,6)}})),f=(0,o.Z)(C.tF),t.prev=13,h=(0,n.Z)().mark((function e(){var t,r,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=m.value,r=(0,o.Z)(C.fr),e.prev=2,c=(0,n.Z)().mark((function e(){var r,c,u,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.value,c=(0,n.Z)().mark((function e(){var a,c,d,p,f,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l[u],0!==(c=s.filter((function(e){return e.DataType.S===a}))).length){e.next=4;break}return e.abrupt("return","continue");case 4:d=[],p=(0,o.Z)(C.DQ),e.prev=6,m=(0,n.Z)().mark((function e(){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.value,0!==(o=c.reverse().filter((function(e){return e.UseCase.S===a})).map((function(e){var n;return Number(Number(null===(n=e.Results.M[r].M[t].M.Average)||void 0===n?void 0:n.N).toFixed(2))}))).length){e.next=4;break}return e.abrupt("return","continue");case 4:d.push({name:a,data:o});case 5:case"end":return e.stop()}}),e)})),p.s();case 9:if((f=p.n()).done){e.next=16;break}return e.delegateYield(m(),"t0",11);case 11:if("continue"!==e.t0){e.next=14;break}return e.abrupt("continue",14);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(6),p.e(e.t1);case 21:return e.prev=21,p.f(),e.finish(21);case 24:i.push({name:t,data_type:a,data_tpm:r,data_series:d.reverse()});case 25:case"end":return e.stop()}}),e,null,[[6,18,21,24]])})),u=0,l=["metrics","traces","logs"];case 3:if(!(u<l.length)){e.next=11;break}return e.delegateYield(c(),"t0",5);case 5:if("continue"!==e.t0){e.next=8;break}return e.abrupt("continue",8);case 8:u++,e.next=3;break;case 11:case"end":return e.stop()}}),e)})),r.s();case 5:if((a=r.n()).done){e.next=9;break}return e.delegateYield(c(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),r.e(e.t1);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})),f.s();case 16:if((m=f.n()).done){t.next=20;break}return t.delegateYield(h(),"t0",18);case 18:t.next=16;break;case 20:t.next=25;break;case 22:t.prev=22,t.t1=t.catch(13),f.e(t.t1);case 25:return t.prev=25,f.f(),t.finish(25);case 28:u((function(e){return(0,a.Z)((0,a.Z)({},e),{},{trend_data:i,hash_categories:l,commits_information:p,last_update:y().unix(Number(c)).format("dddd, MMMM Do, YYYY h:mm:ss A")})}));case 29:case"end":return t.stop()}}),t,null,[[13,22,25,28]])})))()}),[e,u]),[c,u]}(w),P=(0,i.Z)(A,1)[0],z=P.last_update,I=P.hash_categories,W=P.trend_data,E=P.commits_information,R=function(){var e=k.useState({data_type:"Metrics"}),t=(0,i.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),U=(0,i.Z)(R,2),B=U[0].data_type,K=U[1],Q=function(){var e=k.useState({selected_metrics:["procstat_cpu_usage","procstat_memory_rss"]}),t=(0,i.Z)(e,2),r=t[0],n=t[1];return[r,n]}(),V=(0,i.Z)(Q,2),X=V[0].selected_metrics,H=V[1],O=I.map((function(){return"light"===r.palette.mode?"#212121":"#FFF"}));return(0,T.jsxs)(c.Z,{children:[(0,T.jsx)(Y.u,{password:w,password_is_set:F,set_password_state:M}),z?(0,T.jsxs)(c.Z,{sx:{py:"5vh",border:"1px solid"},maxWidth:"lg",children:[(0,T.jsx)(c.Z,{sx:{mb:4},children:(0,T.jsxs)(l.Z,{sx:{mb:2,fontWeight:"bold"},variant:"h2",children:["Performance Trend",(0,T.jsx)("hr",{})]})}),(0,T.jsxs)(c.Z,{sx:{mb:4},children:[(0,T.jsx)(d.Z,{sx:{position:"relative",mb:4,display:"flex",justifyContent:"center",boxShadow:"unset"},component:p.Z,children:(0,T.jsx)(f.Z,{sx:{borderStyle:"solid",width:"fit-content",overflow:"hidden"},size:"small","aria-label":"a dense table",children:(0,T.jsx)(m.Z,{children:null===(t=["Last Updated","Data Type","Selected Metric"])||void 0===t?void 0:t.map((function(e){return(0,T.jsxs)(h.Z,{children:[(0,T.jsx)(x.Z,{sx:{border:"1px solid #000",fontWeight:"bold"},children:e}),(0,T.jsx)(x.Z,{sx:{border:"1px solid #000",textAlign:"center"},children:"Last Updated"===e?(0,T.jsx)(l.Z,{variant:"h4",children:z}):"Data Type"===e?(0,T.jsxs)(v.Z,{sx:{height:"38px"},value:B,onChange:function(e){return K({data_type:e.target.value})},children:[(0,T.jsx)(b.Z,{value:"Metrics",children:"Metric"}),(0,T.jsx)(b.Z,{value:"Logs",children:"Logs"})]}):(0,T.jsxs)(v.Z,{multiple:!0,sx:{width:"17vw",height:"38px"},value:X,onChange:function(e){var t=e.target.value;H({selected_metrics:"string"===typeof t?t.split(","):t})},children:[" ",C.tF.map((function(e){return(0,T.jsx)(b.Z,{value:e,children:C.xm[e]},e)}))]})})]},e)}))})})}),(0,T.jsx)("hr",{})]}),(0,T.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:C.tF.map((function(e){return C.fr.map((function(t){var r,n;return X.includes(e)&&(0,T.jsx)(_.Z,{sx:{mb:4},children:(0,T.jsx)(j.Z,{options:Z()(N(),{xaxis:{categories:I,labels:{style:{colors:O}}},yaxis:{title:{text:"procstat_cpu_usage"===e?"Percent":"procstat_num_fds"===e?"":"MB"}},title:{text:"".concat(B," (TPM: ").concat(t,") - Avg ").concat(C.xm[e])},tooltip:{custom:function(e){var t,r=e.ctx,n=e.series,a=e.seriesIndex,o=e.dataPointIndex,s=e.w,i=r.opts.colors.at(a)||"#000",c=null===(t=r.opts.series.at(a))||void 0===t?void 0:t.name,u=n[a][o],l=s.globals.categoryLabels[o],d=E.filter((function(e){return e.sha===l})).at(0),p=null===d||void 0===d?void 0:d.commit_message.replace(/\n\r*\n*/g,"<br />"),f=(null===d||void 0===d?void 0:d.commit_date)+" commited by @"+(null===d||void 0===d?void 0:d.commiter_name),m="<b>".concat(c,"</b>: ").concat(u);return'<div class="commit_box"><div class="mb"><b>'+(null===d||void 0===d?void 0:d.sha)+'</b></div><div class="mb bold"><b>'+p+'</b></div><div class="mb bold"><b>'+f+'</b></div><div class="f">'+'<div style="width: 25px; height: 10px; border: solid #fff 1px; background: '.concat(i,'"><div/>')+'<div class="ml">'.concat(m,"</div>")+"</div></div>"}}}),series:(null===(r=W.filter((function(r){return r.name===e&&r.data_type===B.toLowerCase()&&r.data_tpm===t})))||void 0===r||null===(n=r.at(0))||void 0===n?void 0:n.data_series)||[],type:"line",width:"800"})},"".concat(t).concat(e))}))}))})]}):(0,T.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,T.jsx)(u.Z,{color:"inherit"})})]})}},1225:function(e,t,r){r.d(t,{o:function(){return o}});var n=r(7313),a=r(8467);function o(e,t){var r=(0,a.TH)();n.useEffect((function(){var t=document.title;return document.title="/"===r.pathname&&null!==e&&void 0!==e&&e.title?"".concat(e.title," "):"AWS",function(){document.title=t}}),null!==t&&void 0!==t?t:[])}}}]);