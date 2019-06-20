import { Component, h } from '@stencil/core'
import LikeIcon from './like.svg'
import ReplyIcon from './reply.svg'
import CommentIcon from './comment.svg'

@Component({
  tag: 'k-comment',
  styleUrl: 'styles.css',
  shadow: true
})

export class Index {
  render() {
    return <div class="k-comment">
      <div class="k-comment__header">
        <k-comment-header />
      </div>
      <div class="k-comment__content">
        The whole concept is awesome. You should also check this out:
        dribbble.com/shots/6491580-CaterGo-Catering-services-unleashed
      </div>
      <div class="k-comment__actions">
        <a class="action-like">
          <img class="icon-like" src={LikeIcon} alt="Like this comment" />
          <span class="count">7</span>
        </a>
        <a class="action-reply">
          <img class="icon-reply" src={ReplyIcon} alt="Reply to this comment" />
        </a>
        <a class="action-comment">
          <img class="icon-comment" src={CommentIcon} alt="Show discussion" />
          <span class="count">3</span>
        </a>
      </div>
    </div>
  }
}
