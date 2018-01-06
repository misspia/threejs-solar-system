import $ from 'jquery';
import {TweenMax, Power2, TimelineLite } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import {
  PROFILE_VIEW, PROFILE_VIEW_INFO, PROFILE_VIEW_MENU
} from '../constants.js';

export const animateProfileInfo = () => {
  const title =  $(PROFILE_VIEW_INFO).children('.title');
  const details = $(PROFILE_VIEW_INFO).children('.details');
  const tl = new TimelineLite();

  tl
  .from(title, 0.6, { y: -20, autoAlpha: 0})
  .from(details, 0.6, { y: -20, autoAlpha: 0}, '-=0.3')
}
