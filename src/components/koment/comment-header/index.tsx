import {Component, h} from "@stencil/core";

@Component({
  tag: 'k-comment-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class CommentHeader {
  render() {
    return <div class="k-comment-header">
      <div class="k-comment-header__avatar">
        <k-comment-header-avatar />
      </div>
      <div class="k-comment-header__meta">
        <div class="name">Thomas Marciniak</div>
        <div class="time">09:48 today</div>
      </div>
    </div>
  }
}
