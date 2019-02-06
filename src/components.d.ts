/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface SimpleCard {
    /**
    * Description for the component
    */
    'description': string;
    /**
    * Title for the component
    */
    'header': string;
  }
  interface SimpleCardAttributes extends StencilHTMLAttributes {
    /**
    * Description for the component
    */
    'description'?: string;
    /**
    * Title for the component
    */
    'header'?: string;
  }

  interface SimpleParagraph {
    /**
    * Message for the component
    */
    'message': string;
    /**
    * Mode (styles)
    */
    'mode': string;
    /**
    * Width
    */
    'width': string;
  }
  interface SimpleParagraphAttributes extends StencilHTMLAttributes {
    /**
    * Message for the component
    */
    'message'?: string;
    /**
    * Mode (styles)
    */
    'mode'?: string;
    /**
    * Width
    */
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SimpleCard': Components.SimpleCard;
    'SimpleParagraph': Components.SimpleParagraph;
  }

  interface StencilIntrinsicElements {
    'simple-card': Components.SimpleCardAttributes;
    'simple-paragraph': Components.SimpleParagraphAttributes;
  }


  interface HTMLSimpleCardElement extends Components.SimpleCard, HTMLStencilElement {}
  var HTMLSimpleCardElement: {
    prototype: HTMLSimpleCardElement;
    new (): HTMLSimpleCardElement;
  };

  interface HTMLSimpleParagraphElement extends Components.SimpleParagraph, HTMLStencilElement {}
  var HTMLSimpleParagraphElement: {
    prototype: HTMLSimpleParagraphElement;
    new (): HTMLSimpleParagraphElement;
  };

  interface HTMLElementTagNameMap {
    'simple-card': HTMLSimpleCardElement
    'simple-paragraph': HTMLSimpleParagraphElement
  }

  interface ElementTagNameMap {
    'simple-card': HTMLSimpleCardElement;
    'simple-paragraph': HTMLSimpleParagraphElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
