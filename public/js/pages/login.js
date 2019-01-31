'use strict';
$(document).ready(function() {
    $(window).on("load", function() {
        $('.preloader img').fadeOut();
        $('.preloader').fadeOut(1000);
    });
    new WOW().init();
    $('#login_validator').bootstrapValidator({
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Es obligatorio ingresar usuario'
                    }
                    // ,
                    // regexp: {
                    //     regexp: /^\S+@\S{1,}\.\S{1,}$/,
                    //     message: 'The input is not a valid email address'
                    // }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Es obligatorio ingresar una contraseña'
                    }
                }
            }
        }
    });
    
});
