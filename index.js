var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        document.getElementById('unhas').width = window.innerWidth;
        document.getElementById('unhas').height = (window.innerWidth / 8) * 6;

        document.getElementById('esmalte').width = window.innerWidth;
        document.getElementById('esmalte').height = (window.innerWidth / 8) * 4;

        var paint_engine = new PaintEngine({
            sketch_canvas: 'unhas',
            sketch_files: ['hand.png'],
            palette_canvas: 'esmalte',
            palette_file: 'nail.png',
            color_blacklist: [{ r: 0x00, g: 0x00, b: 0x00, a: 0xff }, //black
                { r: 199, g: 135, b: 64, a: 0xff }, //android/chrome skin
                { r: 129, g: 0x00, b: 129, a: 0xff }, //android/chrome background
                { r: 193, g: 144, b: 41, a: 0xff }, //mozilla skin
                { r: 135, g: 0x00, b: 132, a: 0xff } //mozilla background
            ],
            color: { r: 233, g: 0x00, b: 0x00, a: 0xff },
        });
        paint_engine.run();
    },


};

app.initialize();