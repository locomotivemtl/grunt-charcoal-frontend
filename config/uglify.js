module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    admin: {
        files: {
            'assets/dist/scripts/charcoal.admin.min.js': [ '<%= concat.admin.dest %>' ]
        }
    },
    vendors: {
        files: {
            'assets/dist/scripts/charcoal.admin.vendors.min.js': [ '<%= concat.vendors.dest %>' ]
        }
    }
};