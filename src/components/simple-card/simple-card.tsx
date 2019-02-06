import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'simple-card',
  styleUrl: 'simple-card.css',
  shadow: true
})
export class SimpleCard {

  /**
   * Title for the component
   */
  @Prop() header: string

  /**
   * Description for the component
   */
  @Prop() description: string

  render() {
    return (
      <div>
        <h2>{this.header}</h2>
        <p>{this.description}</p>
      </div>
    )
  }

}
