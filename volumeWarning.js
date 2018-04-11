// Create namespace.
littleDebugger.common.namespacer.createNamespace("littleDebugger.audioProcessing.helpers");

// The volume warning handler.
littleDebugger.audioProcessing.helpers.volumeWarning = function (callback) {
    var showWarning = true;

    var that = {};
    that.eventFired = function () {
        if (showWarning) {
            alert('Please set volume to an appropriate level.');
            showWarning = false;
        }

        if (typeof (callback) !== 'undefined') {
            callback();
        }
    };

    return that;
};