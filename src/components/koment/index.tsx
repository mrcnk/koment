import { Component, h } from '@stencil/core';

@Component({
  tag: 'koment-here',
  styleUrl: 'koment.css',
  shadow: true
})

export class Index {
  render() {
    return <div class="koment">
      <k-comment />
    </div>
  }
}
