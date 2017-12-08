var bodyContains = [
    {
        title: "Alquimia Mental",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        image: "images/news/alquimia.jpg",
        date: new Date()
    },
    {
        title: "Meditação",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        image: "images/news/meditacao.jpg",
        date: new Date()
    },
    {
        title: "Meditação",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        image: "images/news/karma.jpg",
        date: new Date()
    }
];

var bodyCtrl = {

    startBody: function () {

        var html = "<div class='wrapper'>";

        for (var i = 0; i < bodyContains.length; i++) {
            html += "<div class='card'>" +
                "<div class='card-image'>" +
                "<figure class='image is-4by3'>" +
                "<img src='" + bodyContains[i].image + "' alt='Placeholder image'>" +
                "</figure>" +
                "</div>" +
                "<div class='card-content'>" +
                "<div class='media'>" +
                "<div class='media-left'>" +
                "<figure class='image is-48x48'>" +
                "<img src='" + bodyContains[i].image + "' alt='Placeholder image'>" +
                "</figure>" +
                "</div>" +
                "<div class='media-content'>" +
                "<p class='title is-4'>" + bodyContains[i].title + "</p>" +
                "<p class='subtitle is-6'>" + bodyContains[i].title + "</p>" +
                "</div>" +
                "</div>" +
                "<div class='content'>" + bodyContains[i].subtitle +
                "<br>" +
                "<a href='#'>#css</a> <a href='#'>#responsive</a>" +
                "<br>" +
                "<time datetime='2016-1-1'>" + bodyContains[i].date + "</time>" +
                "</div>" +
                "</div>" +
                "</div><br />";
        }

        $("#alcBody").html(html);
    },
}