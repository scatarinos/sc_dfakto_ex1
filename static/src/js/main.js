// odoo.define('exercise.custom_js', function (require) {
//     'use strict';

//     var website = require('website.website');
//     var wysiwygLoader = require('web_editor.wysiwygLoader');

//     website.ready().then(function () {
//         var $textarea = $('.o_wysiwyg_loader');
//         wysiwygLoader.load($textarea, {
//             height: 200,
//             toolbarFixedTopOffset: 63
//         });
//     });
// });

// odoo.define('exercise.my_script', function (require) {
//     "use strict";

//     var core = require('web.core');
//     var FieldManagerMixin = require('web.FieldManagerMixin');

//     var _t = core._t;

//     FieldManagerMixin.include({
//         /**
//          * Load the WYSIWYG editor on a textarea field.
//          *
//          * @param {jQuery} $textarea - The jQuery object that represents the textarea field.
//          * @param {Object} [options] - The options to configure the WYSIWYG editor.
//          */
//         load_editor: function ($textarea, options) {
//             options = options || {};
//             options.toolbar = options.toolbar || [['bold', 'italic', 'underline'], ['link', 'unlink'], ['ol', 'ul']];
//             options.autoParagraph = false;
//             options.startupFocus = false;

//             var editor = new window.CKEDITOR.replace($textarea[0], options);
//             editor.on('change', function () {
//                 $textarea.trigger('input');
//             });
//             editor.on('instanceReady', function () {
//                 editor.focus();
//             });
//             editor.on('blur', function () {
//                 editor.resetDirty();
//             });
//         },
//     });

//     // Load the WYSIWYG editor on the textarea field with the ID 'my_textarea'
//     $(document).ready(function () {
//         var $textarea = $('#my_textarea');
//         if ($textarea.length) {
//             FieldManagerMixin.load_editor($textarea);
//         }
//     });

// });

odoo.define('exercise.test', function (require) {
    'use strict';

    var websiteEditor = require('website.editor');

    $(document).ready(function () {
        websiteEditor.attach($('.note-editable'));
    });
});