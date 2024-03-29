/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface KComment {}
  interface KCommentHeader {}
  interface KCommentHeaderAvatar {}
  interface KomentHere {}
}

declare global {


  interface HTMLKCommentElement extends Components.KComment, HTMLStencilElement {}
  var HTMLKCommentElement: {
    prototype: HTMLKCommentElement;
    new (): HTMLKCommentElement;
  };

  interface HTMLKCommentHeaderElement extends Components.KCommentHeader, HTMLStencilElement {}
  var HTMLKCommentHeaderElement: {
    prototype: HTMLKCommentHeaderElement;
    new (): HTMLKCommentHeaderElement;
  };

  interface HTMLKCommentHeaderAvatarElement extends Components.KCommentHeaderAvatar, HTMLStencilElement {}
  var HTMLKCommentHeaderAvatarElement: {
    prototype: HTMLKCommentHeaderAvatarElement;
    new (): HTMLKCommentHeaderAvatarElement;
  };

  interface HTMLKomentHereElement extends Components.KomentHere, HTMLStencilElement {}
  var HTMLKomentHereElement: {
    prototype: HTMLKomentHereElement;
    new (): HTMLKomentHereElement;
  };
  interface HTMLElementTagNameMap {
    'k-comment': HTMLKCommentElement;
    'k-comment-header': HTMLKCommentHeaderElement;
    'k-comment-header-avatar': HTMLKCommentHeaderAvatarElement;
    'koment-here': HTMLKomentHereElement;
  }
}

declare namespace LocalJSX {
  interface KComment extends JSXBase.HTMLAttributes<HTMLKCommentElement> {}
  interface KCommentHeader extends JSXBase.HTMLAttributes<HTMLKCommentHeaderElement> {}
  interface KCommentHeaderAvatar extends JSXBase.HTMLAttributes<HTMLKCommentHeaderAvatarElement> {}
  interface KomentHere extends JSXBase.HTMLAttributes<HTMLKomentHereElement> {}

  interface IntrinsicElements {
    'k-comment': KComment;
    'k-comment-header': KCommentHeader;
    'k-comment-header-avatar': KCommentHeaderAvatar;
    'koment-here': KomentHere;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


