(function() {
    const no_of_years = document.querySelector("#no_of_years");
    if (!!no_of_years) {
        var carrier_start_date = moment(new Date(2016, 12, 1));
        var today_date = moment(new Date());
        const experience = today_date.diff(carrier_start_date, "years", true).toFixed(1);
        no_of_years.innerHTML = "<b>" + experience + " years</b>";
    }
})();

//# sourceMappingURL=index.72be8890.js.map
