WebcomponentSimpleInfoAddons.loadBundle("k05yvric",["exports"],function(e){var t=window.WebcomponentSimpleInfoAddons.h,r=function(){function e(){this.mode="info",this.width="100%"}return e.prototype.hostData=function(){var e={class:{}};return e.class["mode-"+this.mode]=!0,e.style={},e.style.width=this.width,e},e.prototype.render=function(){return t("div",null,this.header?t("h6",null,this.header):void 0,t("p",null,this.message))},Object.defineProperty(e,"is",{get:function(){return"simple-paragraph"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},width:{type:String,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"simple-paragraph{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;margin:12px 0;padding:12px 18px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.5);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.5);box-shadow:0 0 5px 0 rgba(0,0,0,.5);background-color:#f8f8f8}simple-paragraph h6{margin:0;padding:0;font-size:14px;font-weight:700;color:#4b4b4b}simple-paragraph p{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:0;font-size:12px;color:#666}simple-paragraph.mode-info{border-left:6px solid #41a3ca}simple-paragraph.mode-success{border-left:6px solid #00b350}simple-paragraph.mode-dark{border-left:6px solid #b4b4b4}simple-paragraph.mode-warning{border-left:6px solid #b98800}simple-paragraph.mode-danger{border-left:6px solid #d82000}"},enumerable:!0,configurable:!0}),e}();e.SimpleParagraph=r,Object.defineProperty(e,"__esModule",{value:!0})});