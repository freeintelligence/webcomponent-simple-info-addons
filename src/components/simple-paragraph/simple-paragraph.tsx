import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'simple-paragraph',
  styleUrl: 'simple-paragraph.css',
  shadow: false
})
export class SimpleParagraph {

  /**
   * Message for the component
   */
  @Prop() message: string

  /**
   * Mode (styles)
   */
  @Prop() mode: string = 'info'

  /**
   * Width
   */
  @Prop() width: string = '100%'

  /**
   * Host data
   */
  hostData() {
    let data = {}
    
    data['class'] = {}
    data['class'][`mode-${this.mode}`] = true
    
    data['style'] = {}
    data['style']['width'] = this.width

    return data
  }

  /**
   * Html
   */
  render() {
    return <p>{this.message}</p>
  }

}
