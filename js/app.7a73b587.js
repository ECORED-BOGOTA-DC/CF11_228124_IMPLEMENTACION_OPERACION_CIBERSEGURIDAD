(function(e){function n(n){for(var o,t,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)t=c[u],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&l.push(i[t][0]),i[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,t=1;t<a.length;t++){var c=a[t];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"5c82b086","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"4d28618a",creditos:"2d37fb69",glosario:"2b9bc38f",intro:"f8c46b26",referencias:"7314ba34",sintesis:"3893da74",tema1:"7f7ab4ca",tema2:"09e0b04b",tema3:"6cf71aed",tema4:"b09adb5f"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1,tema4:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"2261227d","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"fd1fb54e","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"285f5a5c","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"7760b867",creditos:"d1947e27",glosario:"32de2cce",intro:"f9b3fdc6",referencias:"23b14025",sintesis:"31d6cfe0",tema1:"f6d612a4",tema2:"381a536e",tema3:"da843d15",tema4:"709c6341"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===i))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),a(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",l.name="ChunkLoadError",l.type=o,l.request=t,a[1](l)}i[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=(a("cf25"),a("2877")),d=Object(s["a"])(c,t,i,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");l["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Mejoramiento continuo de las estrategias de ciberseguridad",descripcionCurso:"Mediante el estudio del presente componente, el aprendiz podrá identificar, explicar y aplicar aspectos fundamentales de la operación del ciclo de mejoramiento continuo de las estrategias de ciberseguridad en una organización, proceso fundamental para garantizar la actualización adecuada a las necesidades, a lo largo del tiempo.",imagenBannerPrincipal:a("65fa"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Análisis e interpretación de resultados",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Actividades objeto de análisis",hash:"t_1_1"},{numero:"1.2",titulo:"Informe de auditoría",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Mejora continua",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Normatividad corporativa de seguridad de la información",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Buenas prácticas en ciberseguridad",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228124_CF11_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"4. Buenas prácticas en ciberseguridad",referencia:"Center for Internet Security. (2023). <i>CIS Critical Security Controls v8 Mapping to NIST CSF.</i>",tipo:"Norma técnica",link:"https://www.cisecurity.org/insights/white-papers/cis-controls-v8-mapping-to-nist-csf"},{tema:"4. Buenas prácticas en ciberseguridad",referencia:"Center for Internet Security. (2021).<em> CIS Benchmarks</em>. CISECURITY.",tipo:"Norma técnica",link:"https://www.cisecurity.org/cis-benchmarks/"}],glosario:[{termino:"Ciberseguridad",significado:"conjunto de elementos articulados para la protección de la información alojados en dispositivos en el ciberespacio."},{termino:"Estándar",significado:"documento técnico que puede ser tomado como referencia para un caso específico."},{termino:"<em>Framework</em>",significado:"es un marco de trabajo específico, con instrucciones y estructuras, para la implementación de alguna acción."},{termino:"Incidente",significado:"suceso repentino no deseado."},{termino:"Norma",significado:"reglas organizadas y establecidas para la regulación de un comportamiento."},{termino:"Servicio",significado:"conjunto de herramientas y actividades que sirven para responder a una necesidad."}],referencias:[{referencia:"Center for Internet Security (2021). <em>CIS Benchmarks</em>. CISECURITY.",link:"https://www.cisecurity.org/cis-benchmarks/"},{referencia:"ISO 27001. (s.f.). <em>Evaluación del Desempeño en ISO 27001- Requisitos en detalle</em>.",link:"https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001/"},{referencia:"ISO 27001. (s.f.). <em>ISO 27001 Paso a Paso - 8 Auditoría Interna - ¿Cómo afrontarla?</em>",link:"https://normaiso27001.es/fase-8-auditoria-interna-segun-iso-27001/"},{referencia:"ISO. (2020). ISO/IEC 27001:2013. <em>Information technology — Security techniques — Information security management systems — Requirements</em>.",link:"https://www.iso.org/standard/54534.html"},{referencia:"Ministerio de Tecnologías de la Información y las Comunicaciones [MinTic]. (2016). <em>Guía de auditoría. Seguridad y privacidad de la información.</em>",link:"https://www.mintic.gov.co/gestionti/615/articles-5482_G15_Auditoria.pdf"},{referencia:"Center for Internet Security. (2023). <i>CIS Critical Security Controls v8 Mapping to NIST CSF.</i>",link:"https://www.cisecurity.org/insights/white-papers/cis-controls-v8-mapping-to-nist-csf"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesoría metodológica y pedagógica",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Hernando José Peña Hidalgo",cargo:"Experto temático",centro:"Regional Cauca - Centro de Teleinformática y Producción Industrial"},{nombre:"Joaquín Patiño Cerón",cargo:"Experto temático",centro:"Regional Cauca - Centro de Teleinformática y Producción Industrial"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseño instruccional",centro:"Regional Tolima - Centro agropecuario La Granja"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Regional Tolima - Centro Agropecuario La Granja"},{nombre:"Gloria Lida Alzate Suarez",cargo:"Adecuación instruccional",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Metodología para la formación virtual",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yazmin Rocio Figueroa Pacheco",cargo:"Diseño web",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Luis Jesús Pérez Madariaga",cargo:"Desarrollo Fullstack",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y Producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y Producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y Producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"},{nombre:"Leyson Fabián Castaño Pérez",cargo:"Validación de recursos educativos digitales y vinculación LMS",centro:"Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},"65fa":function(e,n,a){e.exports=a.p+"img/banner-principal.3ddb86f9.png"},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.5a7489d3.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.7b1f7bf1.png"},cf25:function(e,n,a){"use strict";a("fea6")},fea6:function(e,n,a){}});
//# sourceMappingURL=app.7a73b587.js.map