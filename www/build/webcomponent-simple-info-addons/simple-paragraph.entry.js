const h = window.WebcomponentSimpleInfoAddons.h;

class SimpleParagraph {
    constructor() {
        /**
         * Mode (styles)
         */
        this.mode = 'info';
        /**
         * Width
         */
        this.width = '100%';
    }
    /**
     * Host data
     */
    hostData() {
        let data = {};
        data['class'] = {};
        data['class'][`mode-${this.mode}`] = true;
        data['style'] = {};
        data['style']['width'] = this.width;
        return data;
    }
    /**
     * Html
     */
    render() {
        return (h("div", null,
            this.header ? h("h6", null, this.header) : undefined,
            h("p", null, this.message)));
    }
    static get is() { return "simple-paragraph"; }
    static get properties() { return {
        "header": {
            "type": String,
            "attr": "header"
        },
        "message": {
            "type": String,
            "attr": "message"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return "simple-paragraph {\n    -webkit-box-sizing:border-box;\n    box-sizing:border-box;\n    display:inline-block;\n    margin:12px 0;\n    padding:12px 18px;\n    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);\n    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);\n    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);\n    background-color:rgb(248, 248, 248);\n}\nsimple-paragraph h6 {\n    margin:0;\n    padding:0;\n    font-size:14px;\n    font-weight:bold;\n    color:rgb(75, 75, 75);\n}\nsimple-paragraph p {\n    -webkit-box-sizing:border-box;\n    box-sizing:border-box;\n    width:100%;\n    margin:0;\n    font-size:12px;\n    color:rgb(102, 102, 102);\n}\n\nsimple-paragraph.mode-info { border-left:6px rgb(65, 163, 202) solid; }\nsimple-paragraph.mode-success { border-left:6px rgb(0, 179, 80) solid; }\nsimple-paragraph.mode-dark { border-left:6px rgb(180, 180, 180) solid; }\nsimple-paragraph.mode-warning { border-left:6px rgb(185, 136, 0) solid; }\nsimple-paragraph.mode-danger { border-left:6px rgb(216, 32, 0) solid; }"; }
}

export { SimpleParagraph };
