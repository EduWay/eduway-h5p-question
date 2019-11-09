import $ from 'jquery';
import { ContentType } from 'eduway-h5p-lib';

import Question, { Explainer } from '../src/index';

function Widget() {
  Question.apply(this, arguments);
}
Widget.prototype = $.extend({}, ContentType(false).prototype, Question.prototype);
const question = new Widget('blanks');

question.attach($(document.body));
