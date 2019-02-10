
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# WebComponent SimpleInfoAddons
Simple web components to show information in a simple and beautiful way.

## Content table
 - [Demo](https://freeintelligence.github.io/webcomponent-simple-info-addons/)
 - [Use and installation](#use-and-installation)
	 - [npm](#npm)
	 - [unpkg](#unpkg)
	 - [framework integration](https://stenciljs.com/docs/overview)
 - [Components](#components)
	 - [simple-paragraph](#simple-paragraph)
 - [Browser Support](https://stenciljs.com/docs/browser-support)

## Use and installation
To use these web components, you must install their dependencies:
### npm
```bash
npm install webcomponent-simple-info-addons
```
```html
<script src="node_modules/webcomponent-simple-info-addons/dist/webcomponent-simple-info-addons.js"></script>
```
### unpkg
```html
<script src="https://unpkg.com/webcomponent-simple-info-addons/dist/webcomponent-simple-info-addons.js"></script>
```
### framework integration
[See the official documentation of stenciljs.com](https://stenciljs.com/docs/overview)

## Components
List of components in the package.

### simple-paragraph

**Simple use:**
```html
<simple-paragraph header="Title" message="Simple message to show"></simple-paragraph>
```

**API**

| Property | Attribute | Description | Type | Default |
| --------- | --------- | ------------------------- | --------- | ------------- |
| `header` | `header` | Title (or header) | `string` | `undefined` |
| `message` | `message` | Message to show | `string` | `undefined` |
| `mode` | `mode` | Color (or mode) | `string` | `'dark'` |
| `type` | `type` | The type of paragraph | `string` | `'paragraph'` |
| `width` | `width` | Width of the paragraph container | `string` | `'100%'` |
| `center` | `center` | `type == 'paragraph' ? 'Text center' : 'Container center'` | `boolean` | `type == 'paragraph' ? false : true` |

**With buttons**

```html
  <simple-paragraph header="Title" message="Simple message to show">
    <simple-paragraph-actions>
      <button type="button">Cerrar</button>
    </simple-paragraph-actions>
  </simple-paragraph>
```

**Available modes**

```js
"info"
"success"
"dark"
"warning"
"danger"
```

**Available types**

```js
"paragraph"
"box"
```

**Custom modes and types:** to add or modify the modes and types you must create global css styles, for example, to create a new `mode` or `color` called `primary` you must add a `css` like:

```css
simple-paragraph.type-paragraph.mode-primary {
    border-left:6px #387ef5 solid;
}
```

## Browser Support
[See the official documentation of stenciljs.com](https://stenciljs.com/docs/browser-support)
