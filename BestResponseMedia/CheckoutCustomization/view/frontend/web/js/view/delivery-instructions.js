define(
    [
        'ko',
        'jquery',
        'uiComponent',
        'mage/url'
    ],
    function (ko, $, Component,url) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'BestResponseMedia_CheckoutCustomization/delivery-instructions'
            },
            initObservable: function () {

                this._super()
                    .observe({
                        delivery: ko.observable("")
                    });
                var delivery="";
                self = this;
                this.delivery.subscribe(function (newValue) {
                    var linkUrls  = url.build('delivery/index/save');
                    delivery = newValue;
                    console.log(newValue);
                    $.ajax({
                        showLoader: true,
                        url: linkUrls,
                        data: {delivery : newValue},
                        type: "POST",
                        dataType: 'json'
                    }).done(function (data) {
                        console.log('success');
                    });
                });
                return this;
            }
        });
    }
);
