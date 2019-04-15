
'use strict';

var app = app || {};

var NotificationModule = (function() {

    var debug = false;

    function setNotification() {
        var platform = cordova.platformId.toLowerCase();

        debugMsg('Platform detected => ', platform);
        
        switch (platform) {
            case 'browser':
                browserGetRequestPermission();
                break;

            case 'android':
                mobileGetRequestPermission();
                break;

            case 'ios':
                mobileGetRequestPermission();
                break;
        }

        registerObserver();
    }

    function registerObserver() {
        var workoutScheduleDidChangeHandler = function (workoutScheduleOption) {
            debugMsg('Workout schedule did change handler called.');
            scheduleNotification(workoutScheduleOption);
        };
        app.subscribe(app.observables.workoutScheduleDidChange, workoutScheduleDidChangeHandler);
    }

    function scheduleNotification(workoutScheduleOption) {
        var localNotification = cordova.plugins.notification.local;

        var config = workoutScheduleOption.split('-').map(function(day) {
            var weekday = getWeekDay(day);

            return {
                id: weekday,
                text: 'Please, remember to complete your workout today.',
                title: 'ThrowSmart',
                trigger: {
                    every: {
                        hour: 10,
                        weekday: weekday,
                    }
                },
                foreground: true,
            };
        });

        localNotification.schedule(config);
    }

    function browserGetRequestPermission() {
        scheduleNotification(getScheduleOption());
    }

    function getScheduleOption() {
        var workout_schedule_mode = app.data.account_config_data.workout_schedule_mode;
        var workout_schedule_option = workout_schedule_mode === 'in-season'
            ? app.data.account_config_data.workout_schedule_option
            : 'mon-wed-fri';

        return workout_schedule_option;
    }

    function mobileGetRequestPermission() {
        var localNotification = cordova.plugins.notification.local;
        if (!localNotification) {
            return;
        }

        localNotification.requestPermission(function (granted) {
            if (granted === false) {
                return;
            }

            scheduleNotification(getScheduleOption());
        });
    }

    function debugMsg(msg) {
        if (app.settings.debugMode && debug) {
            if ( app.settings.debugMode && debug ) console.log (msg);
        }
    }

    return {
        setNotification: setNotification,
    };

})();
