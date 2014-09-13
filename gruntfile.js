module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "./app/styles/custom-bootstrap.css": "./app/lesses/styles.less"
                }
            }
        },
        watch: {
            files: "./app/lesses/*.less",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};