﻿var sdHub, sdHubErrMsg, sdHubConnectionId, sdSocket = null,
    sd_session_id = null;

function openSDSession(o, n, e, i) {
    var t;
    t = o + "://" + n + ":" + e + i, console.log("openSDSession::Connecting to: " + t);
    try {
        (sdSocket = new WebSocket(t)).onopen = function (o) {
            console.log("SDWS OPEN: " + JSON.stringify(o, null, 4))
        }, sdSocket.onclose = function (o) {
            console.log("SDWS CLOSE: " + JSON.stringify(o, null, 4))
        }, sdSocket.onerror = function (o) {
            console.log("SDWS ERROR: " + JSON.stringify(o, null, 4))
        }, sdSocket.onmessage = function (o) {
            var n = JSON.parse(o.data);
            "wsOpen" == n.action ? sd_session_id = n.data : "SignHash" == n.action && SignPdfHashAndReturnSignToSDServer(n.data, n.taskid), console.log("SDWS MSG: " + n)
        }
    } catch (o) {
        console.error(o)
    }
}

function SignPdfHashAndReturnSignToSDServer(o, n) {
    var e = {};
    e.taskid = n, e.action = "AddSign", SignerDigital.signPdfHash(o, $("#CertThumbPrint").val()).then(function (o) {
        if (sdSocket.readyState != WebSocket.OPEN) return console.error("sdSocket is not open: " + sdSocket.readyState), void (e.data = "SDHost Error: SD Signer Browser Session is not open.");
        e.data = o, sdSocket.send(JSON.stringify(e))
    }, function (o) {
        if (sdSocket.readyState != WebSocket.OPEN) return console.error("sdSocket is not open: " + sdSocket.readyState), void (e.data = "SDHost Error: SD Signer Browser Session is not open.");
        e.data = o.message, sdSocket.send(JSON.stringify(e))
    })
}

function SignPdfHashAndReturnSignToHub(o, n) {
    SignerDigital.signPdfHash(o, $("#CertThumbPrint").val(), "SHA-256").then(function (o) {
        sdHub.server.SendSignedData(o, n)
    }, function (o) {
        sdHub.server.SendSignedData(o.message, n), $("#ResultDisplay").html(o.message)
    })
}

function isBrowserSupportsExtension() {
    var o = navigator.browserSpecs.name;
    navigator.browserSpecs.version;
    //console.log(o);
    if ("IE" != o) return !0;
    return 'Do not Use Internet Explorer Browser. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.', "https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip", alert('Digitally Signing Returns or PDF from Browser requires Browser Extension to be installed which is compatible to Google Chrome Browser.Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip'), !1
}

function isExtensionInstalled() {
    if ("undefined" == typeof SignerDigital) {
        return 'Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.', "https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip", alert('Digitally Signing Returns or PDF from Browser requires Browser Extension to be installed which is compatible to Google Chrome Browser.Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip'), !1
    }
    return !0
}

function isBrowserSupportsExtensionNew() {
    var o = navigator.browserSpecs.name;
    navigator.browserSpecs.version;
    if ("Chrome" == o) return !0;
    return '','','',!1;
    //return 'Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.', "https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip", alert('Digitally Signing Returns or PDF from Browser requires Browser Extension to be installed which is compatible to Google Chrome Browser.Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip'), !1
}

function isExtensionInstalledNew() {
    if ("undefined" == typeof SignerDigital) {
        return '', '', '', !1;
        //return 'Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.', "https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip", alert('Digitally Signing Returns or PDF from Browser requires Browser Extension to be installed which is compatible to Google Chrome Browser.Use Google Chrome Browser only. Download and install "Signer.Digital Web Signer" from below link. \nDo not forget to restart Chrome after installing extension.https://signer.digital/downloads/Signer.Digital.Chrome.Host.Setup.zip'), !1
    }
    return !0
}

function showDialog(o, n) {
    $("#commondialog .modal-title").html(o), $("#commondialog .modal-body").html(n), $("#commondialog").modal({
        backdrop: "static",
        keyboard: !1
    }), $("body").css("padding-right", "0px")
}

function closeDialog(o) {
    $("#" + o).modal("hide"), $(".modal-backdrop").remove()
}

function showCommonDialog(o, n, e, i, t) {
    $("#btnDlgClose").html("Close"), $("#btnDlgClose").off("click"), $('#commondialog [data-dismiss="modal"]').click(function () {
        closeDialog("commondialog")
    }), void 0 === e ? ($("#btnDlgClose").show(), $("#btnYesConfirmYesNo,#btnNoConfirmYesNo").hasClass("hidden") || $("#btnYesConfirmYesNo,#btnNoConfirmYesNo").addClass("hidden"), void 0 !== t && ($("#btnDlgClose").off("click").click(function () {
        setTimeout(function () {
            t()
        }, 500)
    }), $("#btnDlgClose").html("<span style='padding:0 10px;'>OK</span>"))) : ($("#btnDlgClose").hide(), $("#btnYesConfirmYesNo,#btnNoConfirmYesNo").removeClass("hidden"), $("#btnYesConfirmYesNo").off("click").click(function () {
        closeDialog("commondialog"), setTimeout(function () {
            e()
        }, 500)
    }), $("#btnNoConfirmYesNo").off("click").click(function () {
        closeDialog("commondialog"), void 0 !== i && setTimeout(function () {
            i()
        }, 500)
    })), showDialog(o, n)
}
$(function () {
    try {
        (sdHub = $.connection.SignerDigitalHub).client.GetSigndData = SignPdfHashAndReturnSignToHub, $.connection.hub.start().done(function () {
            sdHubConnectionId = $.connection.hub.id
        })
    } catch (o) {
        sdHubErrMsg = o
    }
}), navigator.browserSpecs = function () {
    var o, n = navigator.userAgent,
        e = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(e[1]) ? {
        name: "IE",
        version: (o = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || ""
    } : "Chrome" === e[1] && null != (o = n.match(/\b(OPR|Edge)\/(\d+)/)) ? {
        name: o[1].replace("OPR", "Opera"),
        version: o[2]
    } : (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (o = n.match(/version\/(\d+)/i)) && e.splice(1, 1, o[1]), {
        name: e[0],
        version: e[1]
    })
}();