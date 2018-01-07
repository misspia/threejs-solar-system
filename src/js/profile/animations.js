import $ from 'jquery';
import {TweenMax, Power2, TimelineLite } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

import {
  PROFILE_VIEW, PROFILE_VIEW_INFO, PROFILE_VIEW_MENU,
} from '../constants.js';

export const animateProfileInfo = ({onReverseComplete,onComplete, play, reverse, delay}) => {
  const container =  $(PROFILE_VIEW_INFO);
  const title =  container.children('.title');
  const details = container.children('.details').children('div');

  const tl = new TimelineMax({
    paused: true,
    ease: Elastic.easeIn,
    onReverseComplete,
    onComplete
  });

  tl
  .from(container, 0.5, { scaleY: '0'})
  .from(title, 0.5, { y: -25, autoAlpha: 0})
  .staggerFrom(details, 0.5, { autoAlpha: 0, x: 40}, 0.1);

  if(play) return tl.play(0);
  if(reverse) return tl.reverse();
}

export const animateMenuEntry = ({play}) => {
  const container = $(PROFILE_VIEW_MENU);
  const menuItems = container.children('button');

  const tl = new TimelineMax({
    paused: true,
    ease: Sine.easeInOut
  });

  const time = 0.3;
  tl.staggerFrom(menuItems, time, { autoAlpha: 0, x: 40}, time / 2);

  if(play) return tl.play();
}
