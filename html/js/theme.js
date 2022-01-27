!function () {
    function t(t) {
        document.documentElement.setAttribute("data-theme", t)
    }
    
    var e = function () {
        var t = null;
        try {
            t = localStorage.getItem("theme")
        }
        catch (t) { }
        return t;
    }();

    t(null !== e ? e : "light")
}()
