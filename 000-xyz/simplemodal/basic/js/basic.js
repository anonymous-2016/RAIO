/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
// ready
jQuery(function ($) {
    // Load dialog on click
    $('#basic-modal .basic').click(function (e) {
        $('#basic-modal-content').modal();
        return false;
    });
});
