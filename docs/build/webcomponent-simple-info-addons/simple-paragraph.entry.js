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
    static get style() { return "simple-paragraph {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 12px 0;\n  padding: 12px 18px;\n  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n  background-color: #f8f8f8; }\n\nsimple-paragraph h6 {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  font-weight: bold;\n  color: #4b4b4b; }\n\nsimple-paragraph p {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  font-size: 12px;\n  color: #666666; }\n\nsimple-paragraph.mode-info {\n  border-left: 6px #41a3ca solid; }\n\nsimple-paragraph.mode-success {\n  border-left: 6px #00b350 solid; }\n\nsimple-paragraph.mode-dark {\n  border-left: 6px #b4b4b4 solid; }\n\nsimple-paragraph.mode-warning {\n  border-left: 6px #b98800 solid; }\n\nsimple-paragraph.mode-danger {\n  border-left: 6px #d82000 solid; }"; }
}

export { SimpleParagraph };
