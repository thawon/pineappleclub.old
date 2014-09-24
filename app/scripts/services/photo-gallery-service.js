define(
    ["app"],
    function (app) {
        app.factory("PhotoGalleryService", [
            function () {
                var gallery = {};

                gallery.photos = [
                    { name: "Art and Craft Room", description: "a", src: "/images/photos/art-craft-room.jpg" },
                    { name: "Art and Craft Table", description: "b", src: "/images/photos/art-craft-table.jpg" },
                    { name: "Book Corner", description: "c", src: "/images/photos/book-corner.jpg" },
                    { name: "Desk Corner", description: "d", src: "/images/photos/desk-corner.jpg" },
                    { name: "Play Room", description: "e", src: "/images/photos/playroom.jpg" }
                ];

                return gallery;
            }
        ]);
    });