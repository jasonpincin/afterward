var setImmediate = require('set-immediate-shim')

module.exports = function afterward (done, cb) {
    cb = cb || function () {}
    done.then(function (value) {
        setImmediate(cb.bind(undefined, null, value))
    })
    done.catch(function (err) {
        setImmediate(cb.bind(undefined, err || new Error('rejected with no reason')))
    })
    return done
}
