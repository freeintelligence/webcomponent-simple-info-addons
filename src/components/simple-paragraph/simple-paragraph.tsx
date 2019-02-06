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
  @Prop() mode: string

  /**
   * Generate class attribute
   */
  classAttribute() {
    let clss = [ 'simple-paragraph' ]
    
    if(typeof this.mode == 'string') {
      clss.push(`mode-${this.mode}`)
    }

    return clss.join(' ')
  }

  /**
   * Html
   */
  render() {
    return (
      <div class={this.classAttribute()}>
        <p>{this.message}</p>
      </div>
    )
  }

}
