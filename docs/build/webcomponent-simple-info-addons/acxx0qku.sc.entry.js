const t=window.WebcomponentSimpleInfoAddons.h;class e{constructor(){this.mode="dark",this.type="paragraph",this.width="100%"}centerOrNot(){if(void 0===this.center){if("paragraph"==this.type)return!1;if("box"==this.type)return!0}return this.center}hostData(){let t={class:{}};return t.class[`mode-${this.mode}`]=!0,t.class[`type-${this.type}`]=!0,t.class["text-center"]=this.centerOrNot(),t.style={},t.style.width=this.width,t}render(){return t("div",null,t("div",null,this.header?t("h6",null,this.header):void 0,t("p",null,this.message)),t("slot",null))}static get is(){return"simple-paragraph"}static get properties(){return{center:{type:Boolean,attr:"center"},header:{type:String,attr:"header"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},type:{type:String,attr:"type"},width:{type:String,attr:"width"}}}static get style(){return"simple-paragraph{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;margin:12px 0;padding:12px 18px;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.5);-moz-box-shadow:0 0 5px 0 rgba(0,0,0,.5);box-shadow:0 0 5px 0 rgba(0,0,0,.5);background-color:#f8f8f8}simple-paragraph>div{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}simple-paragraph>div>div{-ms-flex-positive:1;flex-grow:1}simple-paragraph>div>simple-paragraph-actions{padding-left:6px;-ms-flex-positive:0;flex-grow:0;text-align:right}simple-paragraph>div h6{margin:0;padding:0;color:#4b4b4b;font-size:14px;font-weight:700}simple-paragraph>div p{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:0;color:#666;font-size:12px}simple-paragraph.text-center{text-align:center}simple-paragraph.type-paragraph.mode-info{border-left:6px solid #41a3ca}simple-paragraph.type-paragraph.mode-success{border-left:6px solid #00b350}simple-paragraph.type-paragraph.mode-dark{border-left:6px solid #b4b4b4}simple-paragraph.type-paragraph.mode-warning{border-left:6px solid #b98800}simple-paragraph.type-paragraph.mode-danger{border-left:6px solid #d82000}simple-paragraph.type-box{padding:21px}simple-paragraph.type-box.mode-info{background-color:rgba(65,163,202,.1)}simple-paragraph.type-box.mode-success{background-color:rgba(0,179,80,.1)}simple-paragraph.type-box.mode-dark{background-color:hsla(0,0%,70.6%,.1)}simple-paragraph.type-box.mode-warning{background-color:rgba(185,136,0,.1)}simple-paragraph.type-box.mode-danger{background-color:rgba(216,32,0,.1)}"}}export{e as SimpleParagraph};