import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'simple-paragraph',
  styleUrl: 'simple-paragraph.scss',
  shadow: false
})
export class SimpleParagraph {

  /**
   * Header for the component
   */
  @Prop() header: string

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
    return (
      <div>
        {this.header ? <h6>{this.header}</h6> : undefined}
        <p>{this.message}</p>
      </div>
    )
  }

}
