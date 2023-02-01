!(function (v) {
    "use strict";
    function e() {}
    (e.prototype.init = function () {
        var a = v("#event-modal"),
            t = v("#modal-title"),
            n = v("#form-event"),
            l = null,
            i = null,
            r = document.getElementsByClassName("needs-validation"),
            l = null,
            i = null,
            e = new Date(),
            s = e.getDate(),
            d = e.getMonth(),
            e = e.getFullYear();
        new FullCalendarInteraction.Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
            eventData: function (e) {
                return { title: e.innerText, className: v(e).data("class") };
            },
        });
        (e = [

        ]),
            document.getElementById("external-events"),
            (d = document.getElementById("calendar"));
        function o(e) {
            a.modal("show"), n.removeClass("was-validated"), n[0].reset(), v("#event-title").val(), v("#event-category").val(), t.text("Add Event"), (i = e);
        }
        var c = new FullCalendar.Calendar(d, {
            plugins: ["bootstrap", "interaction", "dayGrid", "timeGrid"],
            editable: !0,
            droppable: !0,
            selectable: !0,
            defaultView: "dayGridMonth",
            themeSystem: "bootstrap",
            header: { left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" },
            eventClick: function (e) {
                a.modal("show"), n[0].reset(), (l = e.event), v("#event-title").val(l.title), v("#event-category").val(l.classNames[0]), (i = null), t.text("Edit Event"), (i = null);
            },
            dateClick: function (e) {
                o(e);
            },
            events: e,
        });
        c.render(),
            v(n).on("submit", function (e) {
                e.preventDefault();
                v("#form-event :input");
                var t = v("#event-title").val(),
                    e = v("#event-category").val();
                !1 === r[0].checkValidity()
                    ? (event.preventDefault(), event.stopPropagation(), r[0].classList.add("was-validated"))
                    : (l ? (l.setProp("title", t), l.setProp("classNames", [e])) : ((e = { title: t, start: i.date, allDay: i.allDay, className: e }), c.addEvent(e)), a.modal("hide"));
            }),
            v("#btn-delete-event").on("click", function (e) {
                l && (l.remove(), (l = null), a.modal("hide"));
            }),
            v("#btn-new-event").on("click", function (e) {
                o({ date: new Date(), allDay: !0 });
            });
    }),
        (v.CalendarPage = new e()),
        (v.CalendarPage.Constructor = e);
})(window.jQuery),
    (function () {
        "use strict";
        window.jQuery.CalendarPage.init();
    })();
