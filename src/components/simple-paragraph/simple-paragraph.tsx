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
  @Prop() mode: string = 'dark'

  /**
   * Type
   */
  @Prop() type: string = 'paragraph'

  /**
   * Center
   */
  @Prop({ mutable: true }) center: boolean

  /**
   * Width
   */
  @Prop() width: string = '100%'

  /**
   * 
   */
  centerOrNot(): boolean {
    if(typeof this.center == 'undefined') {
      if(this.type == 'paragraph') {
        return false
      }
      else if(this.type == 'box') {
        return true
      }
    }

    return this.center
  }

  /**
   * Host data
   */
  hostData() {
    let data = {}

    data['class'] = {}
    data['class'][`mode-${this.mode}`] = true
    data['class'][`type-${this.type}`] = true
    data['class']['text-center'] = this.centerOrNot()

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
