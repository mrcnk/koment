import {Component, h} from "@stencil/core";

@Component({
  tag: 'k-comment-header-avatar',
  styleUrl: 'styles.css',
  shadow: true
})

export class CommentHeaderAvatar {
  render() {
    return <div class="k-header-avatar">
      <span class="k-header-avatar__initials">TM</span>
    </div>
  }
}
