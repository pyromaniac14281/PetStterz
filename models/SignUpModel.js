//imports the orm login_credentials

var credentials = ('../config/login_credentials.js')

var personCredentials = {
    signUp: function () {
        orm.signUp('TABLENAME', (res) => {
            cb(res)
        })

    },
    signIn: function () {
        orm.signIn('TABLENAME', (res) => {
            cb(res)
        })

    },

    convertToProvider: function () {
        orm.convertToProvider('TABLENAME', (res) => {
            cb(res)
        })

    }
}