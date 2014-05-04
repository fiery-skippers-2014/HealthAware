var Question = {
  bindEvents: function() {
    $('#new_question_button') .on('click'       , this.toggleSlide);
    $('form#new_question')    .on('ajax:success', this.prependQuestion);
    $('form#new_question')    .on('ajax:error'  , this.showError);
  },

  toggleSlide: function(e) {
    e.preventDefault();
    $('#new_question_form').slideToggle();
  },

  prependQuestion: function(e, data) {
    e.preventDefault();
    $('#questions').prepend(data);
    $('form#new_question').trigger('reset');
    $('form#new_question').slideUp();
  },

  showError: function(e, data) {
    e.preventDefault();
    $('#new_question_form_message').html(data.responseText);
  },
}

$('document').ready(function() {
  Question.bindEvents();
});