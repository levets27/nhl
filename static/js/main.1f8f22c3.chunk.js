(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,a){t.exports=a(37)},27:function(t,e,a){},36:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAzRJREFUaIHt2k+IlVUcxvGPbzqNiA4tLE3FEQsaNwVRQlRIJcUsNEH7R6jLDJQ2gRg1IsFQBEFQEbSIIFpoLUIR3ZgiorYQI/oDli4MCwvMRVFhujh3pju3q05zfue9M6NfuMwMw/u8z5f33vOe95w7ZWBgQE3MwH1YiaVYiG6cxgd4vY4SU2s4Rxc24CXMbvP/PryGJzCIY/ihVJnSwg/iQ+lqXo27saPx+ynpqr+NXyILVZFhLazDfqOTbaUXW3ECy+MqlRN+RrpCufRgL+4PyEIZ4T58FJy5MyqohPBnBTJ7pEEtm2jhZbgtOHOIRyNCooU3Bec1c0tESKTwdPQH5rXSHRESKbwANwbmtXJDREikcE9gVjvGnfCMwKx2hHSdSMJdESGRwiGDyhVYEHGOknPpaObg+dyQSOELgVmXY25uQKTwn4FZl+OL3IBI4T8Cs9pxEXtyQyKFfwrMasdx/JYbEin8nfTAX4otESGRwhexJjCvmUPYHREUfVs6i/eDM3/HiqiwEvfh5/BzYN7H+DUqrITwBTwZmBe6XFRqprVfzPLqOewLyBmm5NTydEDG9oCMEZQUjij7VkDGCEoKvyNvfn0WXwV1Gaak8DkcyDj+fFSRZko/Hp7MOPbmsBZNlBReiIcyjp+JzUFdhikl/Cq+lzbFchjExuw2TUQLT8dhaS84ZJVRGql3BWWFCt+BL6Xd/Wj6pSlmNhHCi7EN3yi3rwRP4c3ckLEK92K1tI15Ai/nFhklL+AIVkmLev+b0X7lYZEkuVx6e905lpMFcS8+xV/4RHocPdj4+6q0E56GJbgLD+MB+aNtCbrwdON1Bu9K09lvr3RQq/Ag1uLWAgVLMlcaR7bhc7zX+Pmfdbbmz/B66UY/0WRbWSaN6CelsWXERW0WfqW+TrXQLV3xrzV9JIeEe6WBaTJyO45qTISGhO/pWJ16mI0X+Vc4bFVwHPMYSXgKHulsl1q4iSQ8zxhnLROMPsyrML/TTWpiGt6o8Hinm9RIf4VnO92iRroqhdaOxil/V+rZuR83VNI25zXDRPoWTwjXhSc714UnO5W0pXGtMHMqfsQs/NPhMqWpcP4So9Roy8Nbba4AAAAASUVORK5CYII="},37:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(19),i=a.n(s),o=(a(27),a(11)),c=a(10),l=a(5),u=a(6),m=a(8),p=a(7),h=a(9),b=r.a.createContext(),f=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={teams:[]},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://statsapi.web.nhl.com/api/v1/teams").then(function(t){return t.json()}).then(function(e){var a=e.teams.sort(function(t,e){var a=t.name.toUpperCase(),n=e.name.toUpperCase();return a<n?-1:a>n?1:0});t.setState({teams:a})})}},{key:"render",value:function(){return r.a.createElement(b.Provider,{value:{teams:this.state.teams}},this.props.children)}}]),e}(r.a.Component),d=b.Consumer,E=function(t){function e(){return Object(l.a)(this,e),Object(m.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(d,null,function(t){var e=t.teams;return r.a.createElement("ul",{className:"TeamsList"},e.map(function(t){var e=t.name,a=t.id,n=t.abbreviation;return r.a.createElement("li",{key:a},r.a.createElement(o.b,{to:"/teams/".concat(n)},e))}))})}}]),e}(r.a.Component),y=function(){return r.a.createElement("ul",{className:"Menu"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Schedule")),r.a.createElement("li",null,"Teams",r.a.createElement(E,null)))},g=(a(36),function(t){var e=t.player,a=t.size;return r.a.createElement("tr",null,Object.entries(e).map(function(t,e){var n,s=t[0],i=t[1];if("id"===s){var o="https://nhl.bamcontent.com/images/headshots/current/60x60/".concat(i,".jpg");n=r.a.createElement("img",{src:o,alt:"",height:a,width:a})}else n=i;return r.a.createElement("td",{key:e},n)}))});g.defaultProps={player:{},size:40};var v=g,S=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={id:null,roster:[],playerData:[],sortKey:""},a.updateId=function(){a.setState({id:a.props.id}),console.log(a.state.id),console.log(a.props.name)},a.fetchData=function(){fetch(a.props.apiQuery).then(function(t){return t.json()}).then(function(t){if(t.teams){var e=t.teams[0].franchise.roster.roster,n=a.formatData(e,a.props.isGoalie,a.props.statCategories);a.setState({roster:e,playerData:n})}console.log(t.teams)})},a.formatData=function(t){var e=t.filter(function(t){return a.props.isGoalie?"G"===t.position.abbreviation&&t.person.stats[0].splits[0]:"G"!==t.position.abbreviation&&t.person.stats[0].splits[0]}).map(function(t){var e=t.position,n=t.person,r=t.jerseyNumber,s=n.stats[0].splits[0].stat,i={id:n.id,firstName:n.firstName,lastName:n.lastName,jerseyNumber:Number(r),position:e.abbreviation};return Object.keys(a.props.statCategories).forEach(function(t){i[t]=s[t]}),i});return a.sortData(e,a.state.sortKey)},a.handleSort=function(t,e){if(e===a.state.sortKey)return t.reverse();a.setState({sortKey:e}),a.sortData(t,e)},a.sortData=function(t,e){return t.sort(function(t,a){return t[e]>a[e]?-1:t[e]<a[e]?1:0})},a.sortStateData=function(t,e){var n=a.handleSort(t,e);n&&a.setState({playerData:n})},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.updateId(),this.state.sortKey!==this.props.sortKey&&this.setState({sortKey:this.props.sortKey}),0===this.state.roster.length&&this.fetchData()}},{key:"componentDidUpdate",value:function(t,e){this.props.id!==e.id&&this.props.id!==t.id&&(this.updateId(),this.fetchData())}},{key:"render",value:function(){var t=this,e=this.state.playerData;return r.a.createElement("table",{id:this.props.name},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{onClick:function(){return t.sortStateData(e,"firstName")}},"First"),r.a.createElement("th",{onClick:function(){return t.sortStateData(e,"lastName")}},"Last"),r.a.createElement("th",{onClick:function(){return t.sortStateData(e,"jerseyNumber")}},"No."),r.a.createElement("th",{onClick:function(){return t.sortStateData(e,"position")}},"Pos."),Object.entries(this.props.statCategories).map(function(a,n){return r.a.createElement("th",{key:n,onClick:function(){return t.sortStateData(e,a[0])}},a[1])}))),r.a.createElement("tbody",null,e.map(function(t,e){return r.a.createElement(v,{player:t,key:e})})))}}]),e}(r.a.Component),A=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={abbr:"",id:null,team:[]},a.updateTeam=function(){if(a.context.teams.length>0&&a.state.team&&a.state.team.abbreviation!==a.state.abbr){var t=a.context.teams.find(function(t){return t.abbreviation===a.state.abbr});a.state.team!==t&&a.setState({team:t,id:t.id})}},a.updateAbbr=function(){var t=a.props.match.params.abbr;""!==a.state.abbr&&a.state.abbr===t||a.setState({abbr:t})},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.updateAbbr()}},{key:"componentDidUpdate",value:function(){this.updateAbbr(),this.updateTeam()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("img",{src:"https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/".concat(this.state.id,".svg"),width:"60",height:"60",alt:""}),this.state.team.name),r.a.createElement("section",null,r.a.createElement("h2",null,"Skater Stats"),r.a.createElement(S,{id:this.state.id,name:"teamSkaterStats-".concat(this.state.abbr),apiQuery:"https://statsapi.web.nhl.com/api/v1/teams/".concat(this.state.id,"?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))"),sortKey:"points",statCategories:{games:"GP",goals:"G",assists:"A",points:"PTS",pim:"PIM"}})),r.a.createElement("section",null,r.a.createElement("h2",null,"Goalie Stats"),r.a.createElement(S,{id:this.state.id,name:"teamGoalieStats-".concat(this.state.abbr),apiQuery:"https://statsapi.web.nhl.com/api/v1/teams/".concat(this.state.id,"?hydrate=franchise(roster(season=20182019,person(name,stats(splits=statsSingleSeason))))"),isGoalie:!0,sortKey:"goalAgainstAverage",statCategories:{games:"GP",gamesStarted:"GS",wins:"W",losses:"L",ot:"OTL",goalAgainstAverage:"GAA",savePercentage:"SV%",shutouts:"SO"}}))))}}]),e}(r.a.Component);A.contextType=b;var w=A;function j(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Schedule"))}var O=function(){var t="";return t="/nhl",r.a.createElement(o.a,{basename:t},r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement(c.a,{path:"/teams/:abbr",component:w})),r.a.createElement(c.a,{exact:!0,path:"/",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.1f8f22c3.chunk.js.map