// This script handles the checkbox functionality, local storage, and reward image fetching

$(document).ready(function () {
    const checkboxes = $('input[type="checkbox"]');
    const summary = $("#summary");
    const rewardBtn = $("#reward-btn");
    const rewardImg = $("#reward-img");

    // Load stored selections
    checkboxes.each(function () {
        const id = $(this).attr("id");
        const storedValue = localStorage.getItem(id);
        if (storedValue === "true") {
            $(this).prop("checked", true);
        }
    });

    // Update summary
    function updateSummary() {
        const count = checkboxes.filter(":checked").length;
        summary.text(count);
        localStorage.setItem("checkedCount", count);

        // Show reward button
        if (count >= 10) {
            rewardBtn.removeClass("d-none");
        } else {
            rewardBtn.addClass("d-none");
            rewardImg.html("");
        }
    }

    // Handle checkbox click
    checkboxes.on("change", function () {
        const id = $(this).attr("id");
        localStorage.setItem(id, $(this).is(":checked"));
        updateSummary();
    });

    // Fetch reward image on button click
    rewardBtn.on("click", function () {
        $.get("https://api.thecatapi.com/v1/images/search", function (data) {
            rewardImg.html(`<img src="${data[0].url}" class="img-fluid rounded mt-2" width="300">`);
        });
    });

    // Initialize summary
    updateSummary();
});